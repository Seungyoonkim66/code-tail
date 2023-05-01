<script setup>
import { ref } from 'vue';
import LearningProgress from './LearningProgress.vue';
import LearningInfo from './LearningInfo.vue';
import LearningContent from './LearningContent.vue';

const statusPercentage = ref(35);
</script>

<template>
  <!-- REF: container라는 클래스는 style.scss 파일에 선언한 전역 클래스 -->
  <div class="learning container">

    <div class="learning__status">
      <LearningInfo />
      <LearningProgress :percentage="statusPercentage"/>
    </div>

    <LearningContent />
    
  </div>
</template>

<style scoped lang="scss">
.learning {
  display: flex;
  flex-direction: column;
  gap: 1rem;

  &__status {
    display: flex;
    gap: 1rem;
  }
}
</style>