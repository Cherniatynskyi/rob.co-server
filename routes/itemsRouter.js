import express from "express";

import * as itemsControllers from '../controllers/itemsControllers.js'



const itemsRouter = express.Router();


itemsRouter.get("/new", itemsControllers.getNew);

itemsRouter.get("/topsales", itemsControllers.getTopSales);

itemsRouter.get("/category", itemsControllers.getCategory);




export default itemsRouter;