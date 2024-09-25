import ApiError from "../libs/ApiError.js";
import ApiResponse from "../libs/ApiResponse.js";
import Invoice from "../models/invoice.model.js";

export const createInvoice = async (req, res) => {
  try {
    const data = req.body;
    const business = res.locals.business;
    data.items.forEach((item) => {
      item.total = item.quantity * item.price;
    });
    data.subtotal = data.items.reduce((acc, item) => acc + item.total, 0);
    data.tax = data.subtotal * 0.08;
    data.totalAmount = data.subtotal + data.tax;
    data.business = business._id;
    //tushar-sameer  …create pdf with invoice details
    await Invoice.create({
      customer: {
        name: data.name,
        phone: data.phone,
        address: {
          street: data.street,
          city: data.city,
          state: data.state,
          zipCode: data.zipCode,
        },
      },
      items: data.items,
      dueDate: data.dueDate,
      subtotal: data.subtotal,
      tax: data.tax,
      totalAmount: data.totalAmount,
      status: data.status,
      business: res.locals.business._id,
    });
    res.status(201).json(new ApiResponse("Invoice created successfully"));
  } catch (error) {
    console.log(error);
    res.status(500).json(new ApiError("Internal Server Error"));
  }
};

export const getInvoice = async (req, res) => {
  try {
    const id = req.params.id;
    const invoice = await Invoice.findById(id);
    if (!invoice) {
      return res.status(400).json(new ApiError("Invoice not found"));
    }
    res.status(200).json(new ApiResponse("Fetched successfully", invoice));
  } catch (error) {
    return res
      .status(500)
      .json(new ApiError(error.message || "Internal Server Error"));
  }
};

export const getInvoices = async (req, res) => {
  try {
    const business = res.locals.business;
    const invoices = await Invoice.find({ business: business._id });
    res.status(200).json(new ApiResponse("Fetched successfully", invoices));
  } catch (error) {
    return res
      .status(500)
      .json(new ApiError(error.message || "Internal Server Error"));
  }
};
