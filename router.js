import { createRouter, createWebHistory } from 'vue-router';
import IndexPage from './src/components/pages/indexPage.vue';
import ResturantPage from './src/components/pages/ResturantPage.vue';
import PayementPage from './src/components/pages/PayementPage.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: IndexPage 
    },
    {
      path: '/resturant',
      name: 'resturant.index',
      component: ResturantPage
    },
    {
      path: '/payement',
      name: 'payement.index',
      component: PayementPage
    }
  ]
});

export {router};
