<script setup>
import { TresCanvas } from '@tresjs/core'
import { OrbitControls } from '@tresjs/cientos';
import MeshScene from '../components/MeshScene.vue';

</script>

<template>
  <TresCanvas window-size>
    <TresPerspectiveCamera
    
    :position="[2, 0, 0]"
    :look-at="[0, 0, 0]"
  />
    <OrbitControls />
    <MeshScene />
  </TresCanvas>
</template>