<template>
    <div class="navigation">
      <div v-for="(item, index) in navItems" :key="index" @click="handleClick(index)">
        <router-link :to="item.path" class="navigation__item">
          <!-- <Icon :icon="item.icon" class="icon"></Icon>
          <Icon icon="iconamoon:check-bold" class="active-icon" color="#960018"></Icon> -->
            <el-icon>
                <component :is="item.icon"/>
                <Edit />
            </el-icon>
          <span>&nbsp;&nbsp;&nbsp;{{ item.name }}</span>
        </router-link>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import emitter from '../../../utils/mitt'
  
  const navigationActive = ref()
  const navItems = [
    { name: '主页', path: '/home', icon: 'system-uicons:home-alt' },
    { name: '博客', path: '/blog/article', icon: 'system-uicons:document-stack' },
    { name: '归档', path: '/blog/archive', icon: 'system-uicons:flip-view' }
  ]
  
  /**
   * 导航点击处理函数
   */
  function handleClick(index: number) {
    navigationActive.value = index
    //触发：关闭header
    emitter.emit('pullupHeader')
  }
  </script>
  
  <style lang="scss" scoped>
  .navigation {
    display: flex;
    flex-direction: column;
    background-color: #fff;
  }
  
  .navigation__item {
    position: relative;
    display: flex;
    align-items: center;
    height: 40px;
    padding-left: 1rem;
    color: var(--blog-nav-color);
    font-size: 14px;
    text-decoration: none;
    &:hover {
      background-color: var(--blog-nav-hover-bg);
    }
  
    &.router-link-active {
      .active-icon {
        display: block;
      }
    }
  
    .icon {
      position: relative;
      top: -1px;
      padding: 0 0.8rem;
      font-size: 1.1rem;
    }
  
    .active-icon {
      display: none;
      position: absolute;
      right: 12%;
      font-size: 1.5rem;
      animation: scale 0.4s forwards;
    }
  
    @keyframes scale {
      40% {
        transform: scale(1.3);
      }
      100% {
        transform: scale(1);
      }
    }
  }
  
  /**
   * ——————————————————响应式——————————————————
   */
  

  @media screen and (max-width: 1024px) {
    .navigation {
      padding: 0 1rem;
      gap: 5px;
  
      .navigation__item {
        border: 1px solid var(--blog-nav-border);
        border-radius: 5px;
  
        .icon {
          font-size: 1.5rem;
        }
  
        .active-icon {
          font-size: 2.5rem;
        }
      }
    }
  }
  </style>
  