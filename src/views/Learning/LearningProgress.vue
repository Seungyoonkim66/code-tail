<script setup>
import { computed } from 'vue';
import Card from '@/components/Card';

const props = defineProps({
  percentage: {
    type: Number,
    required: true,
  }
});

const status = computed(() => {
  if (0 < props.percentage && props.percentage <= 30) return 'warning';
  if (props.percentage === 100) return 'success';
  else return '';
});

</script>

<template>

  <Card
    title="진행 상태"
    width="50%"
  >

    <el-progress 
      type="dashboard" 
      :percentage="percentage"
      :status="status"
    >
      <template #default="{ percentage }">
        <span>{{ percentage }}%</span>
      </template>
    </el-progress>

  </Card>

</template>
