<template>
  <div class="about">
    <input type="text" v-model="this.dataStore.currentCity" />
    <button
      @click="
        this.dataStore.fetchLocationData(this.dataStore.currentCity),
          toggleCitylSelected()
      "
    >
      Search for City
    </button>
  </div>
  <div v-for="city in this.dataStore.currentGeoData" :key="city.latitude">
    <div v-if="this.dataStore.citySelected === false">
      {{ city.name }}
      {{ city.country }}
      {{ city.state }}
      <button @click="this.selectCity(city)">Select this City</button>
    </div>

    <!-- {{ city.latitude }}
    {{ city.longitude }} -->
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
    toggleCitylSelected() {
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
