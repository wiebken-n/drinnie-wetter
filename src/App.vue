<template>
  <router-view @click="this.dataStore.setCitySelectedToTrue()" />
</template>

<script>
import { useDataStore } from "@/stores/useDataStore";

export default {
  setup() {
    const dataStore = useDataStore();
    return {
      dataStore,
    };
  },
  async created() {
    await this.dataStore.checkForCity();
    await this.dataStore.fetchWeatherData(
      this.dataStore.currentCityLat,
      this.dataStore.currentCityLon
    );
  },
};
</script>
