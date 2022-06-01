const hexValue = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn-hero");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  let count = 0;
  let colorHex = "#";
  while (count < 6) {
    colorHex += hexValue[randomNum()];
    count++;
  }
  color.textContent = colorHex;
  document.body.style.backgroundColor = colorHex;
  document.getElementById("title").style.color = colorHex;
});

function randomNum() {
  return Math.floor(Math.random() * hexValue.length);
}
