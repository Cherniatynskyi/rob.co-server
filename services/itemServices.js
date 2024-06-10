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
    const {page=1, limit=9, category, pricemin=0, pricemax=100000000, color, } = req.query
    const skip = (page-1) * limit

    if((color==='all') & (category !== "all")){
      const items = await ItemModel.find({category, price: {$lt: pricemax, $gt: pricemin}}, "" ,{skip, limit});
      return items
    }

    if((color!=='all') & (category === "all")){
      const items = await ItemModel.find({color, price: {$lt: pricemax, $gt: pricemin}}, "" ,{skip, limit});
      return items
    }

    if((color === 'all') & (category === "all")){
      console.log(pricemin, pricemax)
      const items = await ItemModel.find({price: {$lt: pricemax, $gt: pricemin}}, "" ,{skip, limit});
      return items
    }

    const items = await ItemModel.find({category, color, price: {$lt: pricemax, $gt: pricemin}}, "" ,{skip, limit});

  
    if (!items) {
      throw HttpError(404);
    }
  
    return items;
};




  