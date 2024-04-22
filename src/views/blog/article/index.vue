<template>
    <articleDetails></articleDetails>
    <div class="wrapper" v-infinite-scroll="load" :infinite-scroll-distance="200" :infinite-scroll-disabled="false" @scroll="scrollHandler">
        <div class="nav">
            <div class="nav-item nav-active">推荐</div>
            <div class="nav-item">穿搭</div>
            <div class="nav-item">美食</div>
            <div class="nav-item">影视</div>
            <div class="nav-item">摄影</div>
            <div class="nav-item">职场</div>
            <div class="nav-item">家居</div>
            <div class="nav-item">旅行</div>
            <div class="nav-item">健身</div>
        </div>
        <div class="article">
            <!-- <el-empty description="暂无内容" v-if="blogList.length == 0 && loading != true" class="empty" /> -->
            <el-skeleton :loading="loading" animated>
                <articleItem v-for="list in noteList"
                    :avatar="list.note_card.user.avatar" 
                    :img-src="list.note_card.cover.info_list[1].url"
                    :like-num="list.note_card.interact_info.liked_count"
                    :username="list.note_card.user.nickname"
                    :title="list.note_card.display_title"
                    @select="selectCard"
                    ></articleItem>
                
                <!-- <articleItem></articleItem>
                <articleItem></articleItem>
                <articleItem></articleItem>
                <articleItem></articleItem>
                <articleItem></articleItem>
                <articleItem></articleItem> -->


            </el-skeleton>
        </div>
        <back-top target=".wrapper"> </back-top>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref,onMounted } from 'vue';
  import { storeToRefs } from 'pinia'
  
  import articleItem from './article-item.vue'
  import articleDetails from './article-details.vue';
//   import apiBlog from '../../../api/modules/blog'
//   import { useBlogStore } from '@/stores/modules/blog'
  import emitter from '../../../utils/mitt'
  import { throttle } from '../../../utils/common'

  

//   import blogListMock from '../../../data/blogList'
  import redNote from '../../../data/redNoteItems'
import { useCardStore } from '../../../stores/modules/cardState';


const store = useCardStore()
const { selected, unselect } = storeToRefs(store)
const { selectCard, unselectCard } = store



//   const router = useRouter()
  const loading = ref<boolean>(true)
//   const noteList = ref<Note.redNoteItem[]>([])
  // const total = ref<number>(0)
  // const activeName = ref('first')

//   const blogStore = useBlogStore()


const noteList = ref({})
  
  onMounted(() => {
    getBlogList()
  })


  
  /**
   * 监听滚动：关闭header和config
   */
  const scrollHandler = throttle(function () {
    emitter.emit('pullupBlogConfig')
    emitter.emit('pullupHeader')
  }, 3000)
  
  /**
   * 初始化博客列表
   */
  async function getBlogList() {
    // const res = await apiBlog.getBlogList(blogStore.blogQueryConfig)
    // blogList.value = res.data.blogList
    // total.value = res.data.total
    // loading.value = false

        // change
    const res = redNote
    // console.log(res.data.items[0])
    
    noteList.value = res.data.items
    console.log(noteList.value)
    // total.value = res.data.total
    loading.value = false
  }
  
  /**
   * 分页监听
   */
  function load() {
    // blogStore.blogQueryConfig.pageNum += 1
    getMoreBlog()
  }
  
  /**
   * 分页加载
   */
  async function getMoreBlog() {
    // const res = await apiBlog.getBlogList(blogStore.blogQueryConfig)
    // blogList.value.push(...res.data.blogList)
    // const res = await apiBlog.getBlogList(blogStore.blogQueryConfig)



    // const res = blogListMock
    // console.log('gerMore')
    // blogList.value.push(...res[1].data.blogList)

  }
  
  /**
   * 监听BlogConfig组件的博客信息已配置事件
   */
//   emitter.on('blogConfigChanged', () => {
//     //重置页数
//     blogStore.blogQueryConfig.pageNum = 1
//     //获取新数据
//     getBlogList()
//   })
  
  /**
   * 查看详情处理函数
   */
