<template>
  <div class="switch-btn" @click="switchTheme">
    <!-- <Icon icon="line-md:moon-alt-to-sunny-outline-loop-transition" v-if="commonStore.theme == Theme.Light" v-bind="$attrs"></Icon>
    <Icon icon="line-md:sunny-filled-loop-to-moon-filled-loop-transition" v-if="commonStore.theme == Theme.Dark" v-bind="$attrs"></Icon> -->
    <p v-if="commonStore.theme == Theme.Light" v-bind="$attrs">1</p>
    
    <p v-if="commonStore.theme == Theme.Dark" v-bind="$attrs">2</p>
  </div>
</template>

<script setup lang="ts">
import { useCommonStore } from '../../stores/modules/common'
import { Theme } from '../../stores/modules/common'
import { ref, onMounted } from 'vue';
const commonStore = useCommonStore()

const html = ref<HTMLHtmlElement>()

onMounted(() => {
  html.value = document.querySelector('html')!
  changeHtmlThemeClass()
})

/**
 * 切换主题
 */
function switchTheme() {
  const currentTheme = commonStore.theme
  const newTheme = currentTheme === Theme.Light ? Theme.Dark : Theme.Light
  commonStore.theme = newTheme
  changeHtmlThemeClass()
  localStorage.setItem('theme', newTheme)
}

/**
 * switch html theme-calss
 */
function changeHtmlThemeClass() {
  
  if (commonStore.theme == Theme.Dark) {
    html.value!.className = 'dark'
  } else {
    html.value!.className = ''
  }
}
</script>

<style lang="scss" scoped>
.switch-btn {
  color: var(--theme-switch-color);
  transition: all 0.5s;
  cursor: pointer;
}
</style>
