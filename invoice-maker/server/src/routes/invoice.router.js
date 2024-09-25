import { Router } from "express";
import { checkToken } from "../middlewares/auth.middleware.js";
import {
  validateBody,
  validateParams,
} from "../middlewares/validate.middleware.js";
import { invoiceIdSchema, invoiceSchema } from "../schemas/zodSchema.js";
import {
  createInvoice,
  getInvoice,
} from "../controllers/invoice.controller.js";

const invoiceRouter = Router();

invoiceRouter.post(
  "/create",
  checkToken,
  validateBody(invoiceSchema),
  createInvoice
);
invoiceRouter.get("/:id", validateParams(invoiceIdSchema), getInvoice);

export default invoiceRouter;
