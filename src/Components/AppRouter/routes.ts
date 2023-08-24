import { lazy } from 'react';

const Home = lazy(() => import('Pages/Home/Home'));
const Products = lazy(() => import('Pages/Products/Products'));
const Orders = lazy(() => import('Pages/Orders/Orders'));

export const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/products',
    component: Products,
  },
  {
    path: '/orders',
    component: Orders,
  },
];
