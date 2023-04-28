<template>
  <router-view />
</template>

<script>
export default {
  name: "App",
  created() {
    this.$store.dispatch("fetchCategories");
    this.$store.dispatch("fetchAllGoods");
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
  color: #000;
}
</style>
