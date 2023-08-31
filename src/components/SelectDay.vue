<template>
  <div class="nav__wrapper">
    <div class="button__wrapper">
      <button
        @click="toToday"
        :class="{ active: this.dataStore.selectedDay === 'today' }"
      >
        aktuell
      </button>
      <button
        @click="toTomorrow"
        :class="{ active: this.dataStore.selectedDay === 'tomorrow' }"
      >
        morgen
      </button>
      <button
        @click="toDayAfterTomorrow"
        :class="{ active: this.dataStore.selectedDay === 'day-after-tomorrow' }"
      >
        übermorgen
      </button>
    </div>
  </div>
</template>

<script>
import { useDataStore } from "@/stores/useDataStore.js";
export default {
  name: "SelectDayVue",
  setup() {
    const dataStore = useDataStore();
    return {
      dataStore,
    };
  },
  methods: {
    toToday() {
      this.dataStore.selectedDay = "today";
      this.$router.push("/");
    },
    toTomorrow() {
      this.dataStore.selectedDay = "tomorrow";
      this.$router.push("/tomorrow");
    },
    toDayAfterTomorrow() {
      this.dataStore.selectedDay = "day-after-tomorrow";
      this.$router.push("/in-two-days");
    },
  },
};
</script>

<style scoped>
.nav__wrapper {
  padding-block: 0 2rem;
  width: 100%;
  background: var(--clr-nav-background);
}
.button__wrapper {
  display: flex;
  flex-direction: row;
  width: 79.8%;
  margin: auto;
  justify-content: space-around;
  gap: 1rem;
}
button {
  font-size: 0.85rem;
  font-weight: 600;
  width: 6rem;
  flex-grow: 1;
}
.active {
  background-color: var(--clr-btn-active);
}
</style>
