
const food = document.querySelector("#food");
const input = document.querySelector("#food input");
const button = document.querySelector("#button");
const randomFood = document.querySelector("#food-list");
const stopButton = document.querySelector("#button-stop");
let foodList = [];
let intervalVar = null;

/* 입력받은 음식들이 저장된 foodList배열을 localStorage에 저장 */
function saveFoodList() {
    localStorage.setItem(FOOD_KEY, JSON.stringify(foodList));
}

/* foodList에서 임의의 인덱스를 가진 음식을 selectedFood에 저장하고, html에 추가 */
function showFood() {
    let selectedFood = foodList[Math.floor(Math.random() * foodList.length)];
    const li = document.createElement("li");
    li.innerText = selectedFood;
    randomFood.appendChild(li);
}


/* '입력 완료' 버튼 누르면 실행되는 함수 */
function handleClick(event) {
    event.preventDefault();
    saveFoodList();
    intervalVar = setInterval(showFood, 1000);
}

button.addEventListener("click", handleClick);


/* 음식 입력 후 엔터키 누르면 실행되는 함수 */
function handleSubmit(event) {
    event.preventDefault();
    foodList.push(input.value);
    input.value = "";
}

food.addEventListener("submit", handleSubmit);


/* STOP 버튼 누르면 실행되는 함수 */
function handleStop(event) {
    event.preventDefault();
    clearInterval(intervalVar);
}

stopButton.addEventListener("click", handleStop);


/* localStorage에 저장된 데이터 있으면 불러와서 foodList에 저장 */
const FOOD_KEY = "food";
const savedFood = localStorage.getItem(FOOD_KEY);

if (savedFood !== null) {
    const parsedFood = JSON.parse(savedFood);
    foodList = parsedFood;
    console.log(foodList);
}

