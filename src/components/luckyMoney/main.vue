<!-- <template>
    <div class="page-container">
      <button @click="handleStartActivity">开启活动</button>
      <div
        v-if="startActivity"
        class="redpack-rain-container"
        ref="luckyMoneyContainerRef"
      ></div>
  
      <div v-if="resultMoney" class="result-money-container">
        <div class="close" @click="handlClose">x</div>
        <div class="result-money">恭喜获得<span>100</span>元</div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { render, h, ref } from "vue";
  import LuckyMoney from "@/components/luckyMoney/index.vue";
  
  const luckyMoneyContainerRef = ref<HTMLImageElement>();
  // 持续时长 单位ms
  const duration = ref(5000);
  
  // 红包生成速率 单位ms  200ms生成一个红包
  const generationRate = ref(200);
  
  const startActivity = ref(false);
  
  //结束后获得金额弹窗
  const resultMoney = ref(false);
  
  function createLuckyMoney() {
    const container: HTMLDivElement = document.createElement("div");
    render(
      h(LuckyMoney, {
        clickCallback: clickLuckyMoneyCallback,
      }),
      container
    );
    const firstChild = container.firstElementChild;
  
    firstChild && luckyMoneyContainerRef.value?.appendChild(firstChild);
  }
  
  function createLuckyMoneyInterval(duration: number, timeInterval: number) {
    let timer: NodeJS.Timer | null = null;
  
    // 定时器开始时间
    const startTime = new Date().getTime();
  
    timer = setInterval(() => {
      // 获取当前时间戳
      const now = new Date().getTime();
  
  
      if (now - startTime >= duration) {
        resultMoney.value = true;
        // 清除定时器
        clearInterval(timer as NodeJS.Timer);
        timer = null;
      } else {
        // 创建红包
        createLuckyMoney();
      }
  
    }, timeInterval);
  }
  
  function clickLuckyMoneyCallback() {
    console.log("点击红包了");
  }
  
  const handleStartActivity = () => {
    startActivity.value = true;
    createLuckyMoneyInterval(duration.value, generationRate.value);
  };
  
  const handlClose = () => {
    resultMoney.value = false;
    startActivity.value = false;
  };
  </script>
  
  <style scoped lang="less">
  .page-container {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    button {
      width: 50%;
      height: 100px;
      background: #007bf5;
      border: none;
      border-radius: 15px;
      margin-top: 50px;
      color: #fff;
    }
  
    .redpack-rain-container {
      position: fixed;
      top: 0;
      width: 100vw;
      height: 100vh;
      overflow: hidden;
      background: linear-gradient(
        180deg,
        rgba(255, 215, 0, 1) 0%,
        rgba(255, 165, 0, 1) 100%
      );
    }
  
    .result-money-container {
      position: fixed;
      width: 100%;
      height: 100vh;
      background: rgba(42, 38, 38, 0.8);
      display: flex;
      justify-content: center;
      align-items: center;
  
      .close {
        position: absolute;
        font-size: 60px;
        top: 10px;
        right: 50px;
        color: #f6532d;
      }
      .result-money {
        width: 375px;
        height: 375px;
        background: url("@/assets/reward.png") no-repeat;
        background-size: contain;
        text-align: center;
        line-height: 200px;
        font-size: 25px;
        span {
          font-size: 50px;
          color: red;
        }
      }
    }
  }
  </style> -->