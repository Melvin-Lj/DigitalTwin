<template>
  <div class="main-hero">
    <div class="container">
      <h1>{{ title }}</h1>
      <p>{{ sub }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",

  props: {
    title: String,
    sub: String,
  },
};
</script>

<style scoped>
.main-hero {
  background-image: url("../assets/hero_bg.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  min-height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #fff;
  position: relative;
  z-index: 1;
}

.main-hero::before {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background-color: rgba(26, 26, 26, 0.5);
  z-index: -1;
}

.main-hero h1 {
  font-size: 34px;
  margin-bottom: 5px;
  font-weight: 400;
}

.main-hero p {
  font-size: 24px;
  font-weight: 400;
}
</style>
