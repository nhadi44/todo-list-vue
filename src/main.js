import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
// Default theme

createApp(App).use(router).mount("#app");
