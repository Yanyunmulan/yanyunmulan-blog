<template>
    
    
  <transition name="show" @enter="handleEnter" @leave="handleLeave">
    <div class="article-detail" v-if="selected">
        <div class="card_left">
            <img class="card_pic" :src="'https://images.weserv.nl/?url=' + selected.card.imgSrc" />
        </div>
        <div class="card_right">
            <div class="card_user">
                <div class="user">
                    <div class="avatar">      
                        <el-avatar :src="selected.card.avatar" size="big"/>
                    </div>
                    <div class="username">  
                        <el-text class="" size="big" truncated>
                            {{ selected.card.username }}
                        </el-text>
                    </div>                   
                </div>

                <div class="follow">关注</div>
            </div>
            <div class="card_main">
                <div class="card_title">
                    <h4>{{ selected.card.title }}</h4>
                </div>
                <div class="card_content">
                    <!-- 用富士XT30 II+XC35F2拍照已经一年多啦，大部分的照片都是这个组合拍的，和大家分享下使用感受～
                    为什么只用这颗镜头拍？ -->
                </div>
            </div>
            <div class="card_comments"></div>   
        </div>
        <div class="card_func"></div>
    </div>
  </transition>
</template>

<script setup lang="ts">

import { storeToRefs } from 'pinia'
import { useCardStore } from '../../../stores/modules/cardState';

const store = useCardStore()
const { selected, unselect } = storeToRefs(store)
const { selectCard, unselectCard } = store



function handleEnter (el) {
    Object.assign(el.style, {
        top: `${selected.value.rect.top}px`,
        left: `${selected.value.rect.left}px`,
        width: `${selected.value.rect.width}px`,
        height: `${selected.value.rect.height}px`,
        opacity: 0.4
    })
    setTimeout(() => {
    Object.assign(el.style, {
        top: '6%',
        left: '18%',
        width: `${selected.value.rect.appWidth}px`,
        height: `${selected.value.rect.appHeight}px`,
        opacity: 1
    })
    }, 0)
}
function handleLeave (el) {
    Object.assign(el.style, {
        top: '6%',
        left: '18%',
        width: `${unselect.value.rect.appWidth}px`,
        height: `${unselect.value.rect.appHeight}px`,
        opacity: 1
    })
    setTimeout(() => {
    Object.assign(el.style, {
        top: `${unselect.value.rect.top}px`,
        left: `${unselect.value.rect.left}px`,
        width: `${unselect.value.rect.width}px`,
        height: `${unselect.value.rect.height}px`,
        opacity: 0.4
    })
    }, 0)
}

</script>

<style scoped>
.article-detail {
    display: flex;
    position: absolute;
    /* background-color: rgb(161, 215, 242); */
    border-radius: 1.2rem;
    overflow: hidden; /* 避免边框圆角被子元素溢出 */

    backdrop-filter: blur(30px); /* 调整模糊程度 */
    background-color: rgba(255, 255, 255, 0.7); /* 用于示例的背景颜色 */

    z-index: 3;
}
.card_pic {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.card_left {
    flex: 1;
    /* 左侧宽度占据剩余空间 */
}
.card_right {
    flex: 0 0 46%; /* 右侧宽度固定为大div宽度的46% */

    display: flex;
    flex-direction: column; /* 设置主轴方向为垂直 */

}

.card_user {
    display: flex;
    flex-direction: row;
    /* background-color: aquamarine; */
    justify-content: space-between; /* 左右两端对齐，中间留有空间 */
    height:80px
}
.user {
    display: flex;
    flex-direction: row;    
}
.avatar {
    margin-left: 1em;
    margin-top: 1em;
}
.username {
    margin-left: 12px;
    margin-top: 30px;
}


.follow {
    display: flex;
    width: 90px;
    height: 40px;
    background-color: #ff2944;
    margin-right: 2px;
    border-radius: 20px;
    margin-right: 20px;
    margin-top: 20px;
    font-size: 16px;
    justify-content: center;
    align-items: center;
    color: #fff;
}






.card_main {
    /* background-color: rgb(127, 182, 255); */
    
}


.card_title {
    margin-top: -10px;
    margin-left: 20px;
    color: #2d2d2d;
    font-size: 18px
}
.card_content {
    margin-top: -10px;
    margin-left: 20px;
    margin-right: 16px;
    color: #2d2d2d;
    font-size: 16px
}







.card_comments {
    /* background-color: rgb(255, 255, 127); */
}






.show-enter-active,
.show-leave-active {
  transition: all 0.4s ease;
}
</style>