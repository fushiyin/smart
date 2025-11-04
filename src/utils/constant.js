export const MODULES_LIST = [
  {
    name: 'Attendance',
    route: '/attendance/overview',
    icon: 'mdi-calendar-check',
  },
  {
    name: 'HRM',
    route: '/hrm/overview',
    icon: 'mdi-account-group',
  },
  {
    name: 'Payroll',
    route: '/payroll/overview',
    icon: 'mdi-cash',
  },
  {
    name: 'Staff Evaluation',
    route: '/staff-evaluation/overview',
    icon: 'mdi-chart-line',
  },
  {
    name: 'System Settings',
    route: '/settings',
    icon: 'mdi-cog',
  },
]

export const fakeUsers = [
  {
    email: 'alice@example.com',
    name: 'Alice Nguyen',
    role: 'Admin',
    avatar: 'https://i.pravatar.cc/150?img=1',
  },
  {
    email: 'binh@example.com',
    name: 'Binh Tran',
    role: 'User',
    avatar: 'https://i.pravatar.cc/150?img=2',
  },
  {
    email: 'chi@example.com',
    name: 'Chi Le',
    role: 'Manager',
    avatar: 'https://i.pravatar.cc/150?img=3',
  },
]
