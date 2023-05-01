<script setup>
import { computed } from 'vue';

const props = defineProps({
  percentage: {
    type: Number,
    required: true,
  }
});

const status = computed(() => {
  if (0 < props.percentage && props.percentage <= 30) return 'warning';
  if (props.percentage === 100) return 'success';
  else return 'default';
});

</script>

<template>

  <el-card>
    <template #header>
      진행 상태
    </template>

    <div class="learning-status__content"> 

      <el-progress 
        type="dashboard" 
        :percentage="percentage"
        :status="status"
      >
        <template #default="{ percentage }">
          <span>{{ percentage }}%</span>
        </template>
      </el-progress>

    </div>

  </el-card>

</template>
