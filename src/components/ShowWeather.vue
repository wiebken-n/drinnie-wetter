<template>
  <div v-if="this.dataStore.currentCityWeatherData.timezone">
    <div>
      <h2>{{ this.dataStore.currentCityGeoData.name }}</h2>
      <h2>
        {{ this.dataStore.currentCityWeatherData.currently.temperature }}°C
      </h2>
      <h2>{{ this.dataStore.currentCityWeatherData.currently.summary }}</h2>
      <h2>
        Regenwahrscheinlichkeit:
        {{ this.dataStore.currentCityWeatherData.currently.precipProbability }}
      </h2>
      <h2>
        {{ this.dataStore.weatherQuips.currentQuip }}
      </h2>
    </div>
    <div>
      <!-- {{ this.dataStore.currentCityWeatherData }} -->
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
};
</script>
