import { createRouter, createWebHistory } from 'vue-router'
import LauncherView from '@/views/LauncherView'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'LauncherView',
      component: LauncherView,
    },
    {
      path: '/about',
      name: 'AboutView',
      component: () => import('@/views/AboutView'),
    },
    {
      path: '/setting',
      name: 'SettingView',
      component: () => import('@/views/SettingView'),
    },
    {
      path: '/scan',
      name: 'ScanView',
      component: () => import('@/views/ScanView'),
    },
    {
      path: '/copy',
      name: 'CopyView',
      component: () => import('@/views/CopyView'),
    },
  ],
})

export default router
