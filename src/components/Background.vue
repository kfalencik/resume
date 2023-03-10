<script setup lang="ts">
import { ref, onMounted } from "vue";

interface color {
  red: number;
  green: number;
  blue: number;
}

interface star {
  x: number;
  y: number;
  angle: number;
  startAngle: number;
  speed: number;
  color: color;
}

const starArray: Array<star> = [];
const starColors: Array<color> = [];

let canvas: Ref<HTMLCanvasElement> | Ref<null> = ref(null);
let context: CanvasRenderingContext2D | null = null;
let calcWidth: number | null = null;
let speedAmplifier = 5;

const createStarField = function () {
  if (!canvas || !canvas.value) return;
  //create variables and set the canvas stage.
  context = canvas.value.getContext("2d");

  //calculate the distances of the canvas and the width we use to determine number of stars.
  calcWidth = canvas.value.clientWidth / 10;
  canvas.value.width = canvas.value.clientWidth;
  canvas.value.height = canvas.value.clientHeight;

  //create the stars
  initiateStars();

  //start the main loop to keep the canvas updates.
  setInterval(function () {
    update();
    render();
  }, 1000 / 60);
};

const update = function () {
  if (speedAmplifier > 1.1) {
    speedAmplifier = speedAmplifier - 0.1;
  }

  starArray.forEach((star) => {
    if (
      //if the stars are close to the edge, change their direction.
      star.y < -1 ||
      star.y > canvas.value!.height + 1 ||
      star.x < -1 ||
      star.x > canvas.value!.width + 1
    ) {
      let remainder = star.angle % 90;
      star.angle = star.angle + 90 + remainder;
      star.startAngle = star.angle;
    } else {
      star.angle = star.startAngle;
    }

    calculateStarMovement(star);
  });
};

const render = function () {
  let distance = 150;

  //clear the canvas.
  context!.clearRect(0, 0, canvas.value!.width, canvas.value!.height);

  //draw the stars individual points
  starArray.forEach((star) => {
    drawSingleStar(star);
  });

  //double for loop to check each star against all the others.
  for (let k = 0; k < starArray.length; k++) {
    for (let u = 0; u < starArray.length; u++) {
      if (
        //check the distance between the two points
        starArray[k].x >= starArray[u].x - distance &&
        starArray[k].x <= starArray[u].x + distance &&
        starArray[k].y >= starArray[u].y - distance &&
        starArray[k].y <= starArray[u].y + distance &&
        // and make sure it's not the same star
        u != k
      ) {
        //if they are within the range set, calculate their distance and draw line with color and opacity matching distance and color difference between them.
        let a = starArray[k].x - starArray[u].x;
        let b = starArray[k].y - starArray[u].y;

        //calculate the opacity based on distance.
        let opacity = 1 - (1 / distance) * Math.sqrt(a * a + b * b);
        let red = Math.round((starArray[k].color.red + starArray[u].color.red) / 2);
        let green = Math.round((starArray[k].color.green + starArray[u].color.green) / 2);
        let blue = Math.round((starArray[k].color.blue + starArray[u].color.blue) / 2);

        // set color of the line based on the middle value of red, green and blue from the two points.
        context!.strokeStyle = "rgba(" + red + "," + green + "," + blue + "," + opacity + ")";
        context!.beginPath();
        context!.lineWidth = 3;
        context!.moveTo(starArray[k].x, starArray[k].y);
        context!.lineTo(starArray[u].x, starArray[u].y);
        context!.stroke();
      }
    }
  }
};

const calculateStarMovement = function (target: star) {
  target.x -= target.speed * Math.sin(target.angle * (Math.PI / 180));
  target.y += target.speed * Math.cos(target.angle * (Math.PI / 180));
};

const drawSingleStar = function (star: star) {
  context!.fillStyle = "rgba(" + star.color.red + "," + star.color.green + "," + star.color.blue + "," + 0.5 + ")";
  context!.beginPath();
  context!.arc(star.x, star.y, 5, 0, 2 * Math.PI);
  context!.closePath();
  context!.fill();
};

const initiateStars = function () {
  let starColor = {
    red: 255,
    green: 255,
    blue: 255,
  };
  starColors.push(starColor);

  //generate number of star objects with variables based on the calcWidth variable.
  for (let y = 0; y < calcWidth!; y++) {
    let starAngle = Math.floor(Math.random() * 360) + 0;
    let star = {
      x: Math.floor(Math.random() * canvas.value!.width) + 0,
      y: Math.floor(Math.random() * canvas.value!.height) + 0,
      color: starColors[Math.floor(Math.random() * starColors.length) + 0],
      angle: starAngle,
      startAngle: starAngle,
      speed: (Math.floor(Math.random() * 12) + 6) / 15,
    };

    starArray.push(star);
  }
};
onMounted(() => {
  createStarField();
});
</script>

<template>
  <div class="background">
    <canvas ref="canvas" class="background__mainstage"></canvas>

    <svg id="weirdFilter">
      <filter id="svgFilter">
        <feTurbulence id="turbulence" type="turbulence" baseFrequency="0.009" numOctaves="5" />
        <feDisplacementMap id="displacement" in="SourceGraphic" scale="200" />
      </filter>
    </svg>
  </div>
</template>

<style lang="scss" scoped>
.background {
  overflow: hidden;
  position: fixed;
  background: #000;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  box-shadow: inset 0 0 50px $black;

  @supports (-ms-ime-align: auto) {
    .selector {
      filter: blur(10px);
    }
  }

  &::after {
    box-shadow: inset 0 0 70px $black;
    content: "";
    display: block;
    position: absolute;
    z-index: 9;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;

    @media (max-width: $breakpoint-md) {
      box-shadow: inset 0 0 150px $black;
    }
  }

  &__mainstage {
    width: 100%;
    height: 100%;
    overflow: hidden;
    margin: 0;
    padding: 0px;
    background-color: $black;
    filter: blur(5px) url(#svgFilter);
  }
}

#svgFilter {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
}
</style>
