import { createRouter, createWebHistory } from 'vue-router'
import LauncherView from '@/views/LauncherView'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'launcher',
      component: LauncherView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutView'),
    },
    {
      path: '/setting',
      name: 'setting',
      component: () => import('@/views/SettingView'),
    },
    {
      path: '/scan',
      name: 'scan',
      component: () => import('@/views/ScanView'),
    },
    {
      path: '/copy',
      name: 'copy',
      component: () => import('@/views/CopyView'),
    },
  ],
})

export default router
