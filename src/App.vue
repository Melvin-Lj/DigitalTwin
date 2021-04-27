<template>
  <div id="app">
    <navbar />
    <router-view />
    <main-footer />
  </div>
</template>

<script>
import navbar from "./components/Navbar";
import mainFooter from "./components/MFooter";

export default {
  components: {
    navbar,
    mainFooter,
  },
};
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}

*:before,
*:after {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: Arial, Helvetica, sans-serif;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main {
  flex-grow: 1;
}

footer {
  flex-shrink: 0;
}

.container {
  width: 100%;
  max-width: 1150px;
  margin: auto;
  padding: 0px 20px;
}

.filtetr-select .vs__search::placeholder,
.filtetr-select .vs__dropdown-toggle,
.filtetr-select .vs__dropdown-menu {
  background: #fff;
  color: #999999;
  font-size: 14px;
}

.filtetr-select .vs__selected {
  color: #999999;
}

.filtetr-select .vs__clear,
.filtetr-select .vs__open-indicator {
  fill: #999999;
}

.pagination {
  list-style: none;
  padding: 0px;
  margin: 30px 0px 0px;
  display: flex;
  justify-content: flex-end;
}

.pagination li {
  display: inline-block;
}

.pagination li.first,
.pagination li.last {
  display: none;
}

.pagination li a {
  padding: 8px 12px 7px;
  border: 1px solid #868e96;
  display: block;
  cursor: pointer;
  color: #868e96;
  transition: all 0.3s;
}

.pagination li.page-number a {
  border-right: 0px;
}

.pagination li a:hover {
  background-color: #868e968f;
  color: #fff;
}

.pagination li.previous a {
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  border-right: 0px;
  font-weight: 700;
}

.pagination li.next a {
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  font-weight: 700;
}

.pagination li.active a {
  background-color: #868e96;
  color: #fff;
}

.pagination li.disabled a {
  pointer-events: none;
  border-color: #868e9669;
  color: #868e9669;
}
</style>
