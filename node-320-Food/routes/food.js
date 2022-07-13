import express from "express";
const router = express.Router();
import { db } from "../models/index.js";
const { tbl_food } = db;
router.get("/selectAll", (req, res) => {
  tbl_food.findAll().then((result) => res.json(result));
});

/*
 스프링의 try catch 처럼
 문제가 없을때 .then으로 "OK"를 받고
 .catch로 err를 받는다.
*/
router.post("/insert", (req, res) => {
  req.body.d_id = 0;
  tbl_food
    .create(req.body)
    .then(res.json("OK"))
    .catch((err) => res.json(err));
});

router.delete("/remove/:id", (req, res) => {
  const id = req.params.id;
  tbl_food
    .destroy({ where: { d_id: id } })
    .then(res.json("OK"))
    .catch((err) => res.json(err));
});

export default router;

/*
  router, Controller에서 사용하는 RequestMehtod: REST FUL 방식의 요청
  get: 데이터를 요청할때 
  post: 데이터를 추가할때 
  delete: 데이터를 삭제할때
  put: 데이터를 업데이트 할때

  스프링에서는 get과 post만 자유롭게 사용하고
  delete와 put은 제한이 있다 (보안이 취약함)
  ajax타입으로 요청을 해야 사용이 가능하다

  react에서는 fetch를 사용하기 때문에 delete나 put으로
  데이터를 다룰 수 있다.
*/