//   function viewDetailHandler(blogId: string) {
//     router.push({ path: '/detail', query: { blogId } })
//   }
  </script>
  
  <style lang="scss" scoped>
  .wrapper {
    box-sizing: border-box;
    margin: 0 0.625rem 0.625rem;
    max-height: 100vh;
    overflow: auto;
  
    &::-webkit-scrollbar {
      width: 0;
    }
  }

  .nav {
    width: 100%;
    height: 60px;
    background-color: #ffffff;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .nav-item {
    margin-left: 10px;
    height: 40px;
    width: 66px;
    color: #545454;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 999px;
    cursor: pointer;
  }

  .nav-item:hover {
    background-color: #f1f1f1;
  }

  .nav-active {
    background-color: #f1f1f1;
    font-weight: 500;
  }









  
  .article {
    // display: flex;
    // flex-direction: row;
    gap: 0.8rem;
    // padding-bottom: 0.8rem;
    background-color: #fff;
    // flex-wrap: wrap;
    // align-items: flex-start;
    // justify-content: center;
    columns: 3; // 默认列数
    // column-gap: 0.8rem; // 列间距
    // margin: 0 auto; // 剧中
    padding-left: 10px;
    
    
  }
  
  .article__item {
    // display: grid;
    // flex-direction: column;
    // justify-content: center;
    // padding: 10px;
    // height: 250px;
    // box-sizing: border-box;
    // background-color: #fff;
    // box-shadow: var(--boxShadow);
    // cursor: pointer;
    
  
    // &:nth-child(even) {
    //   .content {
    //     flex-direction: row-reverse;
    //   }
    //   .info {
    //     padding-right: 0;
    //     padding-left: 15px;
    //   }
    // }
  }
  
  .title {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 4rem;
    height: 20%;
    color: var(--blog-article-item-title-color);
  
    span {
      display: -webkit-box;
      overflow: hidden;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      text-overflow: ellipsis;
      font-size: 18px;
      font-weight: bold;
    }
  }
  
  .content {
    display: flex;
    height: 80%;
  
    .info {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-right: 15px;
  
      .icon {
        font-size: 20px;
      }
  
      .details {
        height: 28%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        color: #a8a8a8;
  
        div {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 0.3rem;
          height: 1.5rem;
          font-size: 16px;
          border-bottom: 1px dashed #a8a8a8;
          font-weight: bold;
        }
  
        .sticky {
          color: #c51e3a;
          border-color: #c51e3a;
        }
  
        .notOriginal {
          color: #ed9121;
          border-color: #ed9121;
        }
      }
  
      .abs {
        align-self: flex-start;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 1rem;
        height: 44%;
        width: 100%;
        box-sizing: border-box;
        span {
          display: -webkit-box;
          overflow: hidden;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 4;
          text-overflow: ellipsis;
          word-wrap:break-word;
          word-break:break-all;
          font-size: 16px;
          color: #6d6d6d;
        }
      }
  
      .data {
        align-self: flex-end;
        display: flex;
        align-items: center;
        gap: 1rem;
        padding-right: 15px;
        height: 28%;
        color: #a1a1a1;
  
        div {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 0.3rem;
          font-size: 16px;
        }
      }
    }
  
    .cover {
      box-sizing: border-box;
  
      :deep(.el-image) {
        /* width: 264px; **/
        height: 180px;
        border-radius: 5px;
      }
    }
  }
  
  .empty {
    background-color: var(--blog-article-item-bg);
  }
  
  /**
   * ————————————————————响应式——————————————————————
   */
  

  @media screen and (max-width: 1024px) {
    .wrapper {
      margin: 0.5rem;
      max-height: calc(100vh - 80px);
    }
  }
  

  @media screen and (max-width: 770px) {
    .article__item {
      height: 230px;
      padding: 10px;
      box-shadow: none;
  
      &:nth-child(even) {
        .info {
          padding-right: 0;
          padding-left: 15px;
        }
      }
    }
  
    .article {
      gap: 0.625rem;
      padding-bottom: 1rem;
    }
  
    .title {
      padding: 0 4rem;
    }
  
    .content {
      .info {
        padding-right: 10px;
  
        .icon {
          font-size: 16px;
        }
  
        .details {
          div {
            height: 1.6rem;
            font-size: 15px;
          }
        }
        .abs {
          padding: 0 0.8rem;
          span {
            -webkit-line-clamp: 4;
            font-size: 15px;
          }
        }
        .data {
          padding-right: 15px;
          div {
            font-size: 15px;
          }
        }
      }
      .cover {
        :deep(.el-image) {
          width: 240px;
        }
      }
    }
  }
  

  @media screen and (max-width: 650px) {
    .article__item {
      height: 210px;
      padding: 10px;
  
      &:nth-child(even) {
        .info {
          padding-right: 0;
          padding-left: 10px;
        }
      }
    }
  
    .title {
      padding: 0 4rem;
      span {
        font-size: 17px;
      }
    }
  
    .content {
      .info {
        padding-right: 10px;
        .details {
          div {
            font-size: 15px;
          }
        }
        .abs {
          padding: 0 0.6rem;
          span {
            -webkit-line-clamp: 4;
            font-size: 15px;
          }
        }
        .data {
          padding-right: 15px;
          div {
            font-size: 15px;
          }
        }
      }
      .cover {
        padding: 10px 0;
        :deep(.el-image) {
          width: 198px;
        }
      }
    }
  }

  @media screen and (max-width: 550px) {
    .article__item {
      height: 190px;
      padding: 10px;
  
      &:nth-child(even) {
        .info {
          padding-right: 0;
          padding-left: 5px;
        }
      }
    }
  
    .title {
      padding: 0 3rem;
      span {
        font-size: 16px;
      }
    }
  
    .content {
      .info {
        padding-right: 5px;
  
        .icon {
          font-size: 14px;
        }
        .details {
          div {
            font-size: 15px;
          }
        }
        .abs {
          padding: 0 0.5rem;
          span {
            -webkit-line-clamp: 3;
            font-size: 15px;
          }
        }
        .data {
          padding-right: 15px;
          div {
            font-size: 15px;
          }
        }
      }
      .cover {
        padding: 10px 0;
        :deep(.el-image) {
          width: 174px;
        }
      }
    }
  }
  

  @media screen and (max-width: 450px) {
    .article__item {
      height: 150px;
      padding: 5px;
  
      &:nth-child(even) {
        .info {
          padding-right: 0;
          padding-left: 5px;
        }
      }
    }
  
    .title {
      padding: 0 2.5rem;
      span {
        font-size: 15px;
      }
    }
  
    .content {
      .info {
        padding-right: 5px;
        .details {
          div {
            font-size: 11px;
          }
        }
        .abs {
          span {
            -webkit-line-clamp: 3;
            font-size: 13px;
          }
        }
        .data {
          padding-right: 15px;
          div {
            font-size: 13px;
          }
        }
      }
      .cover {
        padding: 10px 0;
        :deep(.el-image) {
          width: 141px;
        }
      }
    }
  }
  </style>
  