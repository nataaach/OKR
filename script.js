alert("Вітаємо на сайті продажу авіаквитків!");
const userName = prompt("Як вас звати?");
const isConfirmed = confirm("Чи бажаєте отримувати спеціальні пропозиції на email?");
document.getElementById("info-box").innerHTML += "<h2>Дякуємо, що обрали наш сервіс авіаквитків!</h2>";

function showDeveloperInfo(surname, name, position = "Розробник") {
  alert(`Прізвище: ${surname}\nІм'я: ${name}\nПосада: ${position}`);
}
showDeveloperInfo("Червякова", "Наталія");


function compareStrings(str1, str2) {
  if (str1.length > str2.length) {
    alert(`Більший рядок: ${str1}`);
  } else if (str2.length > str1.length) {
    alert(`Більший рядок: ${str2}`);
  } else {
    alert("Рядки однакової довжини");
  }
}
compareStrings("Київ", "Барселона");

document.body.style.backgroundColor = "white";
setTimeout(() => {
  document.body.style.backgroundColor = "";
}, 30000);

const redirectInfo = document.getElementById("redirect-info");
if (redirectInfo) {
  redirectInfo.textContent = "Вас перенаправить на Skyscanner...";
}

setTimeout(() => {
  location.href = "https://www.skyscanner.com.ua/flights";
}, 100000);

const items = document.querySelectorAll("ul li a");
items.forEach((link, index) => {
  link.innerHTML += ` ✈️ (${index + 1})`;
});
const infoBox = document.getElementById("info-box");

infoBox.innerHTML += "<p><strong>Порада:</strong> Купуйте квитки заздалегідь!</p>"; 

console.log("outerHTML:", infoBox.outerHTML);

const textNode = infoBox.firstChild;
console.log("nodeValue:", textNode ? textNode.nodeValue : "null");

const firstP = document.querySelector("p");
if (firstP) {
  firstP.textContent = "Актуальні рейси оновлюються щодня!";
}

document.write("<h2>Дякуємо, що обрали нас!</h2>");

const newInfo = document.createElement("p");
const newText = document.createTextNode("Нові рейси вже доступні для бронювання.");
newInfo.appendChild(newText);
infoBox.append(newInfo); 

infoBox.prepend(" Оголошення: ");

const subtitle = document.querySelector("h3");
if (subtitle) {
  subtitle.after(" Перевірте знижки на рейси!");
}


const toReplace = document.querySelector(".float-right h4");
if (toReplace) {
  const newHeading = document.createElement("h4");
  newHeading.textContent = " Гарячі пропозиції тижня!";
  toReplace.replaceWith(newHeading);
}

const discount = document.querySelector(".float-right p");
if (discount) {
  discount.remove();
}




