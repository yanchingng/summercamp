
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {path: '', name: 'Home', component: () => import('pages/IndexPage.vue')},
    ]
  },
  {
    path: '/wireframe',
    component: () => import('layouts/WireLayout.vue'),
    children: [
      {path: '', name: 'Wireframe', component: () => import('pages/Wireframe.vue')},
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
