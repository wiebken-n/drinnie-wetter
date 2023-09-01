<template>
  <div class="app-content__wrapper">
    <app-header-vue />
    <select-city-vue />
    <select-day-vue />
    <div class="weater-data__wrapper">
      <show-weather-today-vue />
    </div>
    <app-footer-vue class="footer" />
  </div>
</template>

<script>
import SelectCityVue from "@/components/SelectCity.vue";
import ShowWeatherTodayVue from "@/components/ShowWeatherToday.vue";
import AppHeaderVue from "@/components/AppHeader.vue";
import SelectDayVue from "@/components/SelectDay.vue";
import AppFooterVue from "@/components/AppFooter.vue";

export default {
  name: "WeatherTomorrowView",
  components: {
    AppFooterVue,
    SelectCityVue,
    ShowWeatherTodayVue,
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
  padding-top: 9vh;
  display: flex;
  justify-content: center;
  flex-grow: 1;
  margin: auto;
}
</style>
