<script setup>
import { TresCanvas } from '@tresjs/core';
import { OrbitControls } from '@tresjs/cientos';
import { BasicShadowMap, SRGBColorSpace, NoToneMapping } from 'three'

import NoFacemanChangeMesh from '../components/NoFacemanChangeMesh.vue';

const gl = {
  clearColor: '#F78B3D',
  shadows: true,
  alpha: false,
  shadowMapType: BasicShadowMap,
  outputColorSpace: SRGBColorSpace,
  toneMapping: NoToneMapping,
  windowSize: true,
}
</script>
<template>
  <TresCanvas v-bind="gl" >
    <TresPerspectiveCamera
    
    :position="[2, 0, 0]"
    :look-at="[0, 0, 0]"
  />
    <OrbitControls />
    <Suspense>
      <NoFacemanChangeMesh />
    </Suspense>
    <TresDirectionalLight
      color="#F78B3D"
      :position="[3, 3, 3]"
      :intensity="1"
    />
    <TresAmbientLight :intensity="2" />
  </TresCanvas>
</template>