import jwt from "jsonwebtoken";
import Business from "../models/business.model.js";
export const checkToken = async (req, res, next) => {
  try {
    const token = req.cookies.accessToken;
    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    if (!decodedToken) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    const business = await Business.findById(decodedToken.id).select(
      "-password"
    );
    if (!business) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    res.locals.business = business;
    next();
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};
