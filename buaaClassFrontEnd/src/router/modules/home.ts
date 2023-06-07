import { DashboardIcon } from 'tdesign-icons-vue-next';
import { shallowRef } from 'vue';
import { LogoutIcon } from 'tdesign-icons-vue-next';
import Layout from '@/layouts/index.vue';

export default [
  {
    path: '/loginRedirect',
    name: 'loginRedirect',
    redirect: '/login',
    // meta: { title: '登录页', icon: shallowRef(LogoutIcon) },
    component: () => import('@/layouts/blank.vue'),
    children: [
      {
        path: 'index',
        redirect: '/login',
        component: () => import('@/layouts/blank.vue'),
        // meta: { title: '登录中心' },
      },
    ],
  },
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
        name: 'Catalog',
        component: () => import('@/pages/home/catalog/index.vue'),
        meta: {
          title: '课程目录',
        },
      },
      {
        path: 'catalog/detail',
        name: 'ClassDetail',
        component: () => import('@/pages/home/catalog/detail/index.vue'),
        // meta: {
        //   title: '课程详情',
        // },
      },
      {
        path: 'catalog/addclass',
        name: 'AddClass',
        component: () => import('@/pages/home/catalog/addclass/index.vue'),
        // meta: {
        //   title: '新建课程',
        // },
      },
    ],
  },
];
