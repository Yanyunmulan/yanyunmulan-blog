<template>
  <div id="app">
    <router-view v-slot="{ Component }">
      <transition :name="transitionName">
        <keep-alive :exclude="['detail']">
          <component :is="Component" />
        </keep-alive>
      </transition>
    </router-view>
  </div>
</template>



<script setup lang="ts">
  import { ref } from 'vue';
// import emitter from './utils/mitt'

// const route = useRoute()
// const isTransition = ref<boolean>(false) //初始不开启动画
  const transitionName = ref<string>() //过渡动画名
// const lastPath = ref<string>()
</script>



<style>
* {
  padding: 0;
  margin: 0;
}
/* #app {
  width: 100%;
} */
body {
  /* 避免动画过程中出现水平方向的滚动条 */
  overflow: hidden;
  /* 禁止选中 */
  user-select: none;
  /* 禁止移动端点击出现蓝色背景 */
  -webkit-tap-highlight-color: transparent;
  font-family: 'JetBrainsMono-Regular';
}

.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  position: absolute;
  transition: transform 0.5s;
}

.slide-right-enter-from,
.slide-left-leave-to {
  transform: translateX(100%);
}

.slide-right-leave-to,
.slide-left-enter-from {
  transform: translateX(-100%);
}
</style>