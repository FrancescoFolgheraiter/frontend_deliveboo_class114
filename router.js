import { createRouter, createWebHistory } from 'vue-router';
import IndexPage from './src/components/pages/indexPage.vue';
import ResturantPage from './src/components/pages/ResturantPage.vue';

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
    }
  ]
});

export {router};
