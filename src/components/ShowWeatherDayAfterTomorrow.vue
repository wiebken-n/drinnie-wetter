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
              this.dataStore.currentCityWeatherData.daily.data[2].icon +
              '.svg')
          "
        />
        <div class="temp-rain__wrapper">
          <h2 class="temperature">
            <span class="temp-max-text"
              >{{
                this.dataStore.roundTemperature(
                  this.dataStore.currentCityWeatherData.daily.data[2]
                    .temperatureHigh
                )
              }}°C
            </span>
            <small class="temp-min-text">
              {{
                this.dataStore.roundTemperature(
                  this.dataStore.currentCityWeatherData.daily.data[2]
                    .temperatureLow
                )
              }}°C</small
            >
          </h2>
          <h2 class="rain">
            {{
              this.dataStore.convertPrecipationProbabilityToPercent(
                this.dataStore.currentCityWeatherData.daily.data[2]
                  .precipProbability
              )
            }}
            Regenrisiko
          </h2>
          <h2 class="wind">
            Wind:
            {{
              this.dataStore.convertWindToKph(
                this.dataStore.currentCityWeatherData.daily.data[2].windSpeed
              )
            }}
            km/h
          </h2>
        </div>
      </div>
      <h2 v-if="this.dataStore.checkCounterForQuipRender" class="quip-text">
        {{ this.dataStore.weatherQuips[2].quip }}
      </h2>
      <h2 v-else class="quip-text">Sofa geht immer.</h2>
      <h3 class="date">{{ showDate }}</h3>
    </div>
  </div>
</template>
<script>
import { useDataStore } from "@/stores/useDataStore.js";
export default {
  name: "ShowWeatherDayAfterTomorrowVue",
  setup() {
    const dataStore = useDataStore();
    return {
      dataStore,
    };
  },
  computed: {
    showDate() {
      const currentDateObj = new Date();
      const dayAfterTomorrow = new Date(currentDateObj);
      dayAfterTomorrow.setDate(dayAfterTomorrow.getDate() + 2);
      const currentDate =
        dayAfterTomorrow.getDate() +
        "." +
        (dayAfterTomorrow.getMonth() + 1) +
        "." +
        dayAfterTomorrow.getFullYear();
      return currentDate;
    },
  },
};
</script>
