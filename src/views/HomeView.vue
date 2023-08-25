<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <select-city-vue />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import SelectCityVue from "@/components/SelectCity.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
    SelectCityVue,
  },
};
</script>
