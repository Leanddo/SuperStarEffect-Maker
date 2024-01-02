let percentage = document.getElementById("percentage");
let range = document.getElementById("slider");

root = document.documentElement;

function velocity() {
  slider = range.value;

  percentage.innerText = slider * 4;

  root.style.setProperty("--change", 26 - slider + "s");
}

function updatecolor(color, variable) {
  root.style.setProperty(color, variable);
}

var navbarOpen = false;

function toggleNav() {
  let pipe = document.getElementById("pipe");

  if (navbarOpen) {
    pipe.style.top = "-610px";
  } else {
    pipe.style.top = "0px";
  }
  navbarOpen = !navbarOpen;
}

let starbutton = document.getElementById("secret");
var i = 0;

starbutton.onclick = function () {
  i++;

  if (i%3==0) {
    document.getElementById("musicblock").style.display = "block";
    document.getElementById("player").play();
  } else if (i%3==1) {
    document.getElementById("musicblock").style.display = "none";
    document.getElementById("player").pause();
  }
};

let audio = false;

function offaudio() {
  let media = document.getElementById("player");
  let musicblock = document.getElementById("musicblockimg");
  
  if (audio) {
    media.pause();
    musicblock.src = "img/musicblockoff.svg";
  } else {
    media.play();
    musicblock.src = "img/musicblock.svg";
  }
  audio = !audio;
}

var Open = false;

function infobar() {
  let infobox = document.getElementById("infobox");

  if (Open) {
    infobox.style.right = "-500px";
  } else {
    infobox.style.right = "10px";
  }
  Open = !Open;
}

