<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>{{ this.dataStore.testdata }}</h2>
    <input type="text" v-model="this.dataStore.currentCity" />
    <button
      @click="this.dataStore.fetchLocationData(this.dataStore.currentCity)"
    >
      CLick ME
    </button>
    <button @click="this.dataStore.printLocationData">Click me 2</button>
  </div>
</template>

<script>
import { useDataStore } from "@/stores/useDataStore";
export default {
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
    };
  },
};
</script>
