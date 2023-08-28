import { defineStore } from "pinia";

// this.dataStore.currentCityWeatherData.currently,
// this.dataStore.weatherQuips.day0
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
      weatherQuips: {
        currentQuip: "",
        currentArray: [],
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
          snowy: [
            "Machs dir auf dem Sofa gemütlich und genieße das Winterwetter.",
          ],
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
    selectThisCity(city) {
      this.currentCityGeoData = city;
      this.currentCityLat = this.currentCityGeoData.latitude;
      this.currentCityLon = this.currentCityGeoData.longitude;
    },
    fetchWeatherData(currentCityLat, currentCityLon) {
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
        .then((data) => (this.currentCityWeatherData = data));
    },

    // determineRandomNumber() {
    //   this.quipArrayLength = this.dataStore.weatherQuips.currentArray.length;
    //   console.log(this.quipArrayLength);
    //   const randomInt = Math.floor(Math.random() * this.quipArrayLength);
    //   console.log(randomInt);
    //   this.randomNumber = randomInt;
    // },
    // filterQuips(dataStoreDayLocation, quipArrayDay, quipDay) {
    //   if (dataStoreDayLocation.temperature > 23) {
    //     for (let entry of this.weatherQuips.collection.hot) {
    //       quipArrayDay.push(entry);
    //     }
    //   }
    //   if (dataStoreDayLocation.temperature < 15) {
    //     for (let entry of this.weatherQuips.collection.cold) {
    //       quipArrayDay.push(entry);
    //     }
    //   }
    //   if (dataStoreDayLocation.summary === "Rain") {
    //     for (let entry of this.weatherQuips.collection.rainy) {
    //       quipArrayDay.push(entry);
    //     }
    //   }
    //   this.determineRandomNumber();
    //   this.randomQuip = quipArrayDay[this.randomNumber];
    //   quipDay = this.randomQuip;
    //   console.log(quipDay);
    //   quipArrayDay = [];
    // },
    setCitySelectedToTrue() {
      this.citySelected = true;
    },
    roundTemperature(temperature) {
      return Math.round(temperature);
    },

    convertPrecipationProbabilityToPercent(precipationProb) {
      let precipProb = precipationProb * 100;
      precipProb = Math.round(precipProb);
      return precipProb + "%";
    },
  },
});
