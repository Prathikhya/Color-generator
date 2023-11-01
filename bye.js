let bt = document.querySelector("button");

bt.addEventListener("click", function () {
  let h3 = document.querySelector("h3");
  let read = generate();
  h3.innerText = read;
  let g = document.querySelector("div");
  g.innerText = read;
  g.style.backgroundColor = read;

  console.log("colors clicks");
});

function generate() {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);

  let color = `rgb(${red}, ${green}, ${blue})`; // Removed space here
  return color;
}
