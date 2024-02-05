// ищем на странице элемент с классом iPhone и записываем его в переменную
const iPhone = document.querySelector(".iPhone");
// ищем на странице элемент с классом samsung и записываем его в переменную
const samsung = document.querySelector(".samsung");

iPhone.addEventListener("click", function (event) {
  // по какому элементу был клик
  let clickTarget = event.target;
  // ищем внутри карточки с айфоном элемент с классом active
  let activeButton = iPhone.querySelector(".active");
  // ищем внутри карточки с айфоном элемент с классом price
  let priceItem = iPhone.querySelector(".price");
  // cоздаем переменную для значения стоимости товара
  let currentPrice;
  // ищем внутри карточки с айфоном элемент с классом active-border
  let activeButtonColor = iPhone.querySelector(".active-border");

  // Реализуем механику выбора цвета
  // Если элемент, на который кликнули, содержит класс – color-btn
  // И этот элемент НЕ СОДЕРЖИТ класс – active-border, тогда
  if (
    clickTarget.classList.contains("color-btn") &&
    !clickTarget.classList.contains("active-border")
  ) {
    // добавляем этому элементу класс – active-border
    clickTarget.classList.add("active-border");
    // убираем класс – active-border с предыдущего элемента
    activeButtonColor.classList.remove("active-border");
  }

  // Реализуем механику смены табов с размеров устройства
  // Если элемент, на который кликнули, содержит класс – btn
  // И этот элемент НЕ СОДЕРЖИТ класс – active, тогда
  if (clickTarget.classList.contains("btn") && !clickTarget.classList.contains("active")) {
    // добавляем этому элементу класс – active
    clickTarget.classList.add("active");
    // убираем класс – active с предыдущего элемента
    activeButton.classList.remove("active");

    // при клике на элемент, проверяем, есть ли унего атрибут data-size
    // если атрибут есть, то записываем занчение этого атрибута в переменную
    currentPrice = clickTarget.getAttribute("data-size");

    // если значение атрибута – medium, тогда
    if (currentPrice === "medium") {
      // меняем текст с ценой на новый
      priceItem.textContent = "Цена 80 000р.";
    }
    // если значение атрибута – large, тогда
    if (currentPrice === "large") {
      // меняем текст с ценой на новый
      priceItem.textContent = "Цена 100 000р.";
    }

  }
});

samsung.addEventListener("click", function (event) {
  let clickTarget = event.target;
  let activeButton = samsung.querySelector(".active");
  let priceItem = samsung.querySelector(".price");
  let currentPrice;

  let buttonsColor = samsung.querySelector(".colors-container");

  console.log(buttonsColor);

  let activeButtonColor = samsung.querySelector(".active-border");
  console.log(activeButtonColor);

  if (
    clickTarget.classList.contains("color-btn") &&
    !clickTarget.classList.contains("active-border")
  ) {
    clickTarget.classList.add("active-border");
    activeButtonColor.classList.remove("active-border");
  }

  if (
    clickTarget.classList.contains("btn") &&
    !clickTarget.classList.contains("active")
  ) {
    clickTarget.classList.add("active");
    activeButton.classList.remove("active");

    currentPrice = clickTarget.getAttribute("data-size");

    if (currentPrice === "medium") {
      priceItem.textContent = "Цена 40 000р.";
    }

    if (currentPrice === "large") {
      priceItem.textContent = "Цена 60 000р.";
    }
  }
});

