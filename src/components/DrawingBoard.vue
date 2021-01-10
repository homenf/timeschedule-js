<template>
  <div>
    <h2> Functionality 1: Canvas </h2>
    <canvas id="output"></canvas>
    <button @click="blur"> Blur </button>
    <button @click="draw"> Draw </button>
  </div>
</template>

<script>
import {performBlur, drawSquare} from "../stackBlur"
export default {
  name: 'DrawingBoard',
  methods: {
    blur() {
      performBlur()
    },
    draw () {
      drawSquare()
    }
  }
}
</script>

<style scoped>
canvas {
  border: 1px black solid;
}
</style>
