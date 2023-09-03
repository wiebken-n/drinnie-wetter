<template>
  <div class="nav__wrapper">
    <div class="button__wrapper">
      <button
        class="btn__day"
        @click="toCurrent"
        :class="{ active: this.dataStore.selectedDay === 'current' }"
      >
        aktuell
      </button>
      <button
        class="btn__day"
        @click="toToday"
        :class="{ active: this.dataStore.selectedDay === 'today' }"
      >
        heute
      </button>
      <button
        class="btn__day"
        @click="toTomorrow"
        :class="{ active: this.dataStore.selectedDay === 'tomorrow' }"
      >
        morgen
      </button>
      <button
        class="btn__day"
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
    toCurrent() {
      this.dataStore.selectedDay = "current";
      this.$router.push("/");
    },
    toToday() {
      this.dataStore.selectedDay = "today";
      this.$router.push("/today");
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
  width: 79.9%;
  margin: auto;
  justify-content: space-around;
  gap: 1rem;
}
button {
  font-size: 0.8rem;
  font-weight: 700;
  width: 7rem;
  flex-grow: 1;
}
.active {
  background-color: var(--clr-btn-active);
  box-shadow: 0 0 5px 3px var(--clr-font);
}
</style>
