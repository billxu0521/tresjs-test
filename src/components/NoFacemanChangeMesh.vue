<script setup lang="ts">
import { ref, onMounted, shallowRef } from 'vue'
import { GLTFLoader, GLTF } from 'three/examples/jsm/loaders/GLTFLoader'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'
import * as THREE from 'three'

const modelRef = shallowRef<THREE.Object3D | null>(null);
const pbrTexture = shallowRef<{
  map: THREE.Texture;
  displacementMap: THREE.Texture;
  roughnessMap: THREE.Texture;
  normalMap: THREE.Texture;
  aoMap: THREE.Texture;
} | null>(null);
const gltf = shallowRef<GLTF | null>(null);

onMounted(() => {
  try {
    // 使用 TextureLoader 手動加載 PBR 紋理
    const textureLoader = new THREE.TextureLoader();
    pbrTexture.value = {
      map: textureLoader.load('https://raw.githubusercontent.com/Tresjs/assets/main/textures/black-rock/Rock035_2K_Displacement.jpg'),
      displacementMap: textureLoader.load('https://raw.githubusercontent.com/Tresjs/assets/main/textures/black-rock/Rock035_2K_Displacement.jpg'),
      roughnessMap: textureLoader.load('https://raw.githubusercontent.com/Tresjs/assets/main/textures/black-rock/Rock035_2K_Roughness.jpg'),
      normalMap: textureLoader.load('https://raw.githubusercontent.com/Tresjs/assets/main/textures/black-rock/Rock035_2K_NormalGL.jpg'),
      aoMap: textureLoader.load('https://raw.githubusercontent.com/Tresjs/assets/main/textures/black-rock/Rock035_2K_AmbientOcclusion.jpg'),
    };

    // 初始化 DRACOLoader
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/');

    // 使用 GLTFLoader 並配置 DRACOLoader
    const gltfLoader = new GLTFLoader();
    gltfLoader.setDRACOLoader(dracoLoader);

    // 加載 GLTF 模型
    gltfLoader.load('deco-2.glb', (gltfModel) => {
      gltf.value = gltfModel;
      modelRef.value = gltfModel.scene;

      // 遍歷模型的所有 Mesh 並替換材質
      gltfModel.scene.traverse((node) => {
        console.log(node)
        if( node.name == "BASE"){
          if (node instanceof THREE.Mesh && pbrTexture.value) {
          node.material = new THREE.MeshStandardMaterial({
            //map: pbrTexture.value.map,
            //displacementMap: pbrTexture.value.displacementMap,
            roughnessMap: pbrTexture.value.roughnessMap,
            normalMap: pbrTexture.value.normalMap,
            aoMap: pbrTexture.value.aoMap,
            displacementScale: 0.2, // 根據需求調整
          });
        }
        }
        
      });
    });
  } catch (error) {
    console.error("An error occurred while loading the model or texture:", error);
  }
});
</script>

<template>
  <TresMesh v-if="modelRef">
    <primitive :object="modelRef" />
  </TresMesh>
</template>