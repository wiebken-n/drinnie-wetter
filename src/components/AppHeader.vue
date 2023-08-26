<template>
  <div class="header__container">
    <div class="header__wrapper">
      <h1 class="logo-text">Grumpy Weather</h1>
      <!-- <p class="divider" v-if="this.dataStore.currentCityLat">|</p> -->
      <p class="city-name">{{ giveCurrentCityName }}</p>
    </div>
  </div>
</template>

<script>
import { useDataStore } from "@/stores/useDataStore";
export default {
  name: "AppHeader",
  setup() {
    const dataStore = useDataStore();
    return {
      dataStore,
    };
  },
  computed: {
    giveCurrentCityName() {
      if (this.dataStore.currentCityLat) {
        return this.dataStore.currentCityGeoData.name;
      } else {
        return "";
      }
    },
  },
};
</script>

<style scoped>
.header__container {
  height: 4rem;
  background-color: var(--clr-background-accent);
  margin: 0;
  padding: 0;
}
.header__wrapper {
  margin: auto;
  display: flex;
  width: 80%;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
  padding-block: 1rem 1.125rem;
}
.logo-text,
.divider {
  font-size: 1.5rem;
  margin: 0;
}
.city-name {
  font-size: 1.125rem;
  margin: 0;
}
</style>
