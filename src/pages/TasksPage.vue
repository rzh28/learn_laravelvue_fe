<template>
  <main style="min-height: 50vh; margin-top: 2rem">
    <div class="container">
      <div class="row">
        <div class="col-md-8 offset-md-2">
          <!-- Add new Task -->
          <div class="relative">
            <input
              type="text"
              class="form-control form-control-lg padding-right-lg"
              placeholder="+ Add new task. Press enter to save."
            />
          </div>
          <!-- List uncomplated -->
          <Tasks :getData="unComplatedTask" />
          <!-- togle -->
          <div class="text-center my-3" v-show="showToggleCompletedBtn">
            <button
              class="btn btn-sm btn-secondary"
              @click="($event) => (showCompletedTask = !showCompletedTask)"
            >
              <span v-if="!showCompletedTask">show completed</span>
              <span v-else>hide completed</span>
            </button>
          </div>
          <!-- List complated -->
          <Tasks
            :getData="ComplatedTask"
            :showData="completedTaskVisible && showCompletedTask"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import {
  getTasks,
  createTasks,
  updateTasks,
  removeTasks,
  byIdTasks,
  complateTasks,
} from "../http/tasks";
import Tasks from "../components/tasks/Tasks.vue";

const getData = ref([]);
onMounted(async () => {
  const { data } = await getTasks();
  getData.value = data.data;
  console.log(data);
});

const unComplatedTask = computed(() =>
  getData.value.filter((task) => !task.is_completed)
);
const ComplatedTask = computed(() =>
  getData.value.filter((task) => task.is_completed)
);
const showToggleCompletedBtn = computed(
  () => unComplatedTask.value.length > 0 && ComplatedTask.value.length > 0
);
const completedTaskVisible = computed(
  () => unComplatedTask.value.length === 0 || ComplatedTask.value.length > 0
);
const showCompletedTask = ref(false);
</script>
