<script setup>
defineProps({
  width: {
    type: String,
    required: false,
  },
  title: {
    type: String,
    required: false,
  },
});
</script>

<template>
  <div 
    class="codetail-card"
    :style="{
      '--codetail-card-width': width ?? 'auto'
    }"
  >

    <div 
      v-if="title"
      class="codetail-card__title"
    >
      {{ title }}
    </div>

    <div class="codetail-card__content">
      <slot/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.codetail-card {
  box-shadow: 0 0 2px #c6c6c7;
  border-radius: 2px;
  width: var(--codetail-card-width);

  &__title {
    border-bottom: 1px solid #eaeaea;
    padding: 0.5rem 1rem;
  }

  &__content {
    padding: 1rem;
    font-size: 0.9rem;
  }
}
</style>
