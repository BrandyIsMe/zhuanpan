<template>
  <div class="task-list-container">
    <!-- <TaskList /> -->
    <van-button class="btn" type="primary" is-link @click="showPopup" >点击打开</van-button>
    <van-popup v-model:show="show" :style="{ padding: '64px' }">
        
    </van-popup>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
// import TaskList from '@/components/list/TaskList.vue';
const show = ref(false);
const showPopup = () => {
  show.value = true;
};
</script>

<style lang="less" scoped>
.task-list-container {
  width: 100%;
  height: calc(100vh - 3rem);
  display: flex;
  justify-content: center;
  align-items: center;
  .btn{
    font-size: .8rem;
    width: 6rem;
    height: 2rem;
  }
}
</style>
