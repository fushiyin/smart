const Home = () => import('@/views/HomeView.vue')
const About = () => import('@/views/AboutView.vue')

export const moduleRoutes = [
  {
    index: true,
    path: '/',
    name: 'home',
    component: Home,
    meta: { title: 'Home', authRequired: false },
  },
  {
    path: '/attendance',
    name: 'attendance',
    component: Home,
    meta: { title: 'Attendance Module', authRequired: false },
    children: [
      {
        path: 'overview',
        name: 'attendance-overview',
        component: About,
        meta: { title: 'Attendance Overview' },
      },
      {
        path: 'reports',
        name: 'attendance-reports',
        component: About,
        meta: { title: 'Attendance Reports' },
      },
      {
        path: ':id',
        name: 'attendance-detail',
        component: About,
        meta: { title: 'Attendance Detail', hidden: true },
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/NotFound.vue'),
  },
]
