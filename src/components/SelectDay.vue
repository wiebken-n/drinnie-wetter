<template>
  <div class="nav__wrapper">
    <div class="button__wrapper">
      <button @click="toToday">aktuell</button>
      <button @click="toTomorrow">morgen</button>
      <button @click="toDayAfterTomorrow">übermorgen</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "SelectDayVue",
  methods: {
    toToday() {
      this.$router.push("/");
    },
    toTomorrow() {
      this.$router.push("/tomorrow");
    },
    toDayAfterTomorrow() {
      this.$router.push("/in-two-days");
    },
  },
};
</script>

<style scoped>
.nav__wrapper {
  padding-block: 0 2rem;
  width: 100%;
  background-color: red;
  background: var(--clr-nav-background);
}
.button__wrapper {
  display: flex;
  flex-direction: row;
  width: 80%;
  margin: auto;
  justify-content: space-around;
  gap: 1rem;
}
button {
  font-size: 0.85rem;
  font-weight: 600;
  min-width: 8rem;
  flex-grow: 1;
}
</style>
