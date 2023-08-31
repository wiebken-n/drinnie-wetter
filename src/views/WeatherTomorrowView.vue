<template>
  <div class="app-content__wrapper">
    <app-header-vue />
    <select-city-vue />
    <select-day-vue />
    <div class="weater-data__wrapper">
      <show-weather-tomorrow-vue />
    </div>
    <app-footer-vue class="footer" />
  </div>
</template>

<script>
import SelectCityVue from "@/components/SelectCity.vue";
import ShowWeatherTomorrowVue from "@/components/ShowWeatherTomorrow.vue";
import AppHeaderVue from "@/components/AppHeader.vue";
import SelectDayVue from "@/components/SelectDay.vue";
import AppFooterVue from "@/components/AppFooter.vue";

export default {
  name: "WeatherTomorrowView",
  components: {
    AppFooterVue,
    SelectCityVue,
    ShowWeatherTomorrowVue,
    AppHeaderVue,
    SelectDayVue,
  },
};
</script>

<style scoped>
.app-content__wrapper {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.weater-data__wrapper {
  width: 80%;
  max-width: 800px;
  padding-top: 12vh;
  display: flex;
  justify-content: center;
  flex-grow: 1;
  margin: auto;
}
</style>
