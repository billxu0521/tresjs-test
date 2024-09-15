import { createApp } from "vue";
import "./style.css";
import router from "./router";

import App from "./App.vue";
import Tres from "@tresjs/core";

createApp(App).use(router).use(Tres).mount("#app");
