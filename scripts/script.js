let cards = [
  {
    city: "Перьм",
    src: "assets/Overseer_Смотрящий, Andrey Surnov.jpeg",
    text: "Пермь — это крупный город на западе России, расположенный на берегу реки Камы. Он является административным центром Пермского края и важным промышленным, культурным и научным центром Урала.",
  },
  {
    city: "Кельн",
    src: "assets/scale_1200.jpeg",
    text: "Кёльн — это один из старейших и самых известных городов Германии, расположенный на берегу реки Рейн в земле Северный Рейн-Вестфалия.",
  },
  {
    city: "Винница",
    src: "assets/5cf79126-95f3-4af6-b5ab-94f781782ad4.jpeg",
    text: "Папич — это стример, который стал настоящей современной 'достопримечательностью' Винницы. Хотя он не является физическим объектом, его влияние на культуру и туристическую привлекательность города сложно переоценить.",
  },
];

let inputCity = document.getElementById("input_city");
let inputPicture = document.getElementById("input_picture");
let inputText = document.getElementById("input_text");
let contentCard = document.getElementById("content");
let addButton = document.getElementById("btn");

function addCard(inputOne, inputPic, inputTwo) {
  const cardTemplate = document.querySelector("#card-template").content;
  const cardElement = cardTemplate.cloneNode(true);

  const card = cardElement.querySelector(".card");
  const city = cardElement.querySelector(".city");
  const picture = cardElement.querySelector(".pic");
  const text = cardElement.querySelector(".text");
  const likeButton = cardElement.querySelector(".like_button");
  const deleteButton = cardElement.querySelector(".delete_button");

  city.textContent = inputOne;
  picture.src = inputPic;
  picture.alt = inputTwo;
  text.textContent = inputTwo;

  likeCard(likeButton);
  deleteCard(deleteButton, card);

  return card;
}

function likeCard(obj) {
  obj.addEventListener("click", function () {
    obj.classList.toggle("like_active");
  });
}

function deleteCard(obj, card) {
  obj.addEventListener("click", function () {
    card.remove();
  });
}

addButton.addEventListener("click", function () {
  let newCard = addCard(inputCity.value, inputPicture.value, inputText.value);
  contentCard.appendChild(newCard);
  inputCity.value = "";
  inputPicture.value = "";
  inputText.value = "";
});

cards.forEach((obj) => {
  let card = addCard(obj.city, obj.src, obj.text);
  contentCard.appendChild(card);
});
