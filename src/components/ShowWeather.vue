<template>
  <div class="show-weather__wrapper">
    <div
      class="weather-data__wrapper"
      v-if="this.dataStore.currentCityWeatherData.timezone"
    >
      <div class="weather-data__container">
        <img
          class="current-weather__icon"
          :src="
            require('@/assets/icons/' +
              this.dataStore.currentCityWeatherData.currently.icon +
              '.svg')
          "
        />
        <div class="temp-rain__wrapper">
          <h2 class="temperature">
            {{
              this.dataStore.roundTemperature(
                this.dataStore.currentCityWeatherData.currently.temperature
              )
            }}°C
          </h2>
          <h2 class="rain">
            {{
              this.dataStore.convertPrecipationProbabilityToPercent(
                this.dataStore.currentCityWeatherData.currently
                  .precipProbability
              )
            }}
            Regenrisiko
          </h2>
          <h2 class="wind">
            Wind:
            {{
              this.dataStore.convertWindToKph(
                this.dataStore.currentCityWeatherData.currently.windSpeed
              )
            }}
            km/h
          </h2>
        </div>
      </div>
      <h2 v-if="this.dataStore.checkCounterForQuipRender" class="quip-text">
        {{ this.dataStore.weatherQuips.quipDataForCurrently.quip }}
      </h2>
      <h2 v-else class="quip-text">Sofa geht immer.</h2>

      <h3 class="date">{{ showDate }}</h3>
    </div>
  </div>
</template>
<script>
import { useDataStore } from "@/stores/useDataStore.js";
export default {
  name: "ShowWeatherVue",
  setup() {
    const dataStore = useDataStore();
    return {
      dataStore,
    };
  },
  computed: {
    showDate() {
      const currentDateObj = new Date();
      const currentDateArray = currentDateObj.toString().split(" ");
      const currentTime = currentDateArray[4].slice(0, 5);
      const currentDate =
        currentDateObj.getDate() +
        "." +
        (currentDateObj.getMonth() + 1) +
        "." +
        currentDateObj.getFullYear() +
        "  -  " +
        currentTime;
      return currentDate;
    },
  },
};
</script>
