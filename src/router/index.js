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
        children: [
          {
            path: 'learning',
            name: 'learning',
            component: () => import('@/views/Learning'),
          },
          {
            path: 'coding',
            name: 'coding',
            component: () => import('@/views/Coding'),
          },
          {
            path: 'grading',
            name: 'grading',
            component: () => import('@/views/Grading'),
          },
          {
            path: 'levelTest',
            name: 'levelTest',
            component: () => import('@/views/LevelTest'),
          },
          {
            path: 'instructor',
            name: 'instructor',
            component: () => import('@/views/Instructor'),
          },        ],
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

export default router;
