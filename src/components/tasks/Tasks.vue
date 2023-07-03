<template>
  <div class="card mt-2" v-if="getData.length && showData">
    <ul class="list-group list-group-flush">
      <Task v-for="task in getData" :task="task" :key="task.id" />
    </ul>
  </div>
</template>

<script setup>
import Task from "../tasks/Task.vue";
defineProps({
  getData: Array,
  showData: {
    type: Boolean,
    default: true,
  },
});
</script>
