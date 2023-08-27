<template>
  <div class="show-weather__wrapper">
    <div v-if="this.dataStore.currentCityWeatherData.timezone">
      <div class="weather-data__container">
        <!-- <h2>{{ this.dataStore.currentCityGeoData.name }}</h2> -->
        <img
          class="current-weather__icon"
          :src="
            require('@/assets/icons/' +
              this.dataStore.currentCityWeatherData.currently.icon +
              '.svg')
          "
        />
        <div class="temp-rain__wrapper">
          <h2 class="temperature">{{ roundTemperature }}°C</h2>
          <h2 class="rain">
            {{ convertPrecipationProbabilityToPercent }} Regen
          </h2>
        </div>
      </div>
      <p class="quip-text">
        {{ this.dataStore.weatherQuips.currentQuip }}
      </p>

      <div>
        <!-- {{ this.dataStore.currentCityWeatherData }} -->
      </div>
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
  data() {
    return {};
  },
  computed: {
    roundTemperature() {
      return Math.round(
        this.dataStore.currentCityWeatherData.currently.temperature
      );
    },
    convertPrecipationProbabilityToPercent() {
      let precipProb =
        this.dataStore.currentCityWeatherData.currently.precipProbability * 100;
      return precipProb + "%";
    },
  },
};
</script>

<style scoped>
.show-weather__wrapper {
  padding-top: 15%;
  display: flex;
  flex-direction: column;
}
.weather-data__container {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 80%;
  margin: auto;
  justify-content: space-evenly;
}
.current-weather__icon {
  width: 5.75rem;
  height: 6rem;
}
.temperature {
  font-size: 2rem;
}
.rain {
  font-size: 1.25rem;
}
.quip-text {
  font-weight: 500;
  padding-top: 2.5rem;
  margin: auto;
  text-align: center;
  width: 80%;
  font-size: 2.125rem;
}
</style>
