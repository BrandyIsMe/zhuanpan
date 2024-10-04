<template>
  <div class="task-item">
    <div class="task-item-top">
      <h3>移动端小程序前端开发</h3>
      <span>紧急</span>
    </div>
    <dl>
      <dt>
        <h5>任务预算</h5>
        <strong>¥1000</strong>
      </dt>
      <dt>
        <h5>任务周期</h5>
        <strong>90天</strong>
      </dt>
      <dt>
        <h5>服务方式</h5>
        <strong>驻场</strong>
      </dt>
    </dl>
    <p>
      任务要求：混合开发小程序，与后端对接接口，有2年以上web前端开发经验，能够独立开展web前端开发工作...
    </p>
    <div class="task-item-bottom">
      <label>北京驻场无忧科技有限公司</label>
      <span><van-icon name="location-o" />北京</span>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.task-item {
  background: #fff;
  border-radius: 0.53rem;
  margin: 0 0.64rem 0.53rem;
  position: relative;
  font-size: 0.69rem;
  font-family: PingFang SC;
  font-weight: 100;
  color: #666;
  .task-item-top {
    display: flex;
    h3 {
      font-size: 0.91rem;
      font-weight: 400;
      color: #333;
      line-height: 0.91rem;
      margin-bottom: 1.01rem;
    }
    span{
        position: absolute;
        height: 1.08rem;
        width: 2.29rem;
        right: 0;
        background: linear-gradient(90deg, #fea829 , #fe8f27);
        border-radius: 0.53rem 0 0 0.53rem;
        text-align: center;
        color: #fff;
        line-height: 1.07rem;
        font-size: 0.5rem;
    }
  }
}
</style>
