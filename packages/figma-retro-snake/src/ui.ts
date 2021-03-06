import "./ui.css";

import {
  Direction,
  unitSize,
  initialSnakeLength,
  initialScore,
  initialDirection,
  initialGameFrameRate,
  initialHeadPosition,
  initialNextTailVelocity,
  maxGameFrameRate,
  gameFrameRateIncrement,
  gameField,
  gameColor,
  initialHeadToTailVelocity,
} from "./constants";

window.onload = () => {
  initialize();
};

document.onkeydown = key => {
  switch (key.keyCode) {
    case 37:
      currentDirection !== Direction.RIGHT ? (currentDirection = Direction.LEFT) : null;
      break;
    case 38:
      currentDirection !== Direction.DOWN ? (currentDirection = Direction.UP) : null;
      break;
    case 39:
      currentDirection !== Direction.LEFT ? (currentDirection = Direction.RIGHT) : null;
      break;
    case 40:
      currentDirection !== Direction.UP ? (currentDirection = Direction.DOWN) : null;
      break;
    default:
      break;
  }
};

let foodPosition: number[] = [0, 0];
let nextHeadPosition: number[] = initialHeadPosition;
let gameFrameRate: number = initialGameFrameRate;
let nextTailVelocity = initialNextTailVelocity;
let lastFrameUpdate: number = 0;
let headToTailVelocity: number[][] = [];
let currentDirection: Direction = initialDirection;
let multiplier: number = 1;
let score: number = 0;
let isFoodEaten: boolean = true;
let isDead: boolean = false;

const initialize = () => {
  // reset constants
  isFoodEaten = true;
  isDead = false;
  currentDirection = initialDirection;
  gameFrameRate = initialGameFrameRate;
  score = initialScore;
  // reset arrays
  nextHeadPosition = [...initialHeadPosition];
  headToTailVelocity = [...initialHeadToTailVelocity];
  nextTailVelocity = [...initialNextTailVelocity];
  // set up game canvas
  (document.getElementById("snake") as HTMLCanvasElement).width = gameField[0];
  (document.getElementById("snake") as HTMLCanvasElement).height = gameField[1];
  // set up snake cell velocities array
  for (let i: number = 0; i < initialSnakeLength; i++) {
    headToTailVelocity.push([0, 0]);
  }
  document.getElementById("score").innerHTML = `${Math.round(score)}`;
  document.getElementById("game-end-summary").style.display = "none";
  window.requestAnimationFrame(loop);
  window.focus();
};

document.getElementById("restart").onclick = () => {
  initialize();
};

const loop = () => {
  const interval = Date.now() - lastFrameUpdate;
  interval > 1000 / gameFrameRate ? ((lastFrameUpdate += interval), updateSnake(), updateMultiplier(interval)) : null;
  isFoodEaten ? spawnFood() : null;
  // prepare for rendering again
  !isDead ? window.requestAnimationFrame(loop) : displaySummary();
};

const getCanvas2dContext = (id: string) => {
  return (document.getElementById(id) as HTMLCanvasElement).getContext("2d");
};

const spawnFood = () => {
  foodPosition[0] = Math.round((Math.random() * (gameField[0] - unitSize[0])) / 10) * unitSize[0];
  foodPosition[1] = Math.round((Math.random() * (gameField[1] - unitSize[1])) / 10) * unitSize[1];
  isFoodEaten = false;
  multiplier = Math.round(Math.random() * 7) + 3;
};

const updateMultiplier = (interval: number) => {
  multiplier > 1 ? (multiplier -= interval / 1000) : null;
  document.getElementById("multiplier").innerHTML = `${Math.round(multiplier)}`;
};

const updateSnake = () => {
  // pop last tail velocity
  headToTailVelocity.pop();
  // update velocity array
  switch (currentDirection) {
    case Direction.UP:
      headToTailVelocity.unshift([0, -1]);
      break;
    case Direction.DOWN:
      headToTailVelocity.unshift([0, 1]);
      break;
    case Direction.LEFT:
      headToTailVelocity.unshift([-1, 0]);
      break;
    case Direction.RIGHT:
      headToTailVelocity.unshift([1, 0]);
      break;
    default:
      break;
  }
  // get canvas context
  const context = getCanvas2dContext("snake");
  // get next head position
  nextHeadPosition[0] > gameField[0] - unitSize[0]
    ? (nextHeadPosition[0] = 0)
    : nextHeadPosition[0] < 0
    ? (nextHeadPosition[0] = gameField[0] - unitSize[0])
    : (nextHeadPosition[0] = nextHeadPosition[0] + unitSize[0] * headToTailVelocity[0][0]);
  nextHeadPosition[1] > gameField[1] - unitSize[1]
    ? (nextHeadPosition[1] = 0)
    : nextHeadPosition[1] < 0
    ? (nextHeadPosition[1] = gameField[1] - unitSize[1])
    : (nextHeadPosition[1] = nextHeadPosition[1] + unitSize[1] * headToTailVelocity[0][1]);
  // update head position
  let unitPosition: number[] = [...nextHeadPosition];
  // clear the canvas
  context.fillStyle = "#333333";
  context.fillRect(0, 0, gameField[0], gameField[1]);
  context.strokeStyle = gameColor[Math.round(Math.random() * (gameColor.length - 1))];
  context.lineWidth = 3;
  context.strokeRect(0, 0, gameField[0], gameField[1]);
  // draw food
  context.fillStyle = gameColor[Math.round(Math.random() * (gameColor.length - 1))];
  context.fillRect(foodPosition[0], foodPosition[1], unitSize[0], unitSize[1]);
  if (nextHeadPosition[0] === foodPosition[0] && nextHeadPosition[1] === foodPosition[1]) {
    isFoodEaten = true;
    score += multiplier;
    document.getElementById("score").innerHTML = `${Math.round(score)}`;
    gameFrameRate < maxGameFrameRate ? (gameFrameRate += gameFrameRateIncrement) : null;
    headToTailVelocity.push(nextTailVelocity);
  }
  // draw snake
  headToTailVelocity.forEach(unitVelocity => {
    context.fillStyle = gameColor[Math.round(Math.random() * (gameColor.length - 1))];
    context.fillRect(unitPosition[0], unitPosition[1], unitSize[0], unitSize[1]);
    unitPosition[0] - unitSize[0] * unitVelocity[0] > gameField[0] - unitSize[0]
      ? (unitPosition[0] = 0)
      : unitPosition[0] - unitSize[0] * unitVelocity[0] < 0
      ? (unitPosition[0] = gameField[0] - unitSize[0])
      : (unitPosition[0] -= unitSize[0] * unitVelocity[0]);
    unitPosition[1] - unitSize[1] * unitVelocity[1] > gameField[1] - unitSize[1]
      ? (unitPosition[1] = 0)
      : unitPosition[1] - unitSize[1] * unitVelocity[1] < 0
      ? (unitPosition[1] = gameField[1] - unitSize[1])
      : (unitPosition[1] -= unitSize[1] * unitVelocity[1]);
    if (unitPosition[0] === nextHeadPosition[0] && unitPosition[1] === nextHeadPosition[1]) {
      isDead = true;
    }
    nextTailVelocity = [...unitVelocity];
  });
};

const displaySummary = () => {
  document.getElementById("final-score").innerHTML = `${Math.round(score)}`;
  document.getElementById("game-end-summary").style.display = "block";
  document.getElementById("restart").focus();
};
