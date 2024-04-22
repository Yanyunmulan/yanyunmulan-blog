<template>
    <div class="item" @click="handleClick">
        <div class="item-pic" ref="cardRef">
            <img class="pic" :src="'https://images.weserv.nl/?url=' + imgSrc" />
        </div>
        <div class="bottom">
            <div class="title"><el-text class="mx-1 title-font">{{ title }}</el-text></div>
            <div class="info">
                <div class="info-left">

                    <div class="avatar">      
                        <el-avatar :src="avatar" size="small"/>
                    </div>
                    <div class="username">  
                        <el-text class="w-150px mb-2" size="small" truncated>
                            {{ username }}
                        </el-text>
                    </div>
                    

                </div>
                <div class="like">
                    <el-row>
                        <el-icon class="like-icon"><Star /></el-icon>
                        <el-text>{{ likeNum }}</el-text>
                    </el-row>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'


type Props = {
    title: String,
    avatar: String,
    username: String,
    likeNum: String,
    imgSrc: String
}

const props = defineProps<Props>()

const card = ref({
    title: props.title,
    avatar: props.avatar,
    username: props.username,
    likeNum: props.likeNum,
    imgSrc: props.imgSrc
});


const cardRef = ref(null);
// 通过defineEmits编译器宏生成emit方法
const emit = defineEmits(['select'])


onMounted(() => {
    // console.log(cardRef.value.getBoundingClientRect())
})





const handleClick = () => {
      // 获取 #app 元素和当前元素的位置信息
      const appRect = document.querySelector('#app').getBoundingClientRect();
      const elRect = cardRef.value.getBoundingClientRect();
    //   console.log(elRect)

      const rect = {}
      // 计算相对于 #app 元素的位置和尺寸
      rect.top = elRect.top - appRect.top
      rect.left = elRect.left - appRect.left
      rect.width = elRect.width / 0.54
      rect.height = elRect.height 
      // 存储 #app 元素的尺寸
      rect.appWidth = appRect.width*0.64
      rect.appHeight = appRect.height*0.88
      // 触发名为 'select' 的自定义事件，并传递矩形信息和卡片信息
      console.log('rect',rect)
      console.log('card',card)
      emit('select', { rect, card })
}


</script>

<style scoped>
.item {
    width: 250px;
    /* height: 360px; */
    background-color: #fff;
    border-radius: 0.8rem;
    border: 3px;
    padding-bottom: 10px;
    break-inside: avoid;
    
    /* background-color: transparent; */
}
.item-pic {
    position: relative;
    width: 250px;
   
    /* background-color: #666; */
    
    border-radius: 0.8rem;
    
    
}
.pic {
    width: 250px;
    object-fit: contain;
    border-radius: 0.8rem;
    border: 2px solid rgba(212, 212, 212, 0.4);
    cursor: pointer;
}
.pic:hover {
    filter: brightness(80%); /* 鼠标悬停时改变图片亮度，实现遮罩效果 */
}
.bottom {
    background-color: #fff;
    margin: 4px;
    margin-left: 10px;
    margin-right: 10px;
}
.title {
    width: 230px;
    
    
    font-weight: 500;
}
.title-font {
    color: black;
}
.info {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 10px;
}
.info-left {
    display: flex;
    flex-direction: row;
    /* justify-content: space-between; */
}
.avatar {
    margin-top: -4px;
}
.username {
    width: 120px;
    margin-left: 6px;
}
.like-icon {
    margin-top: 1px;
    margin-right: 2px;
}

</style>