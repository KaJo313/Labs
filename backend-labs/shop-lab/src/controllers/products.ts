import Product from "../models/Product"
import User from "../models/User"
import HTTPHandler from "../utils/HTTPHandler"
import { ObjectId } from "mongoose"

// READ MANY - GET ? queryParams

export const getProducts: HTTPHandler = async (req, res) => {
  try {
    const query: any = {}
    if (req.query.maxPrice) query.price = { $lte: +req.query.maxPrice }

    if (req.query.includes !== undefined)
      query.name = { $regex: new RegExp(req.query.includes as string, "i") }

    const products = await (req.query.limit
      ? Product.find(query).limit(+req.query.limit)
      : Product.find(query))

    res.status(200).send(products)
  } catch (error) {
    res.status(500).send("Internal Server Error!")
  }
}

// READ ONE - GET w/ an id in params

export const getProduct: HTTPHandler = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id)
    res.status(200).send(product)
  } catch (error) {
    res.status(404).send("Product Not Found")
  }
}

// CREATE - POST w/ a body

export const postProduct: HTTPHandler = async (req, res) => {
  try {
    const product = new Product(req.body)
    await product.save()
    res.status(201).send(product)
  } catch (error) {
    res.status(400).send("Bad request!")
  }
}

// UPDATE WHOLE - PUT w/ id & a body (whole object)

export const putProduct: HTTPHandler = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    })
    res.status(200).send(product)
  } catch (error) {
    res.status(404).send("Product Not Found")
  }
}

//
// DESTROY - DELETE w/ id

export const deleteProduct: HTTPHandler = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id)
    res.status(204).send()
  } catch (error) {
    res.status(404).send("Product Not Found")
  }
}

//
// READ MANY DRIVERS
/*
export const getCarDrivers: HTTPHandler = async (req, res) => {
  try {
    const drivers = await Car.findById(req.params.id).populate("drivers")
    if (!drivers) throw new Error("Car not found")
    res.status(200).send(drivers)
  } catch (error) {
    res.status(404).send("Car Not Found")
  }
}
*/
//

// UPDATE:  INC MILEAGE - PATCH w/ id & a body (specific fields)
/*
export const driveMiles: HTTPHandler = async (req, res) => {
  try {
    const car = await Car.findById(req.params.id)
    const amountMiles = +req.body.amountMiles
    if (!amountMiles) throw new Error("Bad Request")
    if (!car) throw new Error("Car Not Found")
    car.mileage += amountMiles
    await car.save()
    res.status(200).send(car)
  } catch (error: any) {
    res.status(404).send(error.status)
  }
}
*/
//
/*
// UPDATE:  ADD DRIVER

export const addDriver: HTTPHandler = async (req, res) => {
  try {
    const car = await Car.findById(req.params.carId)
    if (!car) throw new Error("Car not found")
    const driver = await Driver.findById(req.params.driverId)
    if (!driver) throw new Error("Driver not found")
    car.drivers.push(driver._id)
    await car.save()
    res.status(200).send(car)
  } catch (error: any) {
    res.status(404).send(error.status)
  }
}
*/
