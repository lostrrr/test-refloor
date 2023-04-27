<template>
  <section class="catalog">
    <div class="container">
      <div class="catalog__wrapper">
        <h1 class="text-center mt-3">КАТАЛОГ ПРОДУКЦИИ</h1>
        <div class="row mt-3">
          <TheCategories :categories="categories" @selectCategory="select" />
        </div>
        <TheCatalogFilter v-model:filter="filter" />
        <div class="row">
          <template v-for="card in filteredCategories" :key="card.id">
            <AppCard :card="card" />
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AppCard from "./AppCard.vue";
import TheCategories from "./TheCategories.vue";
import TheCatalogFilter from "./TheCatalogFilter.vue";
import { getCatalog, getAllGoods } from "@/api/api";
export default {
  name: "TheCatalog",
  components: { AppCard, TheCategories, TheCatalogFilter },
  data() {
    return {
      filter: "",
      cards: [],
      categories: [],
      allGoods: [],
      selectedCategory: [],
    };
  },
  computed: {
    loweredFilter() {
      return this.filter.toLowerCase();
    },
    filteredCategories() {
      return this.selectedCategory.filter((item) =>
        item.title.toLowerCase().includes(this.loweredFilter)
      );
    },
  },
  methods: {
    select(category) {
      this.selectedCategory =
        this.selectedCategory === category.cards ||
        this.selectedCategory === this.allGoods
          ? []
          : category?.showAll
          ? this.allGoods
          : category.cards;
    },
  },
  created() {
    getCatalog().then((categories) => (this.categories = categories));
    getAllGoods().then((goods) => (this.allGoods = goods));
  },
};
</script>

<style scoped></style>
