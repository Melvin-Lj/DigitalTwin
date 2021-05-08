<template>
  <div class="main">
    <hero
<<<<<<< HEAD
      :title="'Digital Twin Provider | Market overview'"
      :sub="'Overview of various digital twin software solutions'"
=======
      :title="'Digitaler Zwilling Anbieter | Marktübersicht'"
      :sub="'Übersicht verschiedener Digitaler Zwilling Softwarelösungen'"
>>>>>>> 4b84e330a979764c450490d17eea4ff7b0c47a20
    />
    <div class="container">
      <div class="header">
        <div class="flex-item">
<<<<<<< HEAD
          <h2>List of digital twin providers</h2>
        </div>
        <div class="flex-item">
          <p>
            Here you can find a 
            <b>overview of the digital twin software solutions on the market</b>.
            You can limit the search by setting the <b>filter</b>.
=======
          <h2>Liste der Digitaler Zwilling Anbieter</h2>
        </div>
        <div class="flex-item">
          <p>
            Hier finden Sie eine
            <b>Übersicht der Digitaler Zwilling Softwarelösungen auf dem Markt</b>.
            Sie können die Suche durch Setzen der <b>Filter</b> einschränken.
>>>>>>> 4b84e330a979764c450490d17eea4ff7b0c47a20
          </p>
        </div>
      </div>

      <filters
        v-on:filters="getTags"
        :pagiInfo="pagInfoData"
        :filterPro="filterNum"
      />
      <providers
        :filterTags="filterTags"
        @pagInfoUpdate="pagInfo"
        @filterPro="updateFilterNum"
      />
    </div>
  </div>
</template>

<script>
import Hero from "../components/Hero";
import Filters from "../components/Filters";
import Providers from "../components/Providers";

export default {
  name: "home",

  components: {
    Hero,
    Filters,
    Providers,
  },

  data() {
    return {
      filterTags: [],
      filterNum: [],
      pagInfoData: "",
    };
  },

  methods: {
    getTags(value) {
      this.filterTags = value;
    },

    // getOptTag(value) {
    //   this.OptTags = value;
    // },

    pagInfo(pagInfo) {
      this.pagInfoData = pagInfo;
    },

    updateFilterNum(filterPro) {
      this.filterNum = filterPro;
    },
  },
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 50px;
  margin-bottom: 35px;
}

.header h2 {
  color: rgb(51, 51, 51);
  font-weight: 400;
  width: 100%;
  min-width: 200px;
}

.header p {
  color: rgb(116, 116, 116);
  font-size: 16px;
  width: 100%;
  min-width: 500px;
}

.flex-item {
  flex: 1;
}
</style>
