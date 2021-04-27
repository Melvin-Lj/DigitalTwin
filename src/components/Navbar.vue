<template>
  <nav id="navbar">
    <div class="container navbar">
      <ul class="navbar-nav">
        <li><a class="nav-link" href="#provider">Anbieterübersicht</a></li>
        <li><a class="nav-link" href="#contact">Digital Twin Definition</a></li>
        <li><a class="nav-link" href="#contact">Kontakt</a></li>
      </ul>

      <div class="brand">
        <router-link to="home">Digital Twin Anbieter</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "navbar",

  methods: {
    handleSCroll() {
      let header = document.getElementById("navbar");
      if (window.scrollY > 30 && !header.className.includes("bg-light")) {
        header.classList.add("bg-light");
      } else if (window.scrollY < 30) {
        header.classList.remove("bg-light");
      }
    },
  },
  created() {
    window.addEventListener("scroll", this.handleSCroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleSCroll);
  },
};
</script>

<style scoped>
nav {
  background-color: transparent;
  position: fixed;
  z-index: 99;
  width: 100%;
  transition: all 0.3s;
}

nav.bg-light {
  background-color: #fff;
  box-shadow: 0 2px 4px rgb(0 0 0 / 14%);
}

nav::before {
  content: "";
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 1px;
  background-color: rgb(214, 214, 214);
  transition: all 0.4s;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar-nav {
  display: flex;
  align-items: center;
  list-style: none;
}

.navbar-nav li {
  display: inline-block;
}

.nav-link {
  display: block;
  margin-right: 20px;
  text-decoration: none;
  color: #fff;
  font-weight: 600;
  font-size: 15px;
  position: relative;
  padding: 22px 0px 20px;
}

nav.bg-light .nav-link {
  color: #333;
}

.nav-link::before {
  content: "";
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 0px;
  opacity: 0;
  background-color: #e10707;
  transition: all 0.4s;
}

.nav-link:hover,
nav.bg-light .nav-link:hover {
  color: #e10707;
}

.nav-link:hover::before {
  height: 4px;
  opacity: 1;
}

.brand a {
  font-weight: 700;
  font-size: 18px;
  color: #fff;
  text-decoration: none;
}

nav.bg-light .brand a {
  color: #333;
}

nav.bg-light .nav-search button {
  color: #333;
}

nav.bg-light .nav-search button:hover,
nav.bg-light .nav-search button:focus {
  color: #e10707;
}
</style>
