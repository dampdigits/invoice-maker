import express from "express";
import cors from "cors";
import randomDataRouter from "./routes/random.route.js";

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;

app.use("/api/v1/data", randomDataRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
