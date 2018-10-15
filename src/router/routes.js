const routes = [
  {
    path: '/',
    component: () => import('layouts/AppLayout.vue'),
    meta: {
      name: 'Home'
    },
    children: [
      { path: '',
        component: () => import('pages/Index.vue'),
        meta: {
          name: 'Home'
        }
      },
      {
        path: '/primeira',
        component: () => import('pages/Primeira.vue'),
        meta: {
          name: 'Primeira'
        }
      }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
