<template>
  <select-city-vue />
  <show-weather-vue />
</template>

<script>
import SelectCityVue from "@/components/SelectCity.vue";
import ShowWeatherVue from "@/components/ShowWeather.vue";

export default {
  name: "HomeView",
  components: {
    SelectCityVue,
    ShowWeatherVue,
  },
};
</script>
