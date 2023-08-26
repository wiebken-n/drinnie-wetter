<template>
  <app-header-vue />
  <select-city-vue />
  <div class="wrapper">
    <show-weather-vue />
  </div>
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

<style scoped>
.wrapper {
  max-width: 800px;
  margin: auto;
  position: relative;
}
</style>
