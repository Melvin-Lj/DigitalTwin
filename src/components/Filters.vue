<template>
  <div class="filters">
    <div class="action-header">
      <button @click="show = !show">
        <i class="fas fa-sliders-h"></i>
        <span>Filter options</span>
      </button>
      {{ pagiInfo }}
    </div>

    <div class="filters-form" v-show="show">
      <template v-for="(filter, index) in filters">
        <div class="filter-item" :key="index">
          <div class="filter-title">{{ filter.title }}</div>
          <div class="filter-body">
            <ul v-if="filter.checkBoxes">
              <template v-for="(checkbox, index) in filter.checkBoxes">
                <li v-show="index < filter.limit_by" :key="index">
                  <label class="checkbox">
                    <span class="checkbox__input">
                      <input
                        type="checkbox"
                        :value="checkbox.value"
                        @change="ApplyFilter"
                        v-model="selectedTags"
                      />
                      <span class="checkbox__control">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          focusable="false"
                        >
                          <path
                            fill="none"
                            stroke="currentColor"
                            stroke-width="3"
                            d="M1.73 12.91l6.37 6.37L22.79 4.59"
                          />
                        </svg>
                      </span>
                    </span>
                    <span class="radio__label">{{ checkbox.name }}</span>
                  </label>
                </li>
              </template>
              <a
                v-if="filter.checkBoxes.length > 4"
                @click.prevent="dynamic_toggle(index)"
                href="#"
                class="toggle_btn"
              >
                {{ filter.limit_by === 4 ? "+ more" : "- less" }}
              </a>
            </ul>
          </div>
        </div>
      </template>

      <div class="filter-item">
        <div class="filter-title">Cloud - Solution</div>
        <div class="filter-body">
          <v-select
            class="filtetr-select"
            placeholder="Please select"
            label="lable"
            @input="ApplyFilter"
            :reduce="(lable) => lable.id"
            :options="selectFilters[0].value"
            v-model="selectedOptions[0].value"
          ></v-select>
        </div>
      </div>

      <div class="filter-item">
        <div class="filter-title">Operation of the software</div>
        <div class="filter-body">
          <v-select
            class="filtetr-select"
            placeholder="Please select"
            label="lable"
            @input="ApplyFilter"
            :reduce="(lable) => lable.id"
            :options="selectFilters[1].value"
            v-model="selectedOptions[1].value"
          ></v-select>
        </div>
      </div>

      <div class="filter-item">
        <div class="filter-title">No-Code Plattform</div>
        <div class="filter-body">
          <v-select
            class="filtetr-select"
            placeholder="Please select"
            label="lable"
            @input="ApplyFilter"
            :reduce="(lable) => lable.id"
            :options="selectFilters[2].value"
            v-model="selectedOptions[2].value"
          ></v-select>
        </div>
      </div>

      <div class="filter-item">
        <div class="filter-title">Creation time</div>
        <div class="filter-body">
          <v-select
            class="filtetr-select"
            placeholder="Please select"
            label="lable"
            @input="ApplyFilter"
            :reduce="(lable) => lable.id"
            :options="selectFilters[3].value"
            v-model="selectedOptions[3].value"
          ></v-select>
        </div>
      </div>
    </div>
    <div class="filter-buttons">
      <!-- <button @click="ApplyFilter" class="submit-btn" v-show="show">
        Filter anwenden
      </button> -->
      <button @click="reset" class="rest-btn" v-show="show">
        Reset      </button>
    </div>
  </div>
</template>

<script>
import Providers from "../data/providers.json";

