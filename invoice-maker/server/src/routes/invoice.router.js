import { Router } from "express";
import { checkToken } from "../middlewares/auth.middleware.js";
import { validate } from "../middlewares/validate.middleware.js";
import { invoiceSchema } from "../schemas/zodSchema.js";
import { createInvoice } from "../controllers/invoice.controller.js";

const invoiceRouter = Router();

invoiceRouter.post(
  "/create",
  checkToken,
  validate(invoiceSchema),
  createInvoice
);

export default invoiceRouter;
