import { createApp } from "vue";
import primeVue from "primevue/config";
import nora from "@primevue/themes/aura";
import { definePreset } from "@primevue/themes";

import "@/assets/css/style.scss";
import "@/assets/css/tailwindClasses.css";

import App from "@/App.vue";

import { createWebHistory, createRouter } from "vue-router";

import IndexView from "@/views/indexView.vue";
import LoginView from "@/views/loginView.vue";
import RegisterView from "@/views/registerView.vue";

const routes = [
  { path: "/", component: IndexView },
  { path: "/login", name: "login", component: LoginView },
  { path: "/register", component: RegisterView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const MyPreset = definePreset(nora, {
  semantic: {
    primary: {
      50: "{slate.50}",
      100: "{slate.100}",
      200: "{slate.200}",
      300: "{slate.300}",
      400: "{slate.400}",
      500: "{slate.500}",
      600: "{slate.600}",
      700: "{slate.700}",
      800: "{slate.800}",
      900: "{slate.900}",
      950: "{slate.950}",
    },
    colorScheme: {
      light: {
        surface: {
          0: "#ffffff",
          50: "{zinc.50}",
          100: "{zinc.100}",
          200: "{zinc.200}",
          300: "{zinc.300}",
          400: "{zinc.400}",
          500: "{zinc.500}",
          600: "{zinc.600}",
          700: "{zinc.700}",
          800: "{zinc.800}",
          900: "{zinc.900}",
          950: "{zinc.950}",
        },
      },
      dark: {
        surface: {
          0: "#ffffff",
          50: "{neutral.50}",
          100: "{neutral.100}",
          200: "{neutral.200}",
          300: "{neutral.300}",
          400: "{neutral.400}",
          500: "{neutral.500}",
          600: "{neutral.600}",
          700: "{neutral.700}",
          800: "{neutral.800}",
          900: "{neutral.900}",
          950: "{neutral.950}",
        },
      },
    },
  },
});

const app = createApp(App);
app.use(router);
app.use(primeVue, {
  theme: {
    preset: MyPreset,
    options: {
      prefix: "p",
      darkModeSelector: ".my-app-dark",
      cssLayer: false,
    },
  },
});

app.mount("#app");
