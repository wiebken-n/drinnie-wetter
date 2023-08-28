<template>
  <app-header-vue />
  <select-city-vue />
  <select-day-vue />
  <div class="wrapper">
    <show-weather-tomorrow-vue />
  </div>
</template>

<script>
import SelectCityVue from "@/components/SelectCity.vue";
import ShowWeatherTomorrowVue from "@/components/ShowWeatherTomorrow.vue";
import AppHeaderVue from "@/components/AppHeader.vue";
import SelectDayVue from "@/components/SelectDay.vue";

export default {
  name: "WeatherTomorrowView",
  components: {
    SelectCityVue,
    ShowWeatherTomorrowVue,
    AppHeaderVue,
    SelectDayVue,
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
