var r = document.querySelector(":root");

function setAccentColor() {
  const accents = [
    "#eb6f92",
    "#f6c177",
    "#ebbcba",
    "#31748f",
    "#9ccfd8",
    "#c4a7e7",
  ];

  const rIndex = Math.floor(Math.random() * 6);

  r.style.setProperty("--accent", accents[rIndex]);
}

setAccentColor();
