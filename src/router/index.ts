import { createRouter, createWebHistory } from 'vue-router'
import OrdersView from '../views/OrdersView.vue'
import OrderDetailViewVue from '@/views/OrderDetailView.vue'
import ProductDetailViewVue from '@/views/ProductDetailView.vue'
import ProductsView from '@/views/ProductsView.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: OrdersView
    },
    {
      path: '/orders',
      name: 'orders',
      component: OrdersView
    },
    {
      path: '/products',
      name: 'products',
      component: ProductsView
    },
    {
      path: '/orders/detail/:id',
      name: 'detail',
      component: OrderDetailViewVue,
    },
    {
      path: '/products/detail/:id',
      name: 'detail',
      component: ProductDetailViewVue,
    },
  ],
  
})


export default router
