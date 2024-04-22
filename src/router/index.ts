import { createRouter, createWebHistory } from 'vue-router'

const home = () => import('../views/home/index.vue')
const blog = () => import('../views/blog/index.vue')
// const chat = () => import('../views/videochat/index.vue')
const chatp2p = () => import('../views/videochat/chatp2p.vue')
// const detail = () => import('../views/detail/index.vue')
// const notFound = () => import('../views/404/index.vues')

const article = () => import('../views/blog/article/index.vue')
const archive = () => import('../views/blog/archive/index.vue')

const router = createRouter({
  history: createWebHistory(''),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      meta: {
        title: '主页'
      },
      component: home
    },
    // {
    //   path: '/chat',
    //   name: 'chat',
    //   meta: {
    //     title: '聊天'
    //   },
    //   component: chat
    // },
    {
      path: '/chatp2p',
      name: 'chatp2p',
      meta: {
        title: '聊天p2p'
      },
      component: chatp2p
    },
    {
      path: '/blog',
      name: 'blog',
      meta: {
        title: '博客'
      },
      component: blog,
      redirect: '/blog/article',
      children: [
        {
          path: '/blog/article',
          name: 'article',
          component: article
        },
        {
          path: '/blog/archive',
          name: 'archive',
          component: archive
        }
      ]
    },
    // {
    //   path: '/detail',
    //   name: 'detail',
    //   meta: {
    //     title: '详情页'
    //   },
    //   component: detail
    // },
    // {
    //   path: '/:pathMatch(.*)*',
    //   name: '404',
    //   meta: {
    //     title: '404'
    //   },
    //   component: notFound
    // }
  ]
})

export default router
