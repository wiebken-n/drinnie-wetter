<template>
  <div class="footer__container">
    <a
      href="https://github.com/wiebken-n/drinnie-wetter"
      alt="link to github repo of this app"
      target="blank"
    >
      <img
        class="github-logo"
        src="@/assets/icons/github-mark.svg"
        alt="github logo"
      />
    </a>
  </div>
</template>
<script>
import { useDataStore } from "@/stores/useDataStore";
export default {
  name: "AppFooter",
  setup() {
    const dataStore = useDataStore();
    return {
      dataStore,
    };
  },
  computed: {},
};
</script>
<style scoped>
.footer__container {
  width: 100%;
  background: var(--clr-footer-background);
}

.github-logo {
  filter: var(--clr-svg-git);
  margin: auto;
  width: 1.5rem;
  padding-block: 0.85rem 0.5rem;
  transition: all 100ms ease;
}

.github-logo:hover {
  filter: var(--clr-svg-git-hover);
}
</style>
