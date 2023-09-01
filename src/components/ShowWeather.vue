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
            Regen
          </h2>
        </div>
      </div>
      <p v-if="this.dataStore.checkCounterForQuipRender" class="quip-text">
        {{ this.dataStore.weatherQuips[0].quip }}
      </p>
      <p v-else class="quip-text">Sofa geht immer.</p>

      <p class="date">{{ showDate }}</p>
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
      // const currentDateString = currentDateObj.toString();
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

<style scoped>
.show-weather__wrapper {
  width: 80%;
  display: flex;
  flex-direction: column;
}
.weather-data__wrapper {
  width: 100%;
  margin-inline: auto;
}
.weather-data__container {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: auto;
  justify-content: space-evenly;
  gap: 1rem;
}
.current-weather__icon {
  width: 5.75rem;
  height: 6rem;
  filter: var(--clr-svg);
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
  width: 100%;
  font-size: 2.125rem;
}
.date {
  font-size: 1.3rem;
  font-weight: 600;
  text-align: center;
  padding: 0;
  margin-block: 3rem 0;
}
</style>
