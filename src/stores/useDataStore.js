import { defineStore } from "pinia";

export const useDataStore = defineStore("state", {
  state() {
    return {
      testdata: "123Test",
      currentCity: "",
      currentGeoData: {},
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
    printLocationData() {
      console.log(this.currentGeoData[0]);
    },
  },
});
