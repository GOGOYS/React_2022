const FoodInput = () => {
  const onClick = () => {
    const f_name = document.querySelector("input[name='f_name']");
    const f_eat = document.querySelector("input[name='f_eat']");
    const f_kcal = document.querySelector("input[name='f_kcal']");

    const f_data = {
      f_name: f_name.value,
      f_eat: f_eat.value,
      f_kcal: f_kcal.value,
    };
    console.log(f_data);

    const postOption = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(f_data),
    };

    fetch("http://localhost:3000/food/insert", postOption);
  };
  return (
    <>
      <input placeholder="식품명" name="f_name" />
      <input placeholder="섭취량" name="f_eat" />
      <input placeholder="칼로리" name="f_kcal" />
      <button type="button" onClick={onClick}>
        전송하기
      </button>
    </>
  );
};

export default FoodInput;
