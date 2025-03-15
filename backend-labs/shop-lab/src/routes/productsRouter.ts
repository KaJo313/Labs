import { Router } from "express"
import {
  getProducts,
  getProduct,
  postProduct,
  putProduct,
  deleteProduct
} from "../controllers/products"

const routes = Router()

routes.get("/", getProducts)
routes.get("/:id", getProduct)
routes.post("/", postProduct)
routes.put("/:id", putProduct)
routes.delete("/:id", deleteProduct)

export default routes
