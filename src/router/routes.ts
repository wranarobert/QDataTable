import { RouteConfig } from 'vue-router';

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', redirect: 'documentation' },
      {
        path: 'documentation',
        component: () => import('pages/DocumentationPage.vue')
      },
      {
        path: 'q-data-table-demo',
        component: () => import('pages/QDataTableDemo.vue')
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
];

export default routes;
