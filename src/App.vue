<template>
  <router-view @click="this.dataStore.setCitySelectedToTrue()" />
</template>

<script>
import { useDataStore } from "@/stores/useDataStore";

export default {
  setup() {
    const dataStore = useDataStore();
    return {
      dataStore,
    };
  },
};
</script>
