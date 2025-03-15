import User from "../models/User"
import HTTPHandler from "../utils/HTTPHandler"
import CartItem from "../models/CartItem"
import Product from "../models/Product"

// READ MANY - GET ? queryParams
/*
export const getUsers: HTTPHandler = async (req, res) => {
  try {
    const users = await User.find()
    res.status(200).send(users)
  } catch (error) {
    res.status(500).send("Internal Server Error!")
  }
}
*/

// READ ONE - GET w/ an id in params

export const getUser: HTTPHandler = async (req, res) => {
  try {
    const product = await User.findById(req.params.id)
    res.status(200).send(product)
  } catch (error) {
    res.status(404).send("User Not Found")
  }
}

// CREATE - POST w/ a body

export const postUser: HTTPHandler = async (req, res) => {
  try {
    const user = new User(req.body)
    await user.save()
    res.status(201).send(user)
  } catch (error) {
    res.status(400).send("Bad Request")
  }
}

// UPDATE WHOLE - PUT w/ id & a body (whole object)

export const putUser: HTTPHandler = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    })
    res.status(200).send(user)
  } catch (error) {
    res.status(404).send("User Not Found")
  }
}

//
// DESTROY - DELETE w/ id

export const deleteUser: HTTPHandler = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id)
    res.status(204).send()
  } catch (error) {
    res.status(404).send("User Not Found")
  }
}

// *** CART OPERATIONS ***

// GET USER'S CART ITEMS
export const getCartItems: HTTPHandler = async (req, res) => {
  try {
    const userId = req.params.id

    const cartItems = await CartItem.find({ userId }).populate("product")

    res.status(200).send(cartItems)
  } catch (error) {
    res.status(500).send("Internal Server Error!")
  }
}

// POST - Add item to cart
export const addToCart: HTTPHandler = async (req, res) => {
  try {
    const userId = req.params.id
    const { product, quantity } = req.body

    if (quantity === undefined) {
      return res.status(400).send("Quantity must be provided")
    }

    const productExists = await Product.findById(product)
    if (!productExists) {
      return res.status(404).send("Product Not Found")
    }

    const existingCartItem = await CartItem.findOne({
      userId,
      product
    })

    if (existingCartItem) {
      existingCartItem.quantity += quantity
      await existingCartItem.save()

      await existingCartItem.populate("product")

      return res.status(200).send(existingCartItem)
    } else {
      const newCartItem = new CartItem({
        userId,
        product,
        quantity
      })

      await newCartItem.save()

      await newCartItem.populate("product")

      return res.status(201).send(newCartItem)
    }
  } catch (error) {
    res.status(400).send("Bad Request")
  }
}

// PATCH - Update cart item quantity
export const updateCartItem: HTTPHandler = async (req, res) => {
  try {
    const userId = req.params.id
    const productId = req.params.productId
    const { quantity } = req.body

    if (quantity === undefined) {
      return res.status(400).send("Quantity must be provided")
    }

    const cartItem = await CartItem.findOne({
      userId,
      product: productId
    })

    if (!cartItem) {
      return res.status(404).send("Not found")
    }

    cartItem.quantity = quantity
    await cartItem.save()

    await cartItem.populate("product")

    res.status(200).send(cartItem)
  } catch (error) {
    res.status(500).send("Internal Server Error!")
  }
}

// REMOVE ITEM FROM CART
export const removeCartItem: HTTPHandler = async (req, res) => {
  try {
    const userId = req.params.id
    const productId = req.params.productId

    const result = await CartItem.findOneAndDelete({
      userId,
      product: productId
    })

    if (!result) {
      return res.status(404).send("Not found")
    }

    res.status(204).send()
  } catch (error) {
    res.status(500).send("Internal Server Error!")
  }
}
