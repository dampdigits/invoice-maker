import { z } from "zod";

const registerSchema = z.object({
  name: z.string({ required_error: "Name is required" }),
  email: z
    .string({ required_error: "Email is required" })
    .email("Invalid email"),
  phoneNumber: z
    .string({
      required_error: "Phone number is required",
    })
    .min(10, "Phone number must be 10 digits")
    .max(10, "Phone number must be 10 digits"),
  password: z
    .string({
      required_error: "Password is required",
    })
    .min(8, "Password must be at least 8 characters"),
  street: z.string({
    required_error: "Street is required",
  }),
  city: z.string({
    required_error: "City is required",
  }),
  state: z.string({
    required_error: "State is required",
  }),
  zipCode: z.string({
    required_error: "Zip code is required",
  }),
  taxId: z.string({
    required_error: "TaxID is required",
  }),
});

const loginSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .email("Invalid email"),
  password: z
    .string({ required_error: "Password is required" })
    .min(8, "Password must be at least 8 characters"),
});

const itemSchema = z.object({
  description: z.string({
    required_error: "Description is required",
  }),
  quantity: z.number({
    required_error: "Quantity is required",
  }),
  price: z.number({
    required_error: "Price is required",
  }),
});

const invoiceSchema = z.object({
  name: z.string({
    required_error: "Name is required",
  }),
  phone: z.string({
    required_error: "Phone is required",
  }),
  street: z.string({
    required_error: "Street is required",
  }),
  city: z.string({
    required_error: "City is required",
  }),
  state: z.string({
    required_error: "State is required",
  }),
  zipCode: z.string({
    required_error: "Zip code is required",
  }),
  items: z.array(itemSchema),
  dueDate: z
    .string({
      required_error: "Due date is required",
    })
    .datetime(),
  status: z.enum(["Pending", "Paid", "Overdue"]),
});

export { registerSchema, loginSchema, invoiceSchema };
