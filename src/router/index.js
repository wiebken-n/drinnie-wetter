import { createRouter, createWebHistory } from "vue-router";
import WeatherView from "@/views/WeatherView.vue";
import WeatherTomorrowView from "@/views/WeatherTomorrowView.vue";
import WeatherDayAfterTomorrowView from "@/views/WeatherDayAfterTomorrowView.vue";

const routes = [
  {
    path: "/",
    name: "weatherToday",
    component: WeatherView,
  },
  {
    path: "/tomorrow",
    name: "weatherTomorrow",
    component: WeatherTomorrowView,
  },
  {
    path: "/in-two-days",
    name: "weatherDayAfterTomorrow",
    component: WeatherDayAfterTomorrowView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
