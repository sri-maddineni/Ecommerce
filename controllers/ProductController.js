import slugify from "slugify";
import ProductModel from "../models/ProductModel.js"
import fs from "fs";


export const createProductController = async (req, res) => {
    try {
        const { name, slug, description, price, category, quantity, shipping } = req.fields;
        const { photo } = req.files;

        //validation
        switch (true) {
            case !name:
                return res.status(500).send({ error: "Name is required!" })
            case !description:
                return res.status(500).send({ error: "description is required!" })
            case !price:
                return res.status(500).send({ error: "price is required!" })
            case !category:
                return res.status(500).send({ error: "category is required!" })
            case !quantity:
                return res.status(500).send({ error: "quantity is required!" })
            case !shipping:
                return res.status(500).send({ error: "shipping is required!" })
            case !photo && photo.size > 1000000:
                return res.status(500).send({ error: "Photo is required, and less than 1MB!" })


            default:
                break;
        }

        const product = new ProductModel({ ...req.fields, slug: slugify(name) })
        if (photo) {
            product.photo.data = fs.readFileSync(photo.path)
            product.photo.contentType = photo.type
        }

        await product.save()
        res.status(201).send({
            success: true,
            message: "product created successfully!",
            product
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "Error in creating product",
            error
        })
    }
}


///get products all product controller

export const getProductController = async (req, res) => {

    try {
        const products = await ProductModel.find({}).populate("category").select("-photo").limit(12).sort({ createdAt: -1 })
        res.status(200).send({
            success: true,
            message: true,
            message: "All products",
            products,
            totalcount: products.length,
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "Error in getting products",
            error
        })
    }

}

export const getSingleProductController = async (req, res) => {
    try {
        const product = await ProductModel.findOne({ slug: req.params.slug }).select("-photo").populate("category");

        res.status(200).send({
            success: true,
            message: "Single product fetched!",
            product

        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            message: "error in getting the product",
            success: false,

        })
    }
}


//get photo

export const productPhotoController = async (req, res) => {
    try {
        const product = await ProductModel.findById(req.params.pid).select("photo")

        if (product.photo.data) {
            res.set("content-type", product.photo.contentType)
            return res.status(200).send(
                product.photo.data)
        }

    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "Error in getting photo",
            error

        })
    }
}


//delete product controller
export const deleteProductController = async (req, res) => {
    try {


        await ProductModel.findByIdAndDelete(req?.params.pid).select("-photo")
        res.status(200).send({
            success: true,
            message: "Product deleted succcessfully!",

        })

    } catch (error) {
        console.log(error)
        res.status(200).send({
            success: false,
            message: "Error in deleting product",
            error
        })
    }
}




///update product controller


export const updateProductController = async (req, res) => {
    try {
        const { name, slug, description, price, category, quantity, shipping } = req.fields;
        const { photo } = req.files;

        //validation
        switch (true) {
            case !name:
                return res.status(500).send({ error: "Name is required!" })
            case !description:
                return res.status(500).send({ error: "description is required!" })
            case !price:
                return res.status(500).send({ error: "price is required!" })
            case !category:
                return res.status(500).send({ error: "category is required!" })
            case !quantity:
                return res.status(500).send({ error: "quantity is required!" })
            case !shipping:
                return res.status(500).send({ error: "shipping is required!" })
            case !photo && photo.size > 1000000:
                return res.status(500).send({ error: "Photo is required, and less than 1MB!" })

            default:
                break;
        }

        const product = await ProductModel.findByIdAndUpdate(req.params.pid, {
            ...req.fields, slug: slugify(name)
        },{new:true})
        if (photo) {
            product.photo.data = fs.readFileSync(photo.path)
            product.photo.contentType = photo.type
        }

        await product.save()
        res.status(201).send({
            success: true,
            message: "product updated successfully!",
            product
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "Error in updating product",
            error
        })
    }
}