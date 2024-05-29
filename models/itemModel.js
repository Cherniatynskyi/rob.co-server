import { Schema, model } from "mongoose";

const types = ['floor-vacuum', 'window-vacuum', 'homepod']

const itemSchema = new Schema(
    {
      category: {
        type: String,
        required: true,
        enum: types
      },
      title: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      model: {
        type: String,
        required: true
      },
      brand: {
        type: String,
        required: true,
      },
      color: {
        type: String,
        required: true
      },
      price:{
        type: Number,
      },
      techs: {
        type: Object
      },
      reviews: {
        type: Array
      },
      sales: {
        type: Number
      },
      photo_urls: { type: Array },   
    },
    { versionKey: false }
  );
  
  export const ItemModel = model("Item", itemSchema);