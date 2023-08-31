<template>
  <router-view />
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
