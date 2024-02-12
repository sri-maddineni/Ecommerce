import express from "express";
import { requireSignIn, isAdmin } from "../middlewares/authMiddleware.js"
import { createProductController,updateProductController,productPhotoController,deleteProductController, getProductController,getSingleProductController } from "../controllers/ProductController.js";
import formidable from "express-formidable";

const router = express.Router();

//routes

router.post('/create-product', requireSignIn, isAdmin, formidable(), createProductController)


//get all products
router.get("/get-products", getProductController)

//get single product
router.get("/get-product/:slug", getSingleProductController)


//get photo route
router.get("/product-photo/:pid",productPhotoController)

//delete product route
router.get("/delete-product/:pid",deleteProductController)


//update product
router.post('/update-product/:pid', requireSignIn, isAdmin, formidable(), updateProductController)


export default router;