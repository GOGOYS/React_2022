const USERNAME = "GOGOYS";
const PASSWORD = "Gogoys1020!";
const mongoURL = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.r8ph8qg.mongodb.net/?retryWrites=true&w=majority`;
/*
mongoose 도구를 사용하여
NoSQL 인 mongoDB 에 DMBS Schema 방식으로 접근하기

*/
import mongoose from "mongoose";
const Schema = mongoose.Schema;

const food = Schema({
  f_id: String,
  f_date: String,
  f_title: String,
  f_eat: Number,
  f_kcal: String,
  f_totalkcal: String,
});

const food_model = mongoose.model("food", food);
export { mongoURL, food_model };
