import { HttpError } from "../helpers/HttpError.js";
import { ItemModel } from "../models/itemModel.js";

export const getNew = async (req) => {
  const {page=1, limit=4} = req.query
  const skip = (page-1) * limit
  const items = await ItemModel.find({}, "" ,{skip, limit});

  return items;
}

export const getTopSales = async (req) => {
  const {page=1, limit=4} = req.query
  const skip = (page-1) * limit
  const items = await ItemModel.find({}, "" ,{skip, limit}).sort({sales: -1});

  return items;
}


export const getCategory = async (req) => {
    const {page=1, limit=6, category, pricemin=0, pricemax=100000000, color, } = req.query
    const skip = (page-1) * limit

    if((color==='all') & (category !== "all")){
      const allItems = await ItemModel.find({category, price: {$lt: pricemax, $gt: pricemin}})
      const total = allItems.length
      const items = await ItemModel.find({category, price: {$lt: pricemax, $gt: pricemin}}, "" ,{skip, limit});
      return {items, total}
    }

    if((color!=='all') & (category === "all")){
      const allItems = await ItemModel.find({color, price: {$lt: pricemax, $gt: pricemin}})
      const total = allItems.length
      const items = await ItemModel.find({color, price: {$lt: pricemax, $gt: pricemin}}, "" ,{skip, limit});
      return {items, total}
    }

    if((color === 'all') & (category === "all")){
      const allItems = await ItemModel.find({price: {$lt: pricemax, $gt: pricemin}})
      const total = allItems.length
      const items = await ItemModel.find({price: {$lt: pricemax, $gt: pricemin}}, "" ,{skip, limit});
      return {items, total}
    }

    const allItems = await ItemModel.find({category, color, price: {$lt: pricemax, $gt: pricemin}})
    const total = allItems.length
    const items = await ItemModel.find({category, color, price: {$lt: pricemax, $gt: pricemin}}, "" ,{skip, limit});

  
    if (!items) {
      throw HttpError(404);
    }
  
    return {items, total};
};




  