export default {
  name: "filters",

  props: {
    pagiInfo: String,
    filterPro: Array,
  },

  data() {
    return {
      providers: Providers,
      defaultFilters: [
        {
          title: "Offer",
          checkBoxes: [
            {
              name: "Consulting + Software",
              value: "Consulting + Software",
            },
            {
              name: "Consulting + Software + Cloud",
              value: "Consulting + Software + Cloud",
            },
            {
              name: "Consulting + Software + Hardware",
              value: "Consulting + Software + Hardware",
            },
          ],
          limit_by: 4,
        },
        {
          title: "Specialization",
          checkBoxes: [
            {
              name: "Agricultural economics",
              value: "Agricultural economics",
            },
            {
              name: "Audio industry",
              value: "Audio industry",
            },
            {
              name: "Automotive",
              value: "Automotive",
            },
            {
              name: "Construction industry",
              value: "Construction industry",
            },
            {
              name: "Life science",
              value: "Life science",
            },
            {
              name: "Electrical engineering",
              value: "Electrical engineering",
            },
            {
              name: "Energy",
              value: "Energy",
            },
            {
              name: "Business processes",
              value: "Business processes",
            },
            {
              name: "Healthcare",
              value: "Healthcare",
            },
            {
              name: "High - Tech",
              value: "High - Tech",
            },
            {
              name: "Property management",
              value: "Property management",
            },
            {
              name: "Infrastructur",
              value: "Infrastructur",
            },
            {
              name: "Internet of Things App",
              value: "Internet of Things App",
            },
            {
              name: "Communication",
              value: "Communication",
            },
            {
              name: "Logistics",
              value: "Logistics",
            },
            {
              name: "Aerospace",
              value: "Aerospace",
            },
            {
              name: "Mechanical engineering",
              value: "Mechanical engineering",
            },
            {
              name: "Public sector",
              value: "Public sector",
            },
            {
              name: "Production",
              value: "Production",
            },
            {
              name: "Utilities",
              value: "Utilities",
            },
            {
              name: "Defense",
              value: "Defense",
            },
            {
              name: "Virtual Reality / Argumented Reality",
              value: "Virtual Reality / Argumented Reality",
            },
          ],
          limit_by: 4,
        },
        {
          title: "Country",
          checkBoxes: [
            {
              name: "Australia",
              value: "Australia",
            },
            {
              name: "Germany",
              value: "Germany",
            },
            {
              name: "France",
              value: "France",
            },
            {
              name: "Switzerland",
              value: "Switzerland",
            },
            {
              name: "United States",
              value: "United States",
            },
          ],
          limit_by: 4,
        },
        {
          title: "Range of functions",
          checkBoxes: [
            {
              name: "Aftermarket services",
              value: "Aftermarket services",
            },
            {
              name: "Acoustic simulation",
              value: "Acoustic simulation",
            },
            {
              name: "Data Sharing",
              value: "Data Sharing",
            },
            {
              name: "Data analysis & system solution",
              value: "Data analysis & system solution",
            },
            {
              name: "Design",
              value: "Design",
            },
            {
              name: "Digital Engeenering",
              value: "Digital Engeenering",
            },
            {
              name: "Digital factory",
              value: "Digital factory",
            },
            {
              name: "Digital building management",
              value: "Digital building management",
            },
            {
              name: "Digitalization of business processes",
              value: "Digitalization of business processes",
            },
            {
              name: "Enterprise Information Management",
              value: "Enterprise Information Management",
            },
            {
              name: "Artificial intelligence",
              value: "Artificial intelligence",
            },
            {
              name: "Machine Learning",
              value: "Machine Learning",
            },
            {
              name: "Product-Lifecycle-Management",
              value: "Product-Lifecycle-Management",
            },
            {
              name: "Robotics",
              value: "Robotics",
            },
            {
              name: "Visualization / Simulation",
              value: "Visualization / Simulation",
            },
          ],
          limit_by: 4,
        },
        {
          title: "Operation of the cloud",
          checkBoxes: [
            {
              name: "Customer",
              value: "Customer",
            },
            {
              name: "Company",
              value: "Company",
            },
            {
              name: "Company or Customer",
              value: "Company or Customer",
            },
          ],
          limit_by: 4,
        },
      ],
      filters: [
        {
          title: "Offer",
          checkBoxes: [
            {
              name: "Consulting + Software",
              value: "Consulting + Software",
            },
            {
              name: "Consulting + Software + Cloud",
              value: "Consulting + Software + Cloud",
            },
            {
              name: "Consulting + Software + Hardware",
              value: "Consulting + Software + Hardware",
            },
          ],
          limit_by: 4,
        },
        {
          title: "Specialization",
          checkBoxes: [
            {
              name: "Agricultural economics",
              value: "Agricultural economics",
            },
            {
              name: "Audio industry",
              value: "Audio industry",
            },
            {
              name: "Automotive",
              value: "Automotive",
            },
            {
              name: "Construction industry",
              value: "Construction industry",
            },
            {
              name: "Life science",
              value: "Life science",
            },
            {
              name: "Electrical engineering",
              value: "Electrical engineering",
            },
            {
              name: "Energy",
              value: "Energy",
            },
            {
              name: "Business processes",
              value: "Business processes",
            },
            {
              name: "Healthcare",
              value: "Healthcare",
            },
            {
              name: "High - Tech",
              value: "High - Tech",
            },
            {
              name: "Property management",
              value: "Property management",
            },
            {
              name: "Infrastructur",
              value: "Infrastructur",
            },
            {
              name: "Internet of Things App",
              value: "Internet of Things App",
            },
            {
              name: "Communication",
              value: "Communication",
            },
            {
              name: "Logistics",
              value: "Logistics",
            },
            {
              name: "Aerospace",
              value: "Aerospace",
            },
            {
              name: "Mechanical engineering",
              value: "Mechanical engineering",
            },
            {
              name: "Public sector",
              value: "Public sector",
            },
            {
              name: "Production",
              value: "Production",
            },
            {
              name: "Utilities",
              value: "Utilities",
            },
            {
              name: "Defense",
              value: "Defense",
            },
            {
              name: "Virtual Reality / Argumented Reality",
              value: "Virtual Reality / Argumented Reality",
            },
          ],
          limit_by: 4,
        },
        {
          title: "Country",
          checkBoxes: [
            {
              name: "Australia",
              value: "Australia",
            },
            {
              name: "Germany",
              value: "Germany",
            },
            {
              name: "France",
              value: "France",
            },
            {
              name: "Switzerland",
              value: "Switzerland",
            },
            {
              name: "United States",
              value: "United States",
            },
          ],
          limit_by: 4,
        },
        {
          title: "Range of functions",
          checkBoxes: [
            {
              name: "Aftermarket services",
              value: "Aftermarket services",
            },
            {
              name: "Acoustic simulation",
              value: "Acoustic simulation",
            },
            {
              name: "Data Sharing",
              value: "Data Sharing",
            },
            {
              name: "Data analysis & system solution",
              value: "Data analysis & system solution",
            },
            {
              name: "Design",
              value: "Design",
            },
            {
              name: "Digital Engeenering",
              value: "Digital Engeenering",
            },
            {
              name: "Digital factory",
              value: "Digital factory",
            },
            {
              name: "Digital building management",
              value: "Digital building management",
            },
            {
              name: "Digitalization of business processes",
              value: "Digitalization of business processes",
            },
            {
              name: "Enterprise Information Management",
              value: "Enterprise Information Management",
            },
            {
              name: "Artificial intelligence",
              value: "Artificial intelligence",
            },
            {
              name: "Machine Learning",
              value: "Machine Learning",
            },
            {
              name: "Product-Lifecycle-Management",
              value: "Product-Lifecycle-Management",
            },
            {
              name: "Robotics",
              value: "Robotics",
            },
            {
              name: "Visualization / Simulation",
              value: "Visualization / Simulation",
            },
          ],
          limit_by: 4,
        },
        {
          title: "Operation of the cloud",
          checkBoxes: [
            {
              name: "Customer",
              value: "Customer",
            },
            {
              name: "Company",
              value: "Company",
            },
            {
              name: "Company or Customer",
              value: "Company or Customer",
            },
          ],
          limit_by: 4,
        },
      ],
      defaultSelectFilters: [
        {
          name: "cloud_optmiert",
          value: [
            { lable: "Yes", id: "Yes" },
            { lable: "No", id: "No" },
            { lable: "n.A.", id: "n.A." },
          ],
        },
        {
          name: "wird_der_software_betrieb_angebote",
          value: [
            { lable: "Yes", id: "Yes" },
            { lable: "No", id: "No" },
          ],
        },
        {
          name: "noCode_plattform",
          value: [
            { lable: "Yes", id: "Yes" },
            { lable: "No", id: "No" },
          ],
        },
        {
          name: "erstellungszeitpunkt",
          value: [
            { lable: "Before physical twin", id: "Before physical twin" },
            {
              lable: "After physical twin",
              id: "After physical twin",
            },
          ],
        },
      ],
      selectFilters: [
        {
          name: "cloud_optmiert",
          value: [
            { lable: "Yes", id: "Yes" },
            { lable: "No", id: "No" },
            { lable: "n.A.", id: "n.A." },
          ],
        },
        {
          name: "wird_der_software_betrieb_angebote",
          value: [
            { lable: "Yes", id: "Yes" },
            { lable: "No", id: "No" },
          ],
        },
        {
          name: "noCode_plattform",
          value: [
            { lable: "Yes", id: "Yes" },
            { lable: "No", id: "No" },
          ],
        },
        {
          name: "erstellungszeitpunkt",
          value: [
            { lable: "Before physical twin", id: "Before physical twin" },
            {
              lable: "After physical twin",
              id: "After physical twin",
            },
          ],
        },
      ],
      show: true,
      default_limit: 4,
      selectedTags: [],
      selectedOptions: [
        {
          name: "cloud_optmiert",
          value: null,
        },
        {
          name: "wird_der_software_betrieb_angebote",
          value: null,
        },
        {
          name: "noCode_plattform",
          value: null,
        },
        {
          name: "erstellungszeitpunkt",
          value: null,
        },
      ],
    };
  },

  watch: {
    filterPro: function name() {
      this.filterCount();
    },
  },

  methods: {
    getSelectValues() {
      setTimeout(() => {
        let elements = document.getElementsByClassName("vs__selected");

        let results = [];

        for (let i = 0; i < elements.length; i++) {
          let element = elements[i];

          let strSel = element.innerText;
          results.push(strSel);
        }
        this.selectedOptions = results;
      }, 1000);
    },

    dynamic_toggle(fIndex) {
      let currentFilter = this.filters[fIndex];
      let dl = this.default_limit;
      this.filters[fIndex].limit_by =
        currentFilter.limit_by === dl ? currentFilter.checkBoxes.length : dl;
    },

    ApplyFilter() {
      setTimeout(() => {
        if (
          this.selectedTags.length > 0 ||
          this.selectedOptions[0].value != null ||
          this.selectedOptions[1].value != null ||
          this.selectedOptions[2].value != null ||
          this.selectedOptions[3].value != null
        ) {
          let allFilters = this.selectedTags.concat({
            selectedOptions: this.selectedOptions,
          });

          this.$emit("filters", allFilters);
        } else {
          const empty = [];

          this.$emit("filters", empty);
        }
      }, 200);
    },

    reset() {
      this.selectedTags = [];
      this.selectedOptions.forEach((e) => {
        e.value = null;
      });

      const empty = [];

      this.$emit("filters", empty);
    },

    filterCount() {
      this.defaultFilters.forEach((fl, flIndex) => {
        fl.checkBoxes.forEach((cb, cbIndex) => {
          let name = [cb.name];

          let found = this.filterPro.filter((pro) => {
            const tags = [
              pro.angebot,
              pro.land,
              pro.wo_wird_cloud_lösung_betrieben,
              pro.können_weitere_systeme_angebunden_werden,
            ].concat(pro.spezialisierung, pro.funktionsumfang);
            return name.some((f) => tags.includes(f));
          });

          let num = found.length;

          let newName = `${cb.name} (${num})`;

          this.filters[flIndex].checkBoxes[cbIndex].name = newName;
        });
      });

      this.defaultSelectFilters.forEach((sl, shIndex) => {
        if (sl.name === "cloud_optmiert") {
          sl.value.forEach((val, valIndex) => {
            const opt = this.filterPro.filter(function (pro) {
              return pro.cloud_optmiert === val.id;
            });

            let num = opt.length;

            let newLable = `${val.lable} (${num})`;

            this.selectFilters[shIndex].value[valIndex].lable = newLable;
          });
        } else if (sl.name === "wird_der_software_betrieb_angebote") {
          sl.value.forEach((val, valIndex) => {
            const opt = this.filterPro.filter(function (pro) {
              return pro.wird_der_software_betrieb_angebote === val.id;
            });

            let num = opt.length;

            let newLable = `${val.lable} (${num})`;

            this.selectFilters[shIndex].value[valIndex].lable = newLable;
          });
        } else if (sl.name === "noCode_plattform") {
          sl.value.forEach((val, valIndex) => {
            const opt = this.filterPro.filter(function (pro) {
              return pro.noCode_plattform === val.id;
            });

            let num = opt.length;

            let newLable = `${val.lable} (${num})`;

            this.selectFilters[shIndex].value[valIndex].lable = newLable;
          });
        } else if (sl.name === "erstellungszeitpunkt") {
          sl.value.forEach((val, valIndex) => {
            const opt = this.filterPro.filter(function (pro) {
              return pro.erstellungszeitpunkt === val.id;
            });

            let num = opt.length;

            let newLable = `${val.lable} (${num})`;

            this.selectFilters[shIndex].value[valIndex].lable = newLable;
          });
        }
      });
    },
  },
};
</script>

