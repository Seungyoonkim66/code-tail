<script setup>
</script>

<template>
  <el-card class="learning-info">
    <template #header>
      학습 정보
    </template>

    <div class="learning-info__content">
      학습 제목 및 설명
    </div>

  </el-card>
</template>

<style lang="scss" scoped>
.learning-info{
  width: 20rem;
  
  &__content {
    font-size: 0.9rem;
  }
}
</style>
