<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>{{ this.dataStore.testdata }}</h2>
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
    return {};
  },
};
</script>
