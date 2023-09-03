<template>
  <div class="app-content__wrapper">
    <app-header-vue />
    <select-city-vue />
    <select-day-vue />
    <div class="weater-data__wrapper">
      <show-weather-day-after-tomorrow-vue />
    </div>
    <app-footer-vue class="footer" />
  </div>
</template>

<script>
import SelectCityVue from "@/components/SelectCity.vue";
import ShowWeatherDayAfterTomorrowVue from "@/components/ShowWeatherDayAfterTomorrow.vue";
import AppHeaderVue from "@/components/AppHeader.vue";
import SelectDayVue from "@/components/SelectDay.vue";
import AppFooterVue from "@/components/AppFooter.vue";

export default {
  name: "WeatherDayAfterTomorrowView",
  components: {
    SelectCityVue,
    ShowWeatherDayAfterTomorrowVue,
    AppHeaderVue,
    AppFooterVue,
    SelectDayVue,
  },
};
</script>
