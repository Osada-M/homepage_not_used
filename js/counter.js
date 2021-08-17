"use stript"

fetch("count/countBuffer.txt")
  .then(res=>res.text())
  .then(text=>document.getElementById("counter").textContent=text);
