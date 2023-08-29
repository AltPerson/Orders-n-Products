import { lazy } from 'react';

const Home = lazy(() => import('Pages/Home/Home'));
const Products = lazy(() => import('Pages/Products/Products'));
const Orders = lazy(() => import('Pages/Orders/Orders'));
const Page404 = lazy(() => import('Pages/Page404/Page404'));

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
  {
    path: '*',
    component: Page404,
  },
];
