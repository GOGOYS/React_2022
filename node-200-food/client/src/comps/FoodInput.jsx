import { useState, useEffect } from "react";
import FoodList from "./FoodList";
import moment from "moment";

const FoodInput = () => {
  const [foodList, setFoodList] = useState([]);

  const fetchFoodList = async () => {
    const reponse = await fetch("http://localhost:3000/food/list");
    const jsonFood = await reponse.json();
    setFoodList(jsonFood);
  };

  useEffect(() => {
    fetchFoodList();
  }, []);

  const onClick = () => {
    const f_date = document.querySelector("input[name='f_date']");
    const f_title = document.querySelector("input[name='f_title']");
    const f_eat = document.querySelector("input[name='f_eat']");
    const f_kcal = document.querySelector("input[name='f_kcal']");
    const f_totalkcal = f_eat.value * f_kcal.value;

    const f_data = {
      f_date: moment().format("YYYY[-]MM[-]DD HH:mm:ss"),
      f_title: f_title.value,
      f_eat: f_eat.value,
      f_kcal: f_kcal.value,
      f_totalkcal: f_totalkcal,
    };
    console.log(f_data);

    const postOption = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(f_data),
    };

    fetch("http://localhost:3000/food", postOption)
      .then((res) => res.text())
      .then((result) => {
        if (result === "OK") {
          fetchFoodList();
        }
      });
  };

  return (
    <>
      <FoodList foodList={foodList} />
      <input placeholder="식품명" className="w3-input" name="f_title" />
      <input placeholder="섭취량" className="w3-input" name="f_eat" />
      <input placeholder="칼로리" className="w3-input" name="f_kcal" />
      <button type="button" onClick={onClick}>
        작성하기
      </button>
    </>
  );
};

export default FoodInput;
