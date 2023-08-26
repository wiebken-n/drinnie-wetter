<template>
  <div class="show-weather__wrapper">
    <div v-if="this.dataStore.currentCityWeatherData.timezone">
      <div>
        <h2>{{ this.dataStore.currentCityGeoData.name }}</h2>
        <img
          class="current-weather__icon"
          :src="
            require('@/assets/icons/' +
              this.dataStore.currentCityWeatherData.currently.icon +
              '.svg')
          "
        />
        <h2>{{ roundTemperature }}°C</h2>
        <small>{{ roundTemperature }}</small>
        <h2>{{ this.dataStore.currentCityWeatherData.currently.summary }}</h2>
        <h2>
          Regenwahrscheinlichkeit:
          {{ convertPrecipationProbabilityToPercent }}
        </h2>
        <h2>
          {{ this.dataStore.weatherQuips.currentQuip }}
        </h2>
      </div>
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
  display: flex;
  flex-direction: column;
}
.current-weather__icon {
  width: 3rem;
}
</style>