<style scoped>
.action-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem !important;
}

.action-header {
  color: rgb(116, 116, 116);
}

.action-header button {
  background-color: transparent;
  border: 1px solid #868e96;
  color: #868e96;
  padding: 0.6rem 0.8rem;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s;
  outline: none;
  display: block;
  margin-right: 10px;
}

.action-header button i.fa-sliders-h {
  margin-right: 10px;
}

.action-header button i.fa-sort-down {
  margin-left: 10px;
}

.action-header button:hover {
  background-color: #868e96;
  color: #fff;
}

.filters-form {
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  flex-wrap: wrap;
}

.filter-item {
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.125);
}

.filter-title {
  color: rgb(116, 116, 116);
  font-size: 16px;
  padding: 12px 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
}

.filter-body {
  padding: 20px;
}

.filter-body ul {
  list-style: none;
  padding: 0px;
  margin: 0px;
}

.filter-body ul li {
  margin: 0.4rem 0px;
  display: block;
}

.checkbox {
  display: inline-grid;
  grid-template-columns: -webkit-min-content auto;
  grid-template-columns: min-content auto;
  grid-gap: 0.5em;
  font-size: 15px;
  color: rgb(116, 116, 116);
}
.checkbox--disabled {
  color: #959495;
}

.checkbox__control {
  display: inline-grid;
  width: 1em;
  height: 1em;
  border-radius: 0.25em;
  border: 0.1em solid currentColor;
}
.checkbox__control svg {
  transition: transform 0.1s ease-in 25ms;
  transform: scale(0);
  transform-origin: bottom left;
}

