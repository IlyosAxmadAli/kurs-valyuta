//   1-masala

/*const ism = prompt("Kim kerak ?");
const ismlar = ["Ilyos", "Axmad", "Ali"];

if (ismlar.includes(ism)) {
  alert(`Ha ${ism} bor`);
} else {
  alert(`Afsus ${ism} yo'q`);
}*/

//   2-masala

/*let yosh = prompt("Yoshingizni kiriting");

if (yosh <= 30) {
  console.log("Yoshsiz !");
} else if (yosh >= 60 && yosh <= 60) {
  console.log("Kattasiz !");
} else {
  console.log("Qarisiz !");
}*/

//   3-masala

/*const ism = prompt("Ismingizni kiriting");

if (ism == "Ali") {
  console.log("Salom og'a");
} else if (ism == "Ahmad") {
  console.log("Ko'rinmayapsan");
}*/

//   4-masala

/*let oylik = +prompt(
  "Yillik daromadingizni bilish uchun oylik maoshingizni kiriting !"
);
let soliq = prompt("Soliq bilan xisoblansinmi, yoki soliqlarsiz ?");
let foyiz = +prompt("Soliq necha foyiz ?");

let ha = "Soliq bilan";
let yoq = "Soliqlarsiz";

if (soliq == ha) {
  let result = (oylik - (oylik / 100) * foyiz) * 12;
  console.log(result);
} else if (soliq == yoq) {
  let result = oylik * 12;
  console.log(result);
}*/

//   5-masala

/*let oylik = +prompt(
  "Yillik daromadingizni bilish uchun oylik maoshingizni kiriting !"
);
let soliq = prompt("Soliq bilan xisoblansinmi, yoki soliqlarsiz ?");
let foyiz = +prompt("Soliq necha foyiz ?");

let ha = "Soliq bilan";
let yoq = "Soliqlarsiz";

if (soliq == ha) {
  let result = (oylik - (oylik / 100) * foyiz) * 12;
  let daromat = result - (result / 100) * 90;
  console.log(daromat);
} else if (soliq == yoq) {
  let result = oylik * 12;
  let daromat = result - (result / 100) * 90;
  console.log(daromat);
}*/

//   6-masala

/*let kurs = prompt("Qaysi kursni bilmoqchisiz ?");
let dollar = "Dollar";
let som = "So'm";
let summa = +prompt("Summani kiriting !");

if (kurs == dollar) {
  let som = 12000 * summa;
  alert(som + " UZS");
} else if (kurs == som) {
  let dollar = (100 / 1200000) * summa;
  alert(dollar + " USD");
}*/

//    7-masala

const form = document.querySelector(".form");
const Valyuta = document.querySelector("#valyuta");
const input = document.querySelector("input");
const natija = document.querySelector(".natija");
const ogirish = document.querySelector("#ogirish");
const malumot1 = document.querySelector(".malumot1");
const malumot2 = document.querySelector(".malumot2");
const h1 = document.querySelector("h1");
const yangi = document.querySelector(".yangi");

let kurslar = Valyuta.value;

Valyuta.addEventListener("change", () => {
  if (kurslar) {
    malumot1.textContent = "Summani kiriting";
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let kurslar = Valyuta.value;
  if (kurslar == "Dollar") {
    let som = 11400 * input.value;
    natija.textContent += som + " UZS";
    malumot2.textContent = "Natijani ko'ring";
  } else if (kurslar == "So'm") {
    let dollar = Math.round((1 / 11400) * input.value);
    natija.textContent += dollar + " USD";
    malumot2.textContent = "Natijani ko'ring";
  } else {
    h1.textContent = "Xatolik";
  }
});
yangi.addEventListener("click", () => {
  history.go(0);
});
