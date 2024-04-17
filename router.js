import { createRouter, createWebHistory } from 'vue-router';
import IndexPage from './src/components/pages/indexPage.vue';
import RestaurantPage from './src/components/pages/RestaurantPage.vue';
import PaymentPage from './src/components/pages/PaymentPage.vue';
import LavoraConNoiPage from './src/components/pages/LavoraConNoi.vue';
import OrderSuccess from './src/components/pages/OrderSuccess.vue';
import NotFoundPage from './src/components/pages/NotFound.vue'; 


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: IndexPage 
    },
    {
      path: '/restaurant/:name',
      name: 'restaurant',
      component: RestaurantPage
    },
    {
      path: '/payment',
      name: 'payment',
      component: PaymentPage
    },
    {
      path: '/order-success',
      name: 'order-success',
      component: OrderSuccess
    },
    {
      path: '/lavora-con-noi',
      name: 'lavora-con-noi',
      component: LavoraConNoiPage
    },
    {
      path: '/not-found',
      name: 'not-found',
      component: NotFoundPage 
    },
    {
      path: '/:catchAll(.*)',
      name: 'not-found-catch-all',
      component: NotFoundPage 
    }
  ]
});

export {router};
