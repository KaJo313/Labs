import { Schema, model } from "mongoose"
import Product from "./Product"
import User from "./User"

const CartItemSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    product: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Product"
    },
    quantity: {
      type: Number,
      required: true
    }
  },
  { timestamps: true }
)

const CartItem = model("CartItem", CartItemSchema)
export default CartItem
