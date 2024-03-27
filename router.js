import { createRouter, createWebHistory } from 'vue-router';
import AppHome from './pages/AppHome.vue';
import FormLogin from './pages/FormLogin.vue';
const router = createRouter({
history: createWebHistory(),
routes: [
{
path: '/',
name: 'home',
component: AppHome
},
{
path: '/formlogin',
name: 'formlogin',
component: formpage
},
]
});
export { router };