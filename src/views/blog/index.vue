<template>
    <div class="mask" v-if="selected" @click="unselectCard">
      <button class="closeButtion" v-if="selected" @click="unselectCard">*</button>
    </div>


    
    <div class="blog">        
      <div class="header">
        <div class="logo">
          <p>Yanyunmulan</p>
        </div>
        <div class="search"></div>
        <div class="more"></div>
      </div>


      <div class="main">
          <div class="main_nav"></div>

          <div class="content">

            <div class="router-view">
              <router-view v-slot="{ Component }">
                <keep-alive>
                  <component :is="Component" />
                </keep-alive>
              </router-view>
            </div>

          </div>

      </div>
        
        <!-- <header class="header" :class="{ 'header--active': headerActive }">
          <div class="header__inner">
            <div class="inner__block">
              <div class="reactive-header">
                <div class="switch" @click="headerActive = !headerActive">
                  <div>
                    <span class="switch__icon"></span>
                    <span class="switch__icon"></span>
                    <span class="switch__icon"></span>
                  </div>
                </div>
                <div class="logo">
                  <p>Yanyunmulan</p>
                </div>
                <theme-switch class="theme-switch-header" width="2rem" style="--theme-switch-color: white"></theme-switch>
              </div>
              <blog-config></blog-config>
              <blog-navigation></blog-navigation>
            </div>
            <div class="inner__block">
              <user-info></user-info>
            </div>
          </div>
        </header> -->

      
    </div>












      <!-- <theme-switch class="theme-switch-blog" width="1.7rem"></theme-switch> -->

  </template>

<script setup lang="ts">
import { ref } from 'vue';
import BlogConfig from './BlogConfig/index.vue'
import BlogNavigation from './BlogNavigation/index.vue'
import UserInfo from './UserInfo/index.vue'
import emitter from '../../utils/mitt'

const headerActive = ref<boolean>(false)

/**
 * 监听：关闭header
 */
emitter.on('pullupHeader', () => {
  headerActive.value = false
})



import { storeToRefs } from 'pinia'
import { useCardStore } from '../../stores/modules/cardState';

const store = useCardStore()
const { selected, unselect } = storeToRefs(store)
const { selectCard, unselectCard } = store



</script>

<style lang="scss" scoped>
.mask {
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(2px); /* 调整模糊程度 */
  background-color: rgba($color: #ffffff, $alpha: 0.2);
  z-index: 2;


  .closeButtion {
    position: absolute;
    left: 20px;
    top: 20px;
    border-radius: 999px;
  }
}


.blog {
  width: 100%;
  min-height: 100vh;

  background-color: #ebebeb; 
  overflow: hidden;
}



.header {
  position: sticky;
  top: 0;
  height: 80px;
  background-color: #fff;


  .logo {
  font-size: 1.5rem;
  position: relative;
  left: 30px;
  top: 20px;

  }

  /**
   * switch的动画：
   * 位移直接过渡，过渡时间为0.2s。
   * 旋转等待位移过渡完成，等待时间为0.2s 过渡时间为0.1s
   */

  // &.header--active {
  //   /** 这里的高度需要大于头部内容总高度，从而通过max-height实现不定高过渡动画 */ 
  //   max-height: 720px;

  //   .switch__icon:nth-child(1) {
  //     transform: translateY(8px);
  //     transition: transform 0.2s ease !important;
  //   }
  //   .switch__icon:nth-child(1)::before {
  //     transform: rotate(45deg);
  //     transition: transform 0.1s ease 0.2s !important;
  //   }
  //   .switch__icon:nth-child(2) {
  //     opacity: 0 !important;
  //   }
  //   .switch__icon:nth-child(3) {
  //     transform: translateY(-8px);
  //     transition: transform 0.2s ease !important;
  //   }
  //   .switch__icon:nth-child(3)::before {
  //     transform: rotate(-45deg);
  //     transition: transform 0.1s ease 0.2s !important;
  //   }
  // }
}





.main {
  margin: 0 auto;
  width: 100%;
  // background-color: aquamarine;
  display: flex;
  flex-direction: row;
  justify-content: center;



  .main_nav {
    // position: absolute;
    // top: 80px;
    // left: 0;
    width: 300px;
    height: 100px;
    background: #935353;
  }

  .content {
    width: 900px;
  }

}

























// .header__inner {
//   width: 240px;
// }

// .inner__block {
//   margin-bottom: 10px;
//   padding-bottom: 5px;
//   background-color: var(--blog-block-backgorund);
//   box-shadow: var(--boxShadow);
// }

// .reactive-header {
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   height: 130px;
//   color: #fff;
//   background-color: #1f1f1f;
//   border-bottom: 5px solid var(--blog-header-border);
//   box-sizing: border-box;

//   .switch {
//     position: absolute;
//     display: none;

//     left: 20px;
//     width: 40px;
//     height: 40px;
//     cursor: pointer;

//     .switch__icon {
//       display: block;
//       padding: 3px 0;
//       transition: transform 0.2s ease 0.1s;
//     }

//     .switch__icon:nth-child(2) {
//       opacity: 1;
//       transition: opacity 0.2s ease 0.1s;
//     }

//     .switch__icon::before {
//       content: '';
//       display: block;
//       width: 28px;
//       height: 2px;
//       border-radius: 2px;
//       background-color: #fff;
//       transition: transform 0.1s ease;
//     }
//   }
// }



// .router-view {
//   margin-left: 240px;
// }

// .theme-switch-header {
//   display: none;
//   position: absolute;
//   padding: 1rem;
//   transform: translateY(0.25rem);
//   right: 1rem;
// }

// .theme-switch-blog {
//   position: absolute;
//   padding: 1rem;
//   top: 1rem;
//   right: 1rem;
// }

/**
 * —————————————— 响应式 ——————————————
 */


// @media screen and (max-width: 1100px) {

//   .content {
//     width: 1024px;
//   }
// }

// @media screen and (max-width: 1024px) {

//   .content {
//     width: 100%;
//   }


//   .header {
//     height: auto;
//     max-height: 80px;
//     overflow: hidden;
//     transition: max-height 0.5s;
//   }

//   .header__inner {
//     width: 100%;
//   }

//   .inner__block {
//     margin-bottom: 0;
//     box-shadow: none;
//   }

//   .reactive-header {
//     height: 80px;
//     .switch {
//       display: flex;
//       align-items: center;
//       justify-content: center;
//     }
//   }

//   .router-view {
//     margin-left: 0;
//   }

//   .theme-switch-header {
//     display: block;
//   }

//   .theme-switch-blog {
//     display: none;
//   }
// }
</style>