// Nodejs, Express project의 Web Framwork
import express from "express";
import { food_model } from "../config/mongoConfig.js";

/*
import된 도구를 사용하는 방법 2가지

express.Router 함수(또는 객체)를 router 라는 이름으로 사용하겠다
const router = express.Router

express.Router 함수를 실행하여 return될 결과를 router변수에 담아라
const router = express.Router()
*/
const router = express.Router();

router.get("/", (req, res, next) => {
  const query = req.query.title;

  res.json({ title: query });
});

//localhost:3000/food 주소로 POST 데이터가 전송되어 오면
router.post("/", (req, res) => {
  const body = req.body;
  console.table(body);
  // food_model에 설정된 사항을 참조하여
  //req.body에 담겨서 전달된 데이터를 INSERT 수행하다
  food_model.create(body).then((result) => res.send("OK"));
});

router.get("/list", (req, res) => {
  //food_model에 설정된 사항을 참조하여
  //모든 ({})데이터를 selectAll(find())하고
  //결과를 result 변수에 받고
  //result 변수에 받은 데이터를 JSON으로 client에게 보내라
  food_model.find({}).then((result) => res.json(result));
});

export default router;
