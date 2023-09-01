import { createRouter, createWebHistory } from "vue-router";
import WeatherView from "@/views/WeatherView.vue";
import WeatherTomorrowView from "@/views/WeatherTomorrowView.vue";
import WeatherDayAfterTomorrowView from "@/views/WeatherDayAfterTomorrowView.vue";
import WeatherTodayView from "@/views/WeatherTodayView.vue";

const routes = [
  {
    path: "/",
    name: "weatherCurrently",
    component: WeatherView,
  },
  {
    path: "/today",
    name: "weatherToday",
    component: WeatherTodayView,
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
