// import { createApp } from "vue";
// import { createPinia } from "pinia";

// // import router
// import router from "./router";

// import App from "./App.vue";

// const app = createApp(App);
// app.use(router);

// app.use(createPinia());

// app.mount("#app");
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  // define your routes here
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;