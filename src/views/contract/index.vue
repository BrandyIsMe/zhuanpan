<template>
  <div class="page-container">
    <div class="wheel-container">
      <div class="wheel" ref="wheel">
        <div class="sector" v-for="item in degNumer" :key="item.id"><span class="text" v-html="item.render"></span></div>
      </div>

      <div class="lights">
        <div
          class="light"
          v-for="n in 13"
          :class="{ 'is-active': lightSwitch }"
          :key="n"
        ></div>
        <div class="start-container">
          <div class="start-index"></div>
          <div class="start" @click="startLottery">立即<br />抽奖</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from "vue";
const around = ref(360);
const aroundStr = ref(around.value + "deg");
const transitionSeconds = ref("8s");
const wheel = ref();
const lightSwitch = ref(false);
const randomIndex = ref(-1);
const degNumer = [
  {
    id:0,
    deg: 288,
    render:"iphone16",
    title: "iphone16",
  },
  {
    id:1,
    deg: 216,
    render:"Mac<br> 电脑",
    title: "Mac电脑",
  },
  {
    id:2,
    deg: 144,
    render:"比特币一枚",
    title: "比特币一枚",
  },
  {
    id:3,
    deg: 72,
    render:"红包5000",
    title: "红包5000",
  },
  {
    id:4,
    deg: 0,
    render:"谢谢<br>参与",
    title: "谢谢参与",
  },
]; // 每个指针旋转需要的度数

const transitionendFun = () => {
  lightSwitch.value = false;
  around.value = 360 + degNumer[randomIndex.value].deg;
  transitionSeconds.value = "none";
  alert(`恭喜你抽中${randomIndex.value}号---${degNumer[randomIndex.value].title}`)
  wheel.value.removeEventListener("transitionend", transitionendFun);
};

const startLottery = () => {
  if (lightSwitch.value)  return 
  transitionSeconds.value = "8s";
  randomIndex.value = generateRandomNumber()
  around.value = around.value * 20 + degNumer[randomIndex.value].deg;
  lightSwitch.value = true;
  wheel.value.addEventListener("transitionend", transitionendFun);
};

//控制开奖率
const generateRandomNumber  = ()=>{
  let randomNumber = Math.random();
  if (randomNumber < 0.8) { 
    return degNumer.length - 1; 
  } else {
    return Math.floor(Math.random() * degNumer.length);
  }
}

watchEffect(() => {
  aroundStr.value = around.value + "deg";
});
</script>

<style lang="less" scoped>
.page-container {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.wheel-container {
  position: relative;
  width: 650px;
  height: 650px;
  background: linear-gradient(0deg, #7c1e0a, #d7521a);
  border-radius: 50%;

  .wheel {
    position: absolute;
    left: 25px;
    top: 25px;
    width: 600px;
    height: 600px;
    border-radius: 50%;
    overflow: hidden;
    transform: rotate(v-bind(aroundStr));
    transition: transform v-bind(transitionSeconds);
    box-sizing: border-box;

    .sector {
      position: absolute;
      width: 100%;
      height: 100%;
      clip-path: polygon(50% 50%, 100% 0, 100% 100%);
      .text {
        position: absolute;
        left: 75%;
        top: 38%;
        font-size: 40px;
        color: #fff;
      }

      &:nth-child(1) {
        transform: rotate(0deg);
        background-color: #198a4a;
        .text {
          transform: translate(20px, 20px) rotate(90deg);
        }
      }
      &:nth-child(2) {
        transform: rotate(72deg);
        background-color: #3ea5ef;
        .text {
          transform: translate(20px, 5px) rotate(80deg);
        }
      }
      &:nth-child(3) {
        transform: rotate(144deg);
        background-color: #a000f1;
        .text {
          transform: translate(20px, 0px) rotate(80deg);
        }
      }
      &:nth-child(4) {
        transform: rotate(216deg);
        background-color: #e42726;
        .text {
          transform: translate(20px, 0px) rotate(80deg);
        }
      }
      &:nth-child(5) {
        transform: rotate(288deg);
        background-color: #fc8622;

        .text {
          transform: translate(20px, 0px) rotate(80deg);
        }
      }
    }
  }

  .lights {
    position: absolute;
    width: 100%;
    height: 100%;
    // background: #000;
    border-radius: 50%;

    .light {
      width: 20px;
      height: 20px;
      background: rgb(190, 183, 183);
      border-radius: 50%;
      position: absolute;
      transition: background-color 0.5s;

      &:nth-child(1) {
        top: 3.7%;
        left: 31%;
      }

      &:nth-child(2) {
        top: 1%;
        left: 55%;
      }

      &:nth-child(3) {
        top: 10.8%;
        left: 78%;
      }

      &:nth-child(4) {
        top: 32%;
        left: 93.5%;
      }

      &:nth-child(5) {
        top: 57%;
        left: 96%;
      }

      &:nth-child(6) {
        top: 81%;
        left: 84%;
      }

      &:nth-child(7) {
        top: 81%;
        left: 84%;
      }

      &:nth-child(8) {
        top: 94.8%;
        left: 62%;
      }

      &:nth-child(9) {
        top: 95.5%;
        left: 38%;
      }

      &:nth-child(10) {
        top: 84%;
        left: 16%;
      }
      &:nth-child(11) {
        top: 60%;
        left: 2%;
      }

      &:nth-child(12) {
        top: 35%;
        left: 2.4%;
      }

      &:nth-child(13) {
        top: 15%;
        left: 14.2%;
      }
    }

    .light.is-active {
      &:nth-child(1) {
        animation: blink 1s infinite 0.2s;
      }

      &:nth-child(2) {
        animation: blink 1s infinite 0.4s;
      }

      &:nth-child(3) {
        animation: blink 1s infinite 0.8s;
      }

      &:nth-child(4) {
        animation: blink 1s infinite 1s;
      }

      &:nth-child(5) {
        animation: blink 1s infinite 1.2s;
      }

      &:nth-child(6) {
        animation: blink 1s infinite 1.4s;
      }

      &:nth-child(7) {
        animation: blink 1s infinite 1.6s;
      }

      &:nth-child(8) {
        animation: blink 1s infinite 1.8s;
      }

      &:nth-child(9) {
        animation: blink 1s infinite 2s;
      }

      &:nth-child(10) {
        animation: blink 1s infinite 2.2s;
      }
      &:nth-child(11) {
        animation: blink 1s infinite 2.4s;
      }

      &:nth-child(12) {
        animation: blink 1s infinite 2.8s;
      }

      &:nth-child(13) {
        animation: blink 1s infinite 3s;
      }
    }

    .start-container {
      position: absolute;
      width: 150px;
      height: 150px;
      border-radius: 50%;
      left: 250px;
      top: 250px;
      background: linear-gradient(0deg, #2d3130, #7c807f);

      .start {
        position: absolute;
        width: 120px;
        height: 120px;
        border-radius: 50%;
        left: 15px;
        top: 15px;
        background: linear-gradient(180deg, #fecf2d, #fc8622);
        color: #b20d13;
        font-size: 40px;
        text-align: center;
        font-weight: bold;
      }

      .start-index {
        position: absolute;
        width: 0;
        height: 0;
        top: -80px;
        left: 80px;
        border-left: 0px solid transparent;
        border-right: 30px solid transparent;
        border-bottom: 120px solid #f9b42b;
        &::before {
          content: "";
          position: absolute;
          width: 0;
          height: 0;
          border-left: 0px solid transparent;
          border-right: 30px solid transparent;
          border-bottom: 120px solid #ee7a20;
          transform: scaleX(-1) translateX(30px);
        }
      }
    }
  }
}

@keyframes blink {
  0% {
    background: rgb(190, 183, 183);
  }
  50% {
    background: rgb(248, 232, 2);
  }
  100% {
    background: rgb(190, 183, 183);
  }
}
</style>
