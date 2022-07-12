import express from "express";

const router = express.Router();

import { food_model } from "../config/mongoConfig.js";

router.get("/selectAll", (req, res) => {
  food_model.find({}).then((result) => res.json(result));
});

//localhost:3000/food/insert를 POST로 받는다.
router.post("/insert", (req, res) => {
  console.log(req.body);
  food_model.create(req.body);
  res.json({ OK: "OK" });
});

/*
  REST FUL 방식의 delete RequestMethod로 요청을 받고
  주소창에 전달된 주소값을 id params 변수에 받아 확인하기
*/
router.delete("/remove/:id", (req, res) => {
  const id = req.params.id;
  console.log("받은 ID", id);
  /*
    mongoose 모델의 findOneAndDelete 함수를 호출하여
    d_id 값이 id와 일치하는 데이터를 삭제하라
    findOneAndRemove는 findOneAndModify로 변경되었다.
    실제로 삭제하려면 findOneAndDelete

  */
  food_model.findOneAndDelete({ d_id: id }).exec().then(res.send("OK"));
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
