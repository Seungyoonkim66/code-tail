import { createRouter, createWebHistory } from 'vue-router';
import isAuth from './middlewares/isAuth';

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login'),
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/Register'),
  },
  {
    beforeEnter: [isAuth],
    path: '',
    component: () => import('@/App.vue'),
    children: [
      {
        path: 'main',
        name: 'main',
        component: () => import('@/layouts/BaseLayout.vue'),
        children: [],
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

export default router;
