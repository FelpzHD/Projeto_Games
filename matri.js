var matrix =
"ABCDEFGHIJKLMNOPQRSTUVWXYZ*&%$#@!☺¶€ÆΦαßΓπΣσµτΦΘΩδ∞φε∩";
matrix = matrix.split("");
var columns, font_size, drops, matrixInterval;

function setupMatrix() {
var c = document.createElement("canvas");
c.id = "c";
document.body.appendChild(c);

var ctx = c.getContext("2d");
c.height = window.innerHeight;
c.width = window.innerWidth;

font_size = 16;
columns = Math.floor(c.width / font_size);

drops = [];
for (var x = 0; x < columns; x++)
  drops[x] = Math.floor(Math.random() * c.height);

matrixInterval = setInterval(drawMatrix, 50);
}

function drawMatrix() {
var c = document.getElementById("c");
var ctx = c.getContext("2d");

ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
ctx.fillRect(0, 0, c.width, c.height);

ctx.fillStyle = "#0f0";
ctx.font = font_size + "px monospace";

for (var i = 0; i < drops.length; i++) {
  var text = matrix[Math.floor(Math.random() * matrix.length)];
  ctx.fillText(text, i * font_size, drops[i] * font_size);

  drops[i]++;
  if (drops[i] * font_size > c.height && Math.random() > 0.975) {
    drops[i] = 0;
  }
}
}

setupMatrix();