<template>
  <div class="main">
    <hero
      :title="'Digitaler Zwilling Anbieter | Marktübersicht'"
      :sub="'Übersicht verschiedener Digitaler Zwilling Softwarelösungen'"
    />
    <h2>Dimension Definition</h2>
  </div>
</template>

<script>
import Hero from "../components/Hero";

export default {
  name: "dimension_definition",
  components: {
    Hero,
  },
};
</script>

<style scoped></style>
