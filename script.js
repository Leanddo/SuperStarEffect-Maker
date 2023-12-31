let percentage = document.getElementById("percentage");
let range = document.getElementById("slider");

root = document.documentElement;

function velocity() {
  slider = range.value;

  percentage.innerText = slider * 4;

  root.style.setProperty("--change", 26 - slider + "s");
}

let inputs = [];

for (let i = 1; i <= 10; i++) {
  inputs.push(document.getElementById("inp" + i).value);
}


function updatecolor(color,variable) {
  root.style.setProperty(color,variable);
  console.log(inputs);
}

