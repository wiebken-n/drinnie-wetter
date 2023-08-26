import { defineStore } from "pinia";

export const useDataStore = defineStore("state", {
  state() {
    return {
      currentCity: "",
      currentGeoData: {},
      currentCityGeoData: {},
      currentCityLat: "",
      currentCityLon: "",
      currentCityWeatherData: {},
      citySelected: false,
      weatherQuips: {
        currentQuip: "",
        currentArray: [],
        collection: {
          sunny: [
            "Viel Spaß mit dem Sonnenbrand.",
            "Eindeutig zu sonnig zum rausgehen.",
          ],
          rainy: [
            "rainy mc rainface",
            "Wenn man auf outdoor-duschen steht spricht nichts dagegen rauszugehen.",
          ],
          cold: ["Viel zu kalt zum rausgehen.", "kaaalt"],
          hot: [
            "Am besten totstellen bis es wieder kühler ist.",
            "too fucking hot",
            "way too hot",
            "just stay insdide man",
          ],
          cloudy: ["Grau in grau..."],
          snowy: ["Schneeschippen, wer mag es nicht..."],
        },
      },
    };
  },
  actions: {
    fetchLocationData(currentCity) {
      return fetch(
        `https://api.api-ninjas.com/v1/geocoding?city=${currentCity}`,
        {
          method: "GET",
          headers: {
            "X-Api-Key": `${process.env.VUE_APP_API_KEY_GEOLOC}`,
          },
          contentType: "application/json",
          success: function (result) {
            console.log(result);
          },
          error: function ajaxError(jqXHR) {
            console.error("Error: ", jqXHR.responseText);
          },
        }
      )
        .then((response) => response.json())
        .then((data) => (this.currentGeoData = data));
    },
    fetchWeatherData(currentCityLat, currentCityLon) {
      return fetch(
        `https://api.pirateweather.net/forecast/${process.env.VUE_APP_API_KEY_WEATHER}/${currentCityLat},${currentCityLon}?exclude=minutely,hourly,daily,alerts&units=si`,
        {
          method: "GET",
          contentType: "application/json",
          success: function (result) {
            console.log(result);
          },
          error: function (error) {
            console.error("Error: ", error);
          },
        }
      )
        .then((response) => response.json())
        .then((data) => (this.currentCityWeatherData = data));
    },

    selectThisCity(city) {
      this.currentCityGeoData = city;
      this.currentCityLat = this.currentCityGeoData.latitude;
      this.currentCityLon = this.currentCityGeoData.longitude;
      console.log(this.currentCityGeoData);
    },
  },
});
