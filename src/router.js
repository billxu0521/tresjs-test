import { createWebHistory, createRouter } from "vue-router";

import MeshViews from "./views/MeshViews.vue";
import ModelViews from "./views/ModelViews.vue";
import ModelChangeTexturesViews from "./views/TexturedBall.vue";
import GaspView from "./views/GaspView.vue";
import ModelChangeMeshViews from "./views/ModelChangeMeshViews.vue";

const routes = [
  { path: "/", component: MeshViews },
  { path: "/model", component: ModelViews },
  { path: "/textured-ball", component: ModelChangeTexturesViews },
  { path: "/gasp", component: GaspView },
  { path: "/model-change-mesh", component: ModelChangeMeshViews },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
