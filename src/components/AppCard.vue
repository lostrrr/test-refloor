<template>
  <div class="col mt-3">
    <div class="card catalog__card h-100" style="width: 18rem">
      <img :src="card.src" class="card-img-top" alt="card" />
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

<style scoped></style>
