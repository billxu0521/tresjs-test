<script setup lang="ts">
import { ref } from 'vue'
import { useAnimations } from '@tresjs/cientos'
import { useLoader } from '@tresjs/core'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader'


const { scene: model, animations } = await useLoader(GLTFLoader, 'nofaceman.glb')

const { actions } = useAnimations(animations, model)

const currentAction = ref(actions.Greeting)



</script>

<template>
  <primitive :object="model" />
</template>