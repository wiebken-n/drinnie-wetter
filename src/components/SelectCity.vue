<template>
  <div class="city-selection__container">
    <div class="input__wrapper">
      <div class="search-city__wrapper">
        <input
          type="text"
          placeholder="Gib einen Ortsnamen ein"
          v-model.trim="this.dataStore.currentCity"
          id="search-city__input"
        />
        <button
          class="search-city__btn"
          for="search-city__input"
          @click="searchForCity()"
        >
          <img
            class="search-icon"
            src="@/assets/icons/search.svg"
            alt="a magnifying-glass"
          />
        </button>
      </div>
    </div>

    <div class="city-results__wrapper">
      <div
        class="city-results__container"
        v-for="city in this.dataStore.currentGeoData"
        :key="city.latitude"
      >
        <div class="city-result" v-if="this.dataStore.citySelected === false">
          <h3 class="city__data"></h3>

          <button class="select-city__button" @click="this.selectCity(city)">
            {{ city.name }} - {{ city.country }} {{ city.state }}
          </button>
        </div>

        <!-- {{ city.latitude }}
    {{ city.longitude }} -->
      </div>
    </div>
  </div>
</template>

<script>
import { useDataStore } from "@/stores/useDataStore";
export default {
  name: "SelectCityVue",
  setup() {
    const dataStore = useDataStore();
    console.log(dataStore);
    return {
      dataStore,
    };
  },
  data() {
    return {
      userInputCity: "",
      quipArrayLength: 0,
      randomNumber: 0,
      randomQuip: "",
    };
  },

  methods: {
    searchForCity() {
      if (this.dataStore.currentCity !== "") {
        this.dataStore.fetchLocationData(this.dataStore.currentCity);
        this.toggleCitySelected();
      }
    },
    toggleCitySelected() {
      this.dataStore.citySelected = false;
    },
    async selectCity(city) {
      this.dataStore.selectThisCity(city);
      await this.dataStore.fetchWeatherData(
        this.dataStore.currentCityLat,
        this.dataStore.currentCityLon
      );
      console.log("test");
      this.filterQuips();
      console.log("test");
      this.dataStore.citySelected = true;
      this.dataStore.currentCity = "";
      this.dataStore.currentGeoData = {};
    },
    filterQuips() {
      console.log("testQuips");
      console.log(this.dataStore.currentCityWeatherData.currently);
      if (this.dataStore.currentCityWeatherData.currently.temperature > 20) {
        for (let entry of this.dataStore.weatherQuips.collection.hot) {
          this.dataStore.weatherQuips.currentArray.push(entry);
        }
      }
      if (this.dataStore.currentCityWeatherData.currently.temperature < 20) {
        for (let entry of this.dataStore.weatherQuips.collection.cold) {
          this.dataStore.weatherQuips.currentArray.push(entry);
        }
      }
      if (this.dataStore.currentCityWeatherData.currently.summary === "Rain") {
        for (let entry of this.dataStore.weatherQuips.collection.rainy) {
          this.dataStore.weatherQuips.currentArray.push(entry);
        }
      }
      this.determineRandomNumber();
      this.randomQuip =
        this.dataStore.weatherQuips.currentArray[this.randomNumber];
      this.dataStore.weatherQuips.currentQuip = this.randomQuip;
      console.log(this.dataStore.weatherQuips.currentArray);
      this.dataStore.weatherQuips.currentArray = [];
    },
    determineRandomNumber() {
      this.quipArrayLength = this.dataStore.weatherQuips.currentArray.length;
      console.log(this.quipArrayLength);
      const randomInt = Math.floor(Math.random() * this.quipArrayLength);
      console.log(randomInt);
      this.randomNumber = randomInt;
    },
  },
};
</script>

<style scoped>
body {
  display: flex;
  justify-content: center;
  text-align: center;
}
.city-selection__container {
  background-color: var(--clr-background-accent);
  padding-bottom: 1.2rem;
}
.input__wrapper {
  width: 80%;
  margin: auto;
}

.search-city__wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  gap: 0.1rem;
}

#search-city__input {
  height: 2.125rem;
  padding-inline: 0.5rem;
  border-radius: var(--border-radius);
  flex-grow: 1;
}
.search-city__btn {
  width: 3rem;
  height: 2.125rem;
}
.search-icon {
  filter: invert(1);
}
.city-results__wrapper {
  background: transparent;
  z-index: 1;
  position: absolute;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.city-results__container {
  background-color: transparent;
  display: flex;
  justify-content: center;
}
.city-result {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 80%;
  transition: all 100ms ease;
}
.city__data {
  font-size: 1rem;
}
.select-city__button {
  text-align: left;
  font-size: 0.9rem;
  width: 100%;
  background-color: var(--clr-search-results-background);
  color: var(--clr-search-results);
  border-radius: 3px;
  border: 1px solid var(--clr-search-results-border);
  box-shadow: 0 0 5px 0 var(--clr-search-results-border);
}
</style>
