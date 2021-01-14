import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Login from '@/components/login'
import Dashboard from '@/components/dashboard'
import Product from '@/components/dashboard/product'
import NewProduct from '@/components/dashboard/new_product'
import UpdateProduct from '@/components/dashboard/update_product'
import Order from '@/components/dashboard/order'
import Index from '@/components/home/index';
import Story from '@/components/home/story';
import Main_product from '@/components/home/product';
import Position from '@/components/home/position';
import Cart from '@/components/home/cart';
import Contact from '@/components/home/contact';
import Product_single from '@/components/home/product_single';


Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children:[
        {
          path: '',
          name: 'Index',
          component: Index
        },
        {
          path: '/story',
          name: 'Story',
          component: Story
        },
        {
          path: '/product',
          name: 'Main_product',
          component: Main_product
        },
        {
          path: '/position',
          name: 'Position',
          component: Position
        },
        {
          path: '/cart',
          name: 'Cart',
          component: Cart
        },
        {
          path: '/contact',
          name: 'Contact',
          component: Contact
        },  
        {
          path: '/position',
          name: 'Position',
          component: Position
        },
        {
          path: '/product/:id',
          name: 'Product_single',
          component: Product_single
        } 
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      meta: { requiresAuth: true },
      children:[
        {
          path: '/',
          name: 'Product',
          component: Product,
          meta: { requiresAuth: true }
        },
        {
          path: '/dashboard/new_product',
          name: 'New_product',
          component: NewProduct,
          meta: { requiresAuth: true }
        },
        {
          path: '/dashboard/update_product/:id',
          name: 'update_product',
          component: UpdateProduct,
          meta: { requiresAuth: true }
        },
        {
          path: '/dashboard/order',
          name: 'Order',
          component: Order,
          meta: { requiresAuth: true }
        },
      ]
    }
  ]
})

