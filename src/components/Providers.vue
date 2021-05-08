<template>
  <footer id="provider">
    <div>
      <div class="providers">
        <template v-for="(provider, index) in pageOfItems">
          <a :href="provider.link" :key="index">
            <div class="provider">
              <div class="card-header">
                <div class="heading">
                  <h3>{{ provider.anbieter }}</h3>
                  <span class="sub">{{ provider.angebot }}</span>
                </div>
              </div>
              <div class="card-body">
               <ul class="info-list">
                <li>
                    <h5>Product name</h5>
                    <span>{{
                      provider.produktname
                    }}</span>
                  </li>
                </ul>
                <div class="info-box">
                  <h4>Specialization</h4>
                  <span v-for="item in provider.spezialisierung" :key="item">{{
                    item
                  }}</span>
                </div>

                <div class="info-box">
                  <h4>Range of functions</h4>
                  <span v-for="item in provider.funktionsumfang" :key="item">{{
                    item
                  }}</span>
                </div>

                <ul class="info-list">
                  
                  <li>
                    <h5>Is the software operation offered</h5>
                    <span>{{
                      provider.wird_der_software_betrieb_angebote
                    }}</span>
                  </li>
                  <li>
                    <h5>Country</h5>
                    <span>{{ provider.land }}</span>
                  </li>
                  <li>
                    <h5>No-Code Plattform</h5>
                    <span>{{ provider.noCode_plattform }}</span>
                  </li>
                  <li>
                    <h5>Cloud optmized</h5>
                    <span>{{ provider.cloud_optmiert }}</span>
                  </li>
                  <li>
                    <h5>Where is the cloud solution operated</h5>
                    <span>{{ provider.wo_wird_cloud_lösung_betrieben }}</span>
                  </li>
                  <li>
                    <h5>Can other systems be connected</h5>
                    <span>{{
                      provider.können_weitere_systeme_angebunden_werden
                    }}</span>
                  </li>
                  <li>
                    <h5>Creation time</h5>
                    <span>{{ provider.erstellungszeitpunkt }}</span>
                  </li>
                </ul>

                <div class="price-box">
                  <h3>Price</h3>
                  <span>{{ provider.preis }}</span>
                </div>
              </div>
            </div>
          </a>
        </template>
      </div>

      <pagination
        :items="Fproviders"
        @changePage="onChangePage"
        :maxPages="6"
        :pageSize="pageSize"
        :disableDefaultStyles="true"
        :labels="customLabels"
      ></pagination>
    </div>
  </footer>
</template>

<script>
import Providers from "../data/providers.json";
import Pagination from "../components/Pagination";

const customLabels = {
  previous: "<i class='fas fa-angle-double-left'></i>",
  next: "<i class='fas fa-angle-double-right'></i>",
};

export default {
  name: "providers",

  props: {
    filterTags: Array,
  },

  components: {
    Pagination,
  },

  data() {
    return {
      providers: Providers,
      pageSize: 9,
      customLabels,
      pageOfItems: [],
      filters: [],
      Optfilters: [],
      Fproviders: [],
    };
  },

  created() {
    this.defaultProviders();
  },

  watch: {
    filterTags: function (value) {
      let checkTags = [];

      value.forEach((element, index) => {
        if (index != value.length - 1) {
          checkTags.push(element);
        }
      });

      if (value.length > 0) {
        let filteredTags = this.providers.filter((pro) => {
          const tags = [
            pro.angebot,
            pro.land,
            pro.wo_wird_cloud_lösung_betrieben,
            pro.können_weitere_systeme_angebunden_werden,
          ].concat(pro.spezialisierung, pro.funktionsumfang);
          return checkTags.every((f) => tags.includes(f));
        });

        console.log(filteredTags);

        let filteredOpts = filteredTags;

        let selOpts = value[value.length - 1];

        selOpts.selectedOptions.forEach((opt) => {
          if (opt.value != null) {
            if (opt.name === "cloud_optmiert") {
              const opt1 = filteredOpts.filter(function (pro) {
                return pro.cloud_optmiert === opt.value;
              });

              filteredOpts = opt1;
            }

            if (opt.name === "wird_der_software_betrieb_angebote") {
              const opt2 = filteredOpts.filter(function (pro) {
                return pro.wird_der_software_betrieb_angebote === opt.value;
              });

              filteredOpts = opt2;
            }

            if (opt.name === "noCode_plattform") {
              const opt3 = filteredOpts.filter(function (pro) {
                return pro.noCode_plattform === opt.value;
              });

              filteredOpts = opt3;
            }

            if (opt.name === "erstellungszeitpunkt") {
              const opt4 = filteredOpts.filter(function (pro) {
                return pro.erstellungszeitpunkt === opt.value;
              });

              filteredOpts = opt4;
            }
          }
        });

        this.Fproviders = [];
        this.Fproviders = filteredOpts;

        this.$emit("filterPro", this.Fproviders);
      } else {
        this.Fproviders = this.providers;
        this.$emit("filterPro", this.Fproviders);
      }
    },
  },

  methods: {
    defaultProviders() {
      this.Fproviders = this.providers;
      this.$emit("filterPro", this.Fproviders);
    },
    onChangePage(pageOfItems, pagInfo) {
      // update page of items
      this.pageOfItems = pageOfItems;

      this.$emit("pagInfoUpdate", pagInfo);
    },
  },
};
</script>

<style scoped>
.providers {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-gap: 20px;
  margin-top: 40px;
}

.providers a {
  text-decoration: none;
}

.provider {
  overflow: hidden;
  background-color: #fbfbfb;
  box-shadow: 0px 3px 10px rgb(0 0 0 / 8%);
  height: 100%;
}

.heading {
  padding: 20px 20px 18px;
}

.card-header h3 {
  font-weight: 600;
  font-size: 17px;
  color: #e10707;
  margin-bottom: 5px;
}

.card-header .sub {
  font-size: 15px;
  color: #747474;
}

.provider-img {
  width: 100%;
  height: 240px;
  position: relative;
  background-color: #f0f0f0;
}

.provider-img img {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0px;
  top: 0px;
  object-fit: cover;
}

.card-body {
  padding: 0px 20px 20px;
}

.info-box {
  padding: 15px 0px;
  border-bottom: 1px solid #ccc;
  font-size: 14px;
}

.info-box:first-child {
  border-top: 1px solid #ccc;
}

.info-box h4 {
  margin-bottom: 10px;
  font-size: 16px;
  color: #000;
}

.info-box span {
  border-right: 1px solid #e10707;
  padding: 0px 4px;
  display: inline-block;
  color: #000;
}

.info-box span:first-child {
  padding: 0px 4px 0px 0px;
}

.info-box span:last-child {
  border-right: 0px;
}

.info-list {
  list-style: none;
  padding: 0px;
  margin: 0px;
  margin-top: 20px;
}

.info-list li {
  padding: 5px 0px;
  border-bottom: 1px solid #ccc;
}

.info-list li h5 {
  font-size: 14px;
  margin-bottom: 4px;
  color: #000;
}

.info-list li span {
  font-size: 14px;
  color: #747474;
}

.price-box {
  padding: 15px 0px 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.price-box h3 {
  color: #000;
}

.price-box span {
  color: #e10707;
  font-weight: 700;
}
</style>
