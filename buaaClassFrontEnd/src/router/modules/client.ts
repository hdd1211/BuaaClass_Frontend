import { DashboardIcon } from 'tdesign-icons-vue-next';
import { shallowRef } from 'vue';

import Layout from '@/layouts/index.vue';

export default [
  {
    path: '/home/client',
    component: Layout,
    redirect: '/home/client',
    name: 'client',
    meta: {
      title: '用户管理',
      icon: shallowRef(DashboardIcon),
      orderNo: 0,
    },
    children: [
      {
        path: 'clientId',
        name: 'ClientId',
        component: () => import('@/pages/home/client/clientId/index.vue'),
        meta: {
          title: '用户信息',
        },
      },
      {
        path: 'clientId/detail',
        name: 'ClientDetail',
        component: () => import('@/pages/home/client/clientId/detail/index.vue'),
        // meta: {
        //   title: '用户详情',
        // },
      },
      {
        path: 'comment',
        name: 'Comment',
        component: () => import('@/pages/home/client/comment/index.vue'),
        meta: {
          title: '评论信息',
        },
      },
      {
        path: 'comment/detail',
        name: 'CommentDetail',
        component: () => import('@/pages/home/client/comment/detail/index.vue'),
        // meta: {
        //   title: '用户详情',
        // },
      },
    ],
  },
];
