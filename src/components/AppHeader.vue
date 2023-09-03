<template>
  <div class="header__container">
    <div class="header__wrapper">
      <h1 class="logo-text">
        <span class="text-logo__drinnie">Drinnie</span>
        <span class="text-logo__wetter"> Wetter</span>
      </h1>
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
  height: 3.8rem;
  background-color: var(--clr-background-accent);
  margin: 0;
  padding: 0;
  color: var(--clr-font-header);
}
.header__wrapper {
  margin: auto;
  display: flex;
  width: 79.75%;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
  padding-top: 1rem;
  margin-bottom: 0;
}
.logo-text,
.divider {
  font-size: 1.5rem;
  margin: 0;
}
.text-logo__drinnie {
  text-transform: uppercase;
}
.city-name {
  font-weight: 500;
  font-size: 1.25rem;
  margin: 0;
}
</style>
