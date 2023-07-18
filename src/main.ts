import { createApp } from "vue";
import { createPinia } from "pinia";
import router from "@/infrastructure/router";
import dayjs from "@/infrastructure/plugins/dayjs";
import { setupCalendar } from "v-calendar";

import App from "./App.vue";

import "./assets/styles/main.scss";
import clickOutSide from "@/helpers/directives";

const app = createApp(App);
app.directive("clickOutside", clickOutSide);
app.use(createPinia());
app.use(router);
app.use(dayjs);
app.use(setupCalendar, {});

app.mount("#app");
