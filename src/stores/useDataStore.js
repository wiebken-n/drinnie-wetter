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
      selectedDay: "",
      counter: 0,
      weatherQuips: {
        currentQuip: "",
        currentArray: [],
        quipDataForCurrently: {
          quip: "",
          quipArray: [],
          quipArrayLength: 0,
          randomNumber: 0,
        },
        0: {
          quip: "",
          quipArray: [],
          quipArrayLength: 0,
          randomNumber: 0,
        },
        1: {
          quip: "",
          quipArray: [],
          quipArrayLength: 0,
          randomNumber: 0,
        },
        2: {
          quip: "",
          quipArray: [],
          quipArrayLength: 0,
          randomNumber: 0,
        },
        collection: {
          sunny: [
            "Schotten dicht, sonst überstrahlt die Sonne den Bildschirm.",
            "Eindeutig zu sonnig zum rausgehen.",
          ],
          rainy: [
            "Regengeräusche, der perfekte Soundtrack für einen Sofatag.",
            "Regen, Sofa, Netflix - a perfect match.",
          ],
          cold: [
            "Zeit zum einkuscheln auf dem Sofa.",
            "Zeit für einen heißen Kakao.",
          ],
          hot: [
            "Ventilator an, Füße hoch.",
            "Eiskaffee machen und die indoor-Kühle genießen.",
          ],
          cloudy: ["Perfektes Lesewetter."],
          windy: ["Sofa, Buch, Windgeräusche - perfekt."],
          snowy: [
            "Machs dir auf dem Sofa gemütlich und genieße das Winterwetter.",
          ],
          general: [
            "Perfektes Sofawetter.",
            "Zuhause gibt's kein schlechtes Wetter.",
          ],
        },
      },
    };
  },
  getters: {
    checkCounterForQuipRender() {
      return this.weatherQuips[0].quip.length > 0;
    },
  },
  actions: {
    checkForCity() {
      if (localStorage.getItem("selectedCityGeoData") !== "null") {
        this.currentCityGeoData = JSON.parse(
          localStorage.getItem("selectedCityGeoData")
        );
        this.currentCityLat = this.currentCityGeoData.latitude;
        this.currentCityLon = this.currentCityGeoData.longitude;
      }
    },
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
        .then((data) => {
          this.currentGeoData = data;
        });
    },
    selectThisCity(city) {
      this.currentCityGeoData = city;
      localStorage.setItem("selectedCityGeoData", JSON.stringify(city));
      this.currentCityLat = this.currentCityGeoData.latitude;
      this.currentCityLon = this.currentCityGeoData.longitude;
    },
    async fetchWeatherData(currentCityLat, currentCityLon) {
      return fetch(
        `https://api.pirateweather.net/forecast/${process.env.VUE_APP_API_KEY_WEATHER}/${currentCityLat},${currentCityLon}?exclude=minutely,hourly,alerts&units=si`,
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
        .then((data) => {
          this.currentCityWeatherData = data;
          this.counter++;
        });
    },

    setCitySelectedToTrue() {
      this.citySelected = true;
    },
    roundTemperature(temperature) {
      return Math.round(temperature);
    },
    convertWindToKph(windspeed) {
      let wind = windspeed * 10;
      return Math.round(wind);
    },

    convertPrecipationProbabilityToPercent(precipationProb) {
      let precipProb = precipationProb * 100;
      precipProb = Math.round(precipProb);
      return precipProb + "%";
    },
  },
});
