<template>
  <dl @click="handleClick" v-if="route.path !== '/login'">
    <dt v-for="item in tabArr" :key="item.title">
      <i v-bind="item"></i>
      <p
        v-bind="item"
        :class="route.path === item['data-path'] ? 'active' : ''"
      >
        {{ item.title }}
      </p>
    </dt>
  </dl>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const tabArr: any = [
  {
    "data-task": "任务",
    title: "任务",
    "data-path": "/task",
  },
  {
    "data-task": "合约",
    title: "合约",
    "data-path": "/contract",
  },
  {
    "data-task": "消息",
    title: "消息",
    "data-path": "/message",
  },
  {
    "data-task": "我的",
    title: "我的",
    "data-path": "/my",
  },
];
const route = useRoute();
const router = useRouter();
const tabFlag = ref("任务");
const handleClick = (event: Event) => {
  if (!!(event.target as HTMLElement).dataset.task) {
    tabFlag.value = (event.target as HTMLElement).dataset.task || "任务";
    router.push((event.target as HTMLElement).dataset.path || "/");
  }
};
</script>

<style lang="less" scoped>
dl {
  display: flex;
  width: 100%;
  height: 3rem;
  position: fixed;
  bottom: 0px;
  left: 0px;
  border-top: 1px solid #ddd;
  justify-content: space-around;
  background: #fff;

  dt {
    padding: 0.69rem 0;
    text-align: center;
    font-size: 0.59rem;
    font-family: PingFang SC;
    font-weight: 400;
    color: #666;

    i {
      width: 0.91rem;
      height: 0.91rem;
      display: block;
      margin: 0 auto;
      background: red;
      border-radius: 20%;
    }

    .active {
      color: #ff9415;
    }
  }
}
</style>
