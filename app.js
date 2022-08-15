const board = document.querySelector("#board");
let colors = [];

const SQ_NUM = 500;

for (let index = 0; index < SQ_NUM; index++) {
  const square = document.createElement("div");
  square.classList.add("sq");

  square.addEventListener("mouseover", () => {
    setColor(square);
  });

  square.addEventListener("mouseleave", () => {
    removeColor(square);
  });

  board?.append(square);
}

function setColor(element) {
  let color = randcolor();
  element.style.backgroundColor = "#" + color;
  element.style.boxShadow = `0 0 2px #${color}, 0 0 10px #${color}`;
}

function removeColor(element) {
  element.style.backgroundColor = "#1d1d1d";
  element.style.boxShadow = `0 0 2px #000`;
}

function randcolor() {
  let rflags = new Array(
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F"
  );
  let colors = "";
  for (let i = 0; i < 6; i++) {
    let numb = Math.floor(Math.random() * 15);
    colors += rflags[numb];
  }
  return colors;
}
