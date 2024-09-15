<script setup lang="ts">
import TexturedBall from '../components/TexturedBall.vue';
import { TresCanvas } from '@tresjs/core';
import { OrbitControls } from '@tresjs/cientos';


</script>

<template>
  <TresCanvas
    clear-color="#82DBC5"
    shadows
    alpha
    window-size
    power-preference="high-performance"

  >
    <OrbitControls />
    <TresPerspectiveCamera
      :position="[1, 2, 5]"
      :fov="45"
      :aspect="1"
      :near="0.1"
      :far="1000"
    />
      <Suspense>
        <TexturedBall :position="[0, 2, 4]"/>
      </Suspense>
      <Suspense>
        <TexturedBall :position="[1, 0, 1]"/>
      </Suspense>
      <TresDirectionalLight :position="[0, 2, 4]" :intensity="2" cast-shadow />
  </TresCanvas>
</template>
