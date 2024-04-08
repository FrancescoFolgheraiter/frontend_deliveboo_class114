import { createRouter, createWebHistory } from 'vue-router';
import IndexPage from './src/components/pages/indexPage.vue';
import ResturantPage from './src/components/pages/ResturantPage.vue';
import PayementPage from './src/components/pages/PayementPage.vue';
import LavoraConNoiPage from './src/components/pages/LavoraConNoi.vue';

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
    },
    {
      path: '/LavoraConNoi',
      name: 'LavoraConNoi.index',
      component: LavoraConNoiPage
    }
  ]
});

export {router};
