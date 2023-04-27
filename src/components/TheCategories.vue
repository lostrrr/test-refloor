<template>
  <div
    v-for="category in categories"
    :key="category.name"
    @click="$emit('selectCategory', category)"
    class="category mx-auto mt-3"
  >
    <div class="category__text">{{ category.title }}</div>
    <div class="category__img">
      <img
        :src="require(`@/assets/img/${category.src}`)"
        alt="img"
        class="img-thumbnail mx-auto d-block"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "TheCategories",
  props: {
    categories: {
      type: Object,
      required: true,
    },
  },
  emits: ["selectCategory"],
};
</script>

<style scoped>
.category {
  width: 250px;
  height: 230px;
  position: relative;
  cursor: pointer;
}
.category__text {
  position: absolute;
  z-index: 2;
  top: 76%;
  left: 35%;
  color: #fff;
  font-size: 18px;
}
</style>
