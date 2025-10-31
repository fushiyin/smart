const Index = () => import('@/views/Index.vue')
const Home = () => import('@/views/HomeView.vue')
const About = () => import('@/views/AboutView.vue')
const Login = () => import('@/views/Login.vue')
const NotFound = () => import('@/views/NotFound.vue')
const MainLayout = () => import('@/layouts/MainLayout.vue')

export const moduleRoutes = [
  {
    path: '/',
    name: 'Index',
    component: Index,
    meta: { authRequired: false },
  },

  {
    path: '/attendance',
    component: MainLayout,
    meta: { title: 'Attendance Module', authRequired: false },
    children: [
      {
        path: '',
        redirect: '/attendance/overview',
      },
      {
        path: 'overview',
        name: 'attendance-overview',
        component: Home,
        meta: { title: 'Attendance Overview', authRequired: false },
      },
      {
        path: 'reports',
        name: 'attendance-reports',
        component: About,
        meta: { title: 'Attendance Reports', authRequired: false },
      },
      {
        path: ':id',
        name: 'attendance-detail',
        component: About,
        meta: { title: 'Attendance Detail', hidden: true, authRequired: false },
      },
    ],
  },

  {
    path: '/hrm',
    component: MainLayout,
    meta: { title: 'HRM Module', authRequired: false },
    children: [
      {
        path: '',
        redirect: '/hrm/overview',
      },
      {
        path: 'overview',
        name: 'hrm-overview',
        component: Home,
        meta: { title: 'HRM Overview', authRequired: false },
      },
      {
        path: 'reports',
        name: 'hrm-reports',
        component: About,
        meta: { title: 'HRM Reports', authRequired: false },
      },
      {
        path: ':id',
        name: 'hrm-detail',
        component: About,
        meta: { title: 'HRM Detail', hidden: true, authRequired: false },
      },
    ],
  },

  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { authRequired: false },
  },

  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
  },
]
