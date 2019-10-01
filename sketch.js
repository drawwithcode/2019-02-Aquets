function preload() {
  // put preload code here
}
var colorList = ["241, 196, 15", "231, 76, 60", "142, 68, 173", "52, 152, 219", "22, 160, 133", "243, 156, 18"];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  frameRate(60);

  var moduloX = 70;
  var moduloY = moduloX * sqrt(3);
  for (var i = 0; i < 3; i++) {

    for (var yA = -moduloY; yA < windowHeight + moduloY; yA = yA + moduloY) {
      for (var xA = -moduloX; xA < windowWidth + moduloX; xA = xA + moduloX) {
        var yBC = yA + Math.round(random(-3, 3)) * moduloY;
        var xB = xA - Math.abs(yA - yBC) / sqrt(3);
        var xC = xA + Math.abs(yA - yBC) / sqrt(3);

        var colorIndex = Math.round(random() * (colorList.length - 1));
        var colore = colorList[colorIndex];
        console.log(colore);
        c = color('rgba(' + colore + ', 0.5)');
        fill(c);
        strokeWeight(3);
        stroke(color('rgba(' + colore + ', 1)'));

        triangle(xA, yA, xB, yBC, xC, yBC);

      }
    }
  }
  // put setup code here
}

function draw() {
  // put drawing code here
}
