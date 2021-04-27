<template>
  <div class="filters">
    <div class="action-header">
      <button @click="show = !show">
        <i class="fas fa-sliders-h"></i>
        <span>Filteroptionen zur Auswahl</span>
      </button>
      {{ pagiInfo }}
      <!-- <button>
        <span>Sortierung: ID</span> <i class="fas fa-sort-down"></i>
      </button> -->
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
                {{ filter.limit_by === 4 ? "+ mehr" : "- weniger" }}
              </a>
            </ul>
          </div>
        </div>
      </template>

      <div class="filter-item">
        <div class="filter-title">Cloud - Lösung</div>
        <div class="filter-body">
          <v-select
            class="filtetr-select"
            placeholder="Bitte auswählen"
            label="lable"
            :reduce="(lable) => lable.id"
            :options="selectFilters[0].value"
            v-model="selectedOptions[0].value"
          ></v-select>
        </div>
      </div>

      <div class="filter-item">
        <div class="filter-title">Betrieb der Software</div>
        <div class="filter-body">
          <v-select
            class="filtetr-select"
            placeholder="Bitte auswählen"
            label="lable"
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
            placeholder="Bitte auswählen"
            label="lable"
            :reduce="(lable) => lable.id"
            :options="selectFilters[2].value"
            v-model="selectedOptions[2].value"
          ></v-select>
        </div>
      </div>

      <div class="filter-item">
        <div class="filter-title">Erstellungszeitpunkt</div>
        <div class="filter-body">
          <v-select
            class="filtetr-select"
            placeholder="Bitte auswählen"
            label="lable"
            :reduce="(lable) => lable.id"
            :options="selectFilters[3].value"
            v-model="selectedOptions[3].value"
          ></v-select>
        </div>
      </div>
    </div>
    <div class="filter-buttons">
      <button @click="ApplyFilter" class="submit-btn" v-show="show">
        Filter anwenden
      </button>
      <button @click="reset" class="rest-btn" v-show="show">
        Filter zurücksetzen
      </button>
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
          title: "Angebot",
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
          title: "Spezalisierung",
          checkBoxes: [
            {
              name: "Agrarwirtschaft",
              value: "Agrarwirtschaft",
            },
            {
              name: "Audiobranche",
              value: "Audiobranche",
            },
            {
              name: "Automobil",
              value: "Automobil",
            },
            {
              name: "Baubranche",
              value: "Baubranche",
            },
            {
              name: "Biowissenschaft",
              value: "Biowissenschaft",
            },
            {
              name: "Elektrotechnik",
              value: "Elektrotechnik",
            },
            {
              name: "Energie",
              value: "Energie",
            },
            {
              name: "Geschäftsprozesse",
              value: "Geschäftsprozesse",
            },
            {
              name: "Gesundheitswesen",
              value: "Gesundheitswesen",
            },
            {
              name: "High - Tech",
              value: "High - Tech",
            },
            {
              name: "Immobilienmanagement",
              value: "Immobilienmanagement",
            },
            {
              name: "Infrastruktur",
              value: "Infrastruktur",
            },
            {
              name: "Internet of Things App",
              value: "Internet of Things App",
            },
            {
              name: "Kommunikation",
              value: "Kommunikation",
            },
            {
              name: "Logistik",
              value: "Logistik",
            },
            {
              name: "Luft- & Raumfahrt",
              value: "Luft- & Raumfahrt",
            },
            {
              name: "Maschinen- & Anlagenbau",
              value: "Maschinen- & Anlagenbau",
            },
            {
              name: "Öffentlicher Sektor",
              value: "Öffentlicher Sektor",
            },
            {
              name: "Produktion",
              value: "Produktion",
            },
            {
              name: "Versorgungswirtschaft",
              value: "Versorgungswirtschaft",
            },
            {
              name: "Verteidigung",
              value: "Verteidigung",
            },
            {
              name: "Virtual Reality / Argumented Reality",
              value: "Virtual Reality / Argumented Reality",
            },
          ],
          limit_by: 4,
        },
        {
          title: "Land",
          checkBoxes: [
            {
              name: "Australien",
              value: "Australien",
            },
            {
              name: "Deutschland",
              value: "Deutschland",
            },
            {
              name: "Frankreich",
              value: "Frankreich",
            },
            {
              name: "Schweiz",
              value: "Schweiz",
            },
            {
              name: "United States",
              value: "United States",
            },
          ],
          limit_by: 4,
        },
        {
          title: "Funktionsumfang",
          checkBoxes: [
            {
              name: "Aftermarket-Dienstleistungen",
              value: "Aftermarket-Dienstleistungen",
            },
            {
              name: "Akkustische Simulation",
              value: "Akkustische Simulation",
            },
            {
              name: "Data Sharing",
              value: "Data Sharing",
            },
            {
              name: "Datenanalyse & Systemlösung",
              value: "Datenanalyse & Systemlösung",
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
              name: "Digitale Fabrik",
              value: "Digitale Fabrik",
            },
            {
              name: "Digitales Gebäudemanagemnt",
              value: "Digitales Gebäudemanagemnt",
            },
            {
              name: "Digitalisierung von Geschäftsprozessen",
              value: "Digitalisierung von Geschäftsprozessen",
            },
            {
              name: "Enterprise Information Management",
              value: "Enterprise Information Management",
            },
            {
              name: "Künstliche Intelligenz",
              value: "Künstliche Intelligenz",
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
              name: "Robotik",
              value: "Robotik",
            },
            {
              name: "Visualisierung / Simulation",
              value: "Visualisierung / Simulation",
            },
          ],
          limit_by: 4,
        },
        {
          title: "Betrieb der Cloud",
          checkBoxes: [
            {
              name: "Kunden",
              value: "Kunden",
            },
            {
              name: "Unternehmen",
              value: "Unternehmen",
            },
            {
              name: "Unternehmen oder Kunden",
              value: "Unternehmen oder Kunden",
            },
          ],
          limit_by: 4,
        },
      ],
      filters: [
        {
          title: "Angebot",
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
          title: "Spezalisierung",
          checkBoxes: [
            {
              name: "Agrarwirtschaft",
              value: "Agrarwirtschaft",
            },
            {
              name: "Audiobranche",
              value: "Audiobranche",
            },
            {
              name: "Automobil",
              value: "Automobil",
            },
            {
              name: "Baubranche",
              value: "Baubranche",
            },
            {
              name: "Biowissenschaft",
              value: "Biowissenschaft",
            },
            {
              name: "Elektrotechnik",
              value: "Elektrotechnik",
            },
            {
              name: "Energie",
              value: "Energie",
            },
            {
              name: "Geschäftsprozesse",
              value: "Geschäftsprozesse",
            },
            {
              name: "Gesundheitswesen",
              value: "Gesundheitswesen",
            },
            {
              name: "High - Tech",
              value: "High - Tech",
            },
            {
              name: "Immobilienmanagement",
              value: "Immobilienmanagement",
            },
            {
              name: "Infrastruktur",
              value: "Infrastruktur",
            },
            {
              name: "Internet of Things App",
              value: "Internet of Things App",
            },
            {
              name: "Kommunikation",
              value: "Kommunikation",
            },
            {
              name: "Logistik",
              value: "Logistik",
            },
            {
              name: "Luft- & Raumfahrt",
              value: "Luft- & Raumfahrt",
            },
            {
              name: "Maschinen- & Anlagenbau",
              value: "Maschinen- & Anlagenbau",
            },
            {
              name: "Öffentlicher Sektor",
              value: "Öffentlicher Sektor",
            },
            {
              name: "Produktion",
              value: "Produktion",
            },
            {
              name: "Versorgungswirtschaft",
              value: "Versorgungswirtschaft",
            },
            {
              name: "Verteidigung",
              value: "Verteidigung",
            },
            {
              name: "Virtual Reality / Argumented Reality",
              value: "Virtual Reality / Argumented Reality",
            },
          ],
          limit_by: 4,
        },
        {
          title: "Land",
          checkBoxes: [
            {
              name: "Australien",
              value: "Australien",
            },
            {
              name: "Deutschland",
              value: "Deutschland",
            },
            {
              name: "Frankreich",
              value: "Frankreich",
            },
            {
              name: "Schweiz",
              value: "Schweiz",
            },
            {
              name: "United States",
              value: "United States",
            },
          ],
          limit_by: 4,
        },
        {
          title: "Funktionsumfang",
          checkBoxes: [
            {
              name: "Aftermarket-Dienstleistungen",
              value: "Aftermarket-Dienstleistungen",
            },
            {
              name: "Akkustische Simulation",
              value: "Akkustische Simulation",
            },
            {
              name: "Data Sharing",
              value: "Data Sharing",
            },
            {
              name: "Datenanalyse & Systemlösung",
              value: "Datenanalyse & Systemlösung",
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
              name: "Digitale Fabrik",
              value: "Digitale Fabrik",
            },
            {
              name: "Digitales Gebäudemanagemnt",
              value: "Digitales Gebäudemanagemnt",
            },
            {
              name: "Digitalisierung von Geschäftsprozessen",
              value: "Digitalisierung von Geschäftsprozessen",
            },
            {
              name: "Enterprise Information Management",
              value: "Enterprise Information Management",
            },
            {
              name: "Künstliche Intelligenz",
              value: "Künstliche Intelligenz",
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
              name: "Robotik",
              value: "Robotik",
            },
            {
              name: "Visualisierung / Simulation",
              value: "Visualisierung / Simulation",
            },
          ],
          limit_by: 4,
        },
        {
          title: "Betrieb der Cloud",
          checkBoxes: [
            {
              name: "Kunden",
              value: "Kunden",
            },
            {
              name: "Unternehmen",
              value: "Unternehmen",
            },
            {
              name: "Unternehmen oder Kunden",
              value: "Unternehmen oder Kunden",
            },
          ],
          limit_by: 4,
        },
      ],
      defaultSelectFilters: [
        {
          name: "cloud_optmiert",
          value: [
            { lable: "Ja", id: "Ja" },
            { lable: "Nein", id: "Nein" },
            { lable: "n.A.", id: "n.A." },
          ],
        },
        {
          name: "wird_der_software_betrieb_angebote",
          value: [
            { lable: "Ja", id: "Ja" },
            { lable: "Nein", id: "Nein" },
          ],
        },
        {
          name: "noCode_plattform",
          value: [
            { lable: "Ja", id: "Ja" },
            { lable: "Nein", id: "Nein" },
          ],
        },
        {
          name: "erstellungszeitpunkt",
          value: [
            { lable: "Vor physischen Zwilling", id: "Vor physischen Zwilling" },
            {
              lable: "Nach physischen Zwilling",
              id: "Nach physischen Zwilling",
            },
          ],
        },
      ],
      selectFilters: [
        {
          name: "cloud_optmiert",
          value: [
            { lable: "Ja", id: "Ja" },
            { lable: "Nein", id: "Nein" },
            { lable: "n.A.", id: "n.A." },
          ],
        },
        {
          name: "wird_der_software_betrieb_angebote",
          value: [
            { lable: "Ja", id: "Ja" },
            { lable: "Nein", id: "Nein" },
          ],
        },
        {
          name: "noCode_plattform",
          value: [
            { lable: "Ja", id: "Ja" },
            { lable: "Nein", id: "Nein" },
          ],
        },
        {
          name: "erstellungszeitpunkt",
          value: [
            { lable: "Vor physischen Zwilling", id: "Vor physischen Zwilling" },
            {
              lable: "Nach physischen Zwilling",
              id: "Nach physischen Zwilling",
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

          console.log(name[0]);

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
