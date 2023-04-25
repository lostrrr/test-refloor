<template>
  <section class="catalog">
    <div class="container">
      <div class="catalog__wrapper">
        <div class="row">
          <template v-for="card in cards" :key="card.id">
            <AppCard :card="card" />
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AppCard from "./AppCard.vue";
export default {
  name: "TheCatalog",
  components: { AppCard },
  data() {
    return {
      cards: [],
    };
  },
  methods: {
    getResource: async (url) => {
      const res = await fetch(url, {
        method: "GET",
      });
      const body = await res.json();
      return body;
    },
    getQuery() {
      this.getResource("https://moscow.fargospc.ru/test/json/")
        .then((body) => {
          this.cards = body;
        })
        .catch((err) => {
          console.error("Could not fetch", err);
        });
    },
  },
  created() {
    this.getQuery();
  },
};
</script>

<style scoped></style>
