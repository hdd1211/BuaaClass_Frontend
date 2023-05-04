import { DashboardIcon } from 'tdesign-icons-vue-next';
import { shallowRef } from 'vue';

import Layout from '@/layouts/index.vue';

export default [
  {
    path: '/home',
    component: Layout,
    redirect: '/home/catalog',
    name: 'home',
    meta: {
      title: '课程页',
      icon: shallowRef(DashboardIcon),
      orderNo: 0,
    },
    children: [
      {
        path: 'catalog',
        name: 'HomeCatalog',
        component: () => import('@/pages/home/catalog/index.vue'),
        meta: {
          title: '课程目录',
        },
      },
      {
        path: 'detail',
        name: 'HomeDetail',
        component: () => import('@/pages/home/detail/index.vue'),
        // meta: {
        //   title: '课程详情',
        // },
      },
      {
        path: 'catalog/components/addclass',
        name: 'AddClass',
        component: () => import('@/pages/home/catalog/components/addclass/index.vue'),
        // meta: {
        //   title: '新建课程',
        // },
      },
    ],
  },
];
