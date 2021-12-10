<script setup>
import { watch, onMounted } from 'vue'
import Wrapper from '../components/Wrapper.vue'
import { theater, L, R, T } from '../controllers/IO.js'

onMounted(() => {
  theater.addActor('ITI', { accuracy: 0.8, speed: 0.9 })
  theater.addScene('ITI:test')
})
</script>

<template>
  <div class="min-h-screen bg-gray-700 flex flex-col items-center justify-center text-white font-mono">
    <svg width="310" height="110" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <mask id="I1">
        <rect x="10" y="10" width="90" height="90" fill="white"/>
        <rect x="50" y="20" width="10" height="70" fill="black"/>
      </mask>
      <mask id="T">
        <rect x="110" y="10" width="90" height="90" fill="white"/>
        <rect x="150" y="20" width="10" height="70" fill="black"/>
        <rect x="120" y="20" width="70" height="10" fill="black"/>
      </mask>
      <mask id="I2">
        <rect x="210" y="10" width="90" height="90" fill="white"/>
        <rect x="250" y="20" width="10" height="70" fill="black"/>
      </mask>
      <g fill="white">
        <rect @click="L" x="10" y="10" width="90" height="90" mask="url(#I1)"/>
        <rect @click="T" x="110" y="10" width="90" height="90" mask="url(#T)"/>
        <rect @click="R" x="210" y="10" width="90" height="90" mask="url(#I2)"/>
      </g>
    </svg>
    <p id="ITI" class="p-10"></p>
  </div>
</template>