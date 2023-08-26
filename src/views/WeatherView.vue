<template>
  <app-header-vue />
  <select-city-vue />
  <show-weather-vue />
</template>

<script>
import SelectCityVue from "@/components/SelectCity.vue";
import ShowWeatherVue from "@/components/ShowWeather.vue";
import AppHeaderVue from "@/components/AppHeader.vue";

export default {
  name: "HomeView",
  components: {
    SelectCityVue,
    ShowWeatherVue,
    AppHeaderVue,
  },
};
</script>
