import Invoice from "../models/invoice.model.js";

export const createInvoice = async (req, res) => {
  try {
    const data = req.body;
    console.log("tushar");
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
    res.status(201).json({ message: "Invoice created successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
