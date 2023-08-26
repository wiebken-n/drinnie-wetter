<template>
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
  data() {
    return {};
  },
};
</script>

<style scoped>
.current-weather__icon {
  width: 3rem;
}
</style>
