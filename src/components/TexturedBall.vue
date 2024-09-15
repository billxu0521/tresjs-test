<script setup lang="ts">
import { ref } from 'vue';

import { useTexture, useRenderLoop } from '@tresjs/core';

const pbrTexture = await useTexture({
  map: 'https://raw.githubusercontent.com/Tresjs/assets/main/textures/black-rock/Rock035_2K_Displacement.jpg',
  displacementMap:
    'https://raw.githubusercontent.com/Tresjs/assets/main/textures/black-rock/Rock035_2K_Displacement.jpg',
  roughnessMap:
    'https://raw.githubusercontent.com/Tresjs/assets/main/textures/black-rock/Rock035_2K_Roughness.jpg',
  normalMap:
    'https://raw.githubusercontent.com/Tresjs/assets/main/textures/black-rock/Rock035_2K_NormalGL.jpg',
  ambientOcclusion:
    'https://raw.githubusercontent.com/Tresjs/assets/main/textures/black-rock/Rock035_2K_AmbientOcclusion.jpg',
});

const sphereRef = ref(null);

const { resume, onLoop } = useRenderLoop();


onLoop(({ delta }) => {
  // I will run at every frame ~ 60FPS (depending of your monitor)
  if (sphereRef.value) {
    sphereRef.value.rotation.y += delta;
  }
});
</script>

<template>
    <TresMesh 
    
    
  @pointer-move="(intersection, pointerEvent) => console.log('移动', intersection, pointerEvent)"
  @pointer-enter="(intersection, pointerEvent) => console.log('移入', intersection, pointerEvent)"
  @pointer-leave="(intersection, pointerEvent) => console.log('移出', pointerEvent)"
    ref="sphereRef" :scale="1" cast-shadow>
        <TresSphereGeometry :args="[1, 100, 100]" />
        <TresMeshStandardMaterial
            v-bind="pbrTexture"
            displacement-scale="0.2"
        />
    </TresMesh>
</template>
