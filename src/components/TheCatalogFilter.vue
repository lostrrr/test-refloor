<template>
  <div class="mb-3 catalog__filter text-center">
    <label for="catalogFilter" class="form-label">ПОИСК В КАТЕГОРИИ:</label>
    <input
      :value="filter"
      @input="$emit('update:filter', $event.target.value)"
      type="text"
      class="form-control"
      id="catalogFilter"
      placeholder=""
    />
  </div>
</template>

<script>
export default {
  name: "TheCatalogFilter",
  props: {
    filter: String,
  },
  emits: ["update:filter"],
};
</script>

<stylescoped>

</stylescoped>
