import {canvasRGBA} from "stackblur-canvas";

export const performBlur = () => {
  console.log("::stackBlur::performBlur");
  const cv = document.querySelector('#output')
  const context = cv.getContext("2d");
  canvasRGBA(cv, 0,0, 500, 500, 2); 
}

export const drawSquare = () => {
  console.log("::stackBlur::drawSquare");
  const cv = document.querySelector('#output')
  const context = cv.getContext("2d");
  context.fillRect(100, 100, 100, 100);
}