import express from "express"
import { addItem, deleteItem, editItem, getItemByCity, getItemById, getItemByShop, rating, searchItems } from "../controllers/item.controllers.js"
import isAuth from "../middlewares/isAuth.js"
import { upload } from "../middlewares/multer.js"


const itemRouter = express.Router()
itemRouter.post("/add-item", isAuth,upload.single("image"),addItem)
itemRouter.post("/edit-item/:itemId", isAuth,upload.single("image"), editItem)
itemRouter.get("/get-by-id/:itemId",isAuth, getItemById)
itemRouter.get("/delete/:itemId", isAuth, deleteItem)
itemRouter.get("/get-by-city/:city", isAuth, getItemByCity)
itemRouter.get("/get-item-by-shop/:shopId", isAuth, getItemByShop)
itemRouter.get("/search-items", isAuth, searchItems)
itemRouter.post("/rating", isAuth, rating)

export default itemRouter