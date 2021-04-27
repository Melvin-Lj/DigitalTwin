<template>
  <div class="main">
    <hero
      :title="'Digital Twin Anbieter | Marktübersicht'"
      :sub="'Übersicht verschiedener Digital Twin Softwarelösungen'"
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