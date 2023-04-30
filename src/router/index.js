import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '',
    component: () => import('@/App.vue'),
    children: [
      {
        path: 'login',
        component: () => import('@/views/Login'),
      },
      {
        path: 'register',
        component: () => import('@/views/Register'),
      },
      {
        path: 'main',
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
