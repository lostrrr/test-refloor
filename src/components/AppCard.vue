<template>
  <div class="col mt-3">
    <div class="card catalog__card h-100" style="width: 12rem">
      <img :src="card.src" class="card-img-top catalog__card__img" alt="card" />
      <div class="card-body">
        <p class="card-text">
          {{ card.title }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppCard",
  props: {
    card: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.catalog__card {
  margin: 0 auto;
}
.catalog__card__img {
  height: 12rem;
}
</style>
