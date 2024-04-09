import { createRouter, createWebHistory } from 'vue-router';
import IndexPage from './src/components/pages/indexPage.vue';
import RestaurantPage from './src/components/pages/RestaurantPage.vue';
import PaymentPage from './src/components/pages/PaymentPage.vue';
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
      path: '/restaurant',
      name: 'restaurant.index',
      component: RestaurantPage
    },
    {
      path: '/payment',
      name: 'payment.index',
      component: PaymentPage
    },
    {
      path: '/LavoraConNoi',
      name: 'LavoraConNoi.index',
      component: LavoraConNoiPage
    }
  ]
});

export {router};
