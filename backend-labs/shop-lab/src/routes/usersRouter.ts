import { Router } from "express"
import {
  //getUsers,
  getUser,
  postUser,
  putUser,
  deleteUser,
  getCartItems,
  addToCart,
  updateCartItem,
  removeCartItem
} from "../controllers/users"

const routes = Router()

//routes.get("/", getUsers)
routes.get("/:id", getUser)
routes.post("/", postUser)
routes.put("/:id", putUser)
routes.delete("/:id", deleteUser)
//cart items routes
routes.get("/:id/cart/", getCartItems)
routes.post("/:id/cart", addToCart)
routes.patch("/:id/cart/:productId", updateCartItem)
routes.delete("/:id/cart/:productId", removeCartItem)

export default routes
