let main = document.querySelector("main");
let hasil = document.querySelector(".hasil p");
let gunting = "foto/gunting.jpg";
let batu = "foto/batu-kuarsit_169.jpeg";
let kertas = "foto/kertas.jpeg";
//bot
let botImg = document.querySelector(".bot img");


//popup2

let input = document.getElementById("name");
let btn2 = document.querySelector(".user");
const secondPop = document.querySelector(".secondPop");
let changeText = document.getElementById("change");

document.body.addEventListener("mousemove", function (event) {
  const xBagian = Math.round((event.clientX / window.innerWidth) * 255);
  const yBagian = Math.round((event.clientY / window.innerHeight) * 255);
  document.body.style.background = `rgb(${xBagian}, ${yBagian}, 100)`;
});

//Math random
function pilihanBot() {
  let pilihanBot = Math.random() * 10;

  if (pilihanBot > 0 && pilihanBot <= 4) {
    return gunting;
  } else if (pilihanBot > 4 && pilihanBot <= 7) {
    return kertas;
  } else if (pilihanBot > 7 && pilihanBot <= 10) {
    return batu;
  }
}
//main
let play = document.querySelectorAll(".kita img");

play[0].addEventListener("click", function () {
  let bot = pilihanBot();

  botImg.src = bot;
  if (bot === gunting) {
    hasil.innerHTML = "MENANGGGGG!!";
  } else if (bot === kertas) {
    hasil.innerHTML = "kalah :(";
  } else if (bot === batu) {
    hasil.innerHTML = "Seri Jir!!!! ";
  }
});
play[1].addEventListener("click", function () {
    let bot = pilihanBot();

    botImg.src = bot;
    if (bot === gunting) {
      hasil.innerHTML = "Seri Jir!!";
    } else if (bot === kertas) {
      hasil.innerHTML = "MENANG COK!";
    } else if (bot === batu) {
      hasil.innerHTML = "Kalah Nyet";
    }
});
play[2].addEventListener("click", function () {
    let bot = pilihanBot();

    botImg.src = bot;
    if (bot === gunting) {
      hasil.innerHTML = "Cacat!";
    } else if (bot === kertas) {
      hasil.innerHTML = "Seri Bro!!";
    } else if (bot === batu) {
      hasil.innerHTML = "Anjay Menang";
    }
});
let popUp = document.querySelector(".popUp");
let btn = document.getElementById("ok");
btn.addEventListener("click", function(){
  popUp.style.display = "none";
  secondPop.style.display = "flex";


})

btn2.addEventListener("click", function(){

  let textValue = input.value;

  if (textValue) {

    changeText.innerHTML = textValue;
    secondPop.style.display = "none";
    main.classList.toggle("opacityBody");
    
  } else {
    alert("Tolong masukkan nama")
  }
})

