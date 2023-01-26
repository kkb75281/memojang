import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Hello from '../views/Hello.vue';
import Parent from '../views/Parent.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/hello',
      name: 'hello',
      component: Hello
    },
    {
      path: '/parent',
      name: 'parent',
      component: Parent,
      children: [
        {
          path: 'child',
          name: 'child',
          component: () => import('../views/Child.vue'),
          children: [
            {
              path: 'parent',
              name: 'nestedParent',
              component: Parent,
            }
          ]
        }
      ]
    }
  ]
});

export default router;
