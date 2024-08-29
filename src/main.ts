import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import { useAppStore } from "./stores/app";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.mount("#app");

const appStore = useAppStore();

appStore.theme = localStorage.getItem("theme") ?? "dark";
document.body.setAttribute("data-theme", appStore.theme);
