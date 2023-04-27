<template>
  <section class="catalog">
    <div class="container">
      <div class="catalog__wrapper">
        <div>
          <input
            type="checkbox"
            id="plinth"
            value="plinth"
            v-model="checkedItems"
          />
          <label for="plinth">Плинтус</label>
          <input
            type="checkbox"
            id="laminate"
            value="laminate"
            v-model="checkedItems"
          />
          <label for="laminate">Ламинат</label>
          <input
            type="checkbox"
            id="overlay"
            value="overlay"
            v-model="checkedItems"
          />
          <label for="overlay">Подложка</label>
        </div>
        <div class="row">
          <template v-for="card in selectedCategory" :key="card.id">
            <AppCard :card="card" />
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AppCard from "./AppCard.vue";
import { getCatalog } from "@/api/api";
export default {
  name: "TheCatalog",
  components: { AppCard },
  data() {
    return {
      cards: [],
      categories: [],
      checkedItems: [],
    };
  },
  computed: {
    selectedCategory() {
      return this.checkedItems
        .map((category) => this.categories[category])
        .flat();
    },
  },
  created() {
    getCatalog().then((categories) => (this.categories = categories));
  },
};
</script>

<style scoped></style>