.checkbox__input {
  display: grid;
  grid-template-areas: "checkbox";
}
.checkbox__input > * {
  grid-area: checkbox;
}
.checkbox__input input {
  opacity: 0;
  width: 1em;
  height: 1em;
}
.checkbox__input input:focus + .checkbox__control {
  box-shadow: 0 0 0 0.05em #fff, 0 0 0.15em 0.1em currentColor;
}
.checkbox__input input:checked + .checkbox__control svg {
  transform: scale(1);
}
.checkbox__input input:disabled + .checkbox__control {
  color: #959495;
}

.toggle_btn {
  text-decoration: none;
  font-size: 15px;
  margin-top: 6px;
  color: #000;
  transition: all 0.3s;
  display: inline-block;
}

.toggle_btn:hover {
  color: #e10707;
}

.submit-btn,
.rest-btn {
  display: block;
  width: 100%;
  max-width: 300px;
  padding: 10px 20px;
  background-color: #000;
  border: 0px;
  border-radius: 0px;
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s;
  margin-bottom: 15px;
  margin: 0px 10px;
}

.rest-btn {
  background-color: rgb(53, 53, 53);
}

.submit-btn:hover,
.rest-btn:hover {
  background-color: #e10707;
}

.filter-buttons {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 20px auto 0px;
}
</style>
