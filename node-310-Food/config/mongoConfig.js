const PASSWORD = "Gogoys1020!";
const mongoURL = `mongodb+srv://GOGOYS:${PASSWORD}@cluster0.r8ph8qg.mongodb.net/?retryWrites=true&w=majority`;

import mongoose from "mongoose";
const Schema = mongoose.Schema;
const foodSchema = Schema({
  d_id: String,
  d_date: String,
  d_food: String,
  d_qty: Number,
  d_kcal: Number,
});

const food_model = mongoose.model("food", foodSchema);

export { mongoURL, food_model };
