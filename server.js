import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js"
import cors from "cors";
import CategoryRoutes from "./routes/CategoryRoutes.js"
import ProductRoutes from "./routes/ProductRoutes.js"
//configure environment
dotenv.config();

//database config
connectDB();

//rest object
const app = express();

//middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());


//routes all
app.use("/api/v1/auth", authRoutes);


//category routes
app.use("/api/v1/category", CategoryRoutes)


//for products
app.use("/api/v1/products", ProductRoutes)

//rest api
app.get("/", (req, res) => {
  res.send("<h1>world</h1>");
});



const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`server running on ${PORT} `.bgCyan.white);
});



