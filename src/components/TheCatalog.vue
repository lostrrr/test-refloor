<template>
  <section class="catalog">
    <div class="container">
      <div class="catalog__wrapper">
        <h1 class="text-center mt-3">КАТАЛОГ ПРОДУКЦИИ</h1>
        <div class="row mt-3">
          <TheCategories :categories="categories" @selectCategory="select" />
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
import TheCategories from "./TheCategories.vue";
import { getCatalog, getAllGoods } from "@/api/api";
export default {
  name: "TheCatalog",
  components: { AppCard, TheCategories },
  data() {
    return {
      cards: [],
      categories: [],
      allGoods: [],
      selectedCategory: [],
    };
  },
  methods: {
    select(category) {
      category?.showAll
        ? (this.selectedCategory = this.allGoods)
        : (this.selectedCategory = category.cards);
    },
  },
  created() {
    getCatalog().then((categories) => (this.categories = categories));
    getAllGoods().then((goods) => (this.allGoods = goods));
  },
};
</script>

<style scoped></style>
