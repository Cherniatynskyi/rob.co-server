import { trycatchFunc } from "../helpers/trycatchFunc.js";
import * as itemServices from '../services/itemServices.js'

export const getNew = trycatchFunc(async (req, res) => {
  const items = await itemServices.getNew(req);

  res.json(items);
});

export const getTopSales = trycatchFunc(async (req, res) => {
    const items = await itemServices.getTopSales(req);
  
    res.json(items);
});

export const getCategory = trycatchFunc(async (req, res) => {
  const items = await itemServices.getCategory(req);

  res.json(items);
});

