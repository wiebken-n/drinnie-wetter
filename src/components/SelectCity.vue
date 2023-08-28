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

          <button
            class="select-city__button"
            @click="
              this.selectCity(
                city,
                this.dataStore.currentCityWeatherData,
                this.dataStore.weatherQuips,
                this.dataStore.weatherData
              )
            "
          >
            {{ city.name }} - {{ city.country }} {{ city.state }}
          </button>
        </div>
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
    // async selectCity(city, dataStoreDayLocation, quipDataPath) {
    async selectCity(city) {
      await this.dataStore.selectThisCity(city);
      await this.dataStore.fetchWeatherData(
        this.dataStore.currentCityLat,
        this.dataStore.currentCityLon
      );
      // this.filterQuips(city, dataStoreDayLocation, quipDataPath);
      this.dataStore.citySelected = true;
      // this.dataStore.currentCity = "";
      // this.dataStore.currentGeoData = {};
    },

    filterQuips(dataStoreDayLocation, quipDataPath) {
      for (let i = 0; i < 3; i++) {
        const currentQuipDataPath = quipDataPath[i];
        // console.log(currentQuipDataPath);
        // console.log(dataStoreDayLocation.daily.data[i].temperatureMax);
        // console.log(dataStoreDayLocation.daily.data[i].summary);
        if (dataStoreDayLocation.daily.data[i].temperatureMax >= 20) {
          for (let entry of this.dataStore.weatherQuips.collection.hot) {
            currentQuipDataPath.quipArray.push(entry);
          }
        }
        if (dataStoreDayLocation.daily.data[i].temperatureMax < 20) {
          for (let entry of this.dataStore.weatherQuips.collection.cold) {
            currentQuipDataPath.quipArray.push(entry);
          }
        }
        if (dataStoreDayLocation.daily.data[i].summary === "Rain") {
          for (let entry of this.dataStore.weatherQuips.collection.rainy) {
            currentQuipDataPath.quipArray.push(entry);
          }
        }

        this.determineRandomNumber(
          dataStoreDayLocation,
          quipDataPath,
          currentQuipDataPath
        );
        this.randomQuip =
          currentQuipDataPath.quipArray[currentQuipDataPath.randomNumber];
        currentQuipDataPath.quip = this.randomQuip;
        console.log(i);
        console.log(currentQuipDataPath.quipArray);
        currentQuipDataPath.quipArray = [];
        currentQuipDataPath.quipArrayLength = 0;
      }
    },

    determineRandomNumber(
      dataStoreDayLocation,
      quipDataPath,
      currentQuipDataPath
    ) {
      console.log(currentQuipDataPath);
      currentQuipDataPath.quipArrayLength =
        currentQuipDataPath.quipArray.length;
      const randomInt = Math.floor(
        Math.random() * currentQuipDataPath.quipArrayLength
      );
      currentQuipDataPath.randomNumber = randomInt;
    },
  },
  computed: {
    weatherData() {
      return this.dataStore.currentCityWeatherData;
    },
  },
  watch: {
    watchWeatherData(weatherData) {
      console.log(weatherData);
      this.filterQuips(
        this.dataStore.currentCityWeatherData,
        this.dataStore.weatherQuips
      );
      this.dataStore.citySelected = true;
      this.dataStore.currentCity = "";
      this.dataStore.currentGeoData = {};
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
  align-items: center;
  width: 100%;
  gap: 0.15rem;
}

#search-city__input {
  height: 2.3rem;
  padding-inline: 0.5rem;
  border-radius: var(--border-radius);
  flex-grow: 1;
  background-color: var(--clr-input);
  border: 2px solid var(--clr-font);
  font-size: 1rem;
}

#search-city__input:enabled,
#search-city__input:active {
  background-color: var(--clr-input-active);
}
.search-city__btn {
  width: 3rem;
  height: 2.125rem;
}
.search-icon {
  filter: var(--clr-svg);
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
  font-size: 1rem;
  width: 100%;
  background-color: var(--clr-search-results-background);
  color: var(--clr-search-results);
  font-weight: 500;
  border-radius: 3px;
  border: 1px solid var(--clr-search-results-border);
  box-shadow: 0 0 5px 0 var(--clr-search-results-border);
}

.select-city__button:hover {
  background-color: var(--clr-search-results-background-hover);
}
</style>
