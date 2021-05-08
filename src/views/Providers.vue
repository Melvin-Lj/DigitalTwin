<template>
  <div class="main">
    <hero
      :title="'Digital Twin Provider | Market overview'"
      :sub="'Overview of various digital twin software solutions'"
    />
    <h2>Providers</h2>
  </div>
</template>

<script>
import Hero from "../components/Hero";

export default {
  name: "providers",
  components: {
    Hero,
  },
};
</script>

<style scoped>
</style>