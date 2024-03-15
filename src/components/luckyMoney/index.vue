<template>
  <img
    class="luckyMoney"
    ref="luckyMoneyRef"
    @click="onclickHandle"
    @dragstart="disableDrag"
    v-bind="$attrs"
    src="../../assets/luckyMoney.png"
    alt=""
  />
</template>
<script setup lang="ts">
import { onMounted, reactive, ref } from "vue";

const props = defineProps({
  clickCallback: {
    type: Function,
    default: () => {},
  },
});

const luckyMoneyRef = ref<HTMLElement>();

const disableDrag = (event: Event) => {
      event.preventDefault();
    }

// 下落轨道
const orbit = reactive([0, 15, 35, 55, 75]);
// 下落轨道随机位置
const left = `${orbit[Math.round(Math.random() * 4)]}vw`;
// 下落持续时间
const animationDuration = `${Math.random() * 3 + 2}s`;
/**
 * 红包点击事件
 */
const onclickHandle = () => {
  destroy();
  props.clickCallback && props.clickCallback();
};
/**
 * 销毁红包
 */
const destroy = () => {
  luckyMoneyRef.value?.remove();
};
/**
 * 定时销毁红包
 */
const destroyByTime = (second: number) => {
  //     销毁图片
  setTimeout(() => {
    destroy();
  }, second * 1000);
};
onMounted(() => {
  //    定时销毁
  destroyByTime(Number(animationDuration.slice(0, -1)));

});
</script>

<style scoped lang="less">
.luckyMoney {
  position: absolute;
  top: -100px;
  left: v-bind(left);
  width: 100px;
  animation: drop 2s linear;
  animation-duration: v-bind(animationDuration);
}

@keyframes drop {
  0% {
    transform: translate3d(0, -20vh, 0) rotate(15deg);
  }
  100% {
    transform: translate3d(0, 120vh, 0) rotate(30deg);
  }
}
</style>
