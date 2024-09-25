import { Router } from "express";
import { getRandomData } from "../controllers/randomData.controller.js";

const randomDataRouter = Router();

randomDataRouter.get("/random", getRandomData);

export default randomDataRouter;
