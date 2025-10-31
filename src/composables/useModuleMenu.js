import { computed } from 'vue'
import { useRoute } from 'vue-router'

export function useModuleMenu() {
  const route = useRoute()

  const moduleName = computed(() => route.path.split('/')[1] || 'home')

  const moduleMenus = {
    attendance: [
      { label: 'Overview', path: '/attendance/overview', icon: 'mdi-view-dashboard' },
      { label: 'Reports', path: '/attendance/reports', icon: 'mdi-file-document' },
      { label: 'Leave Requests', path: '/attendance/leave-requests', icon: 'mdi-file-document' },
      { label: 'Time Off', path: '/attendance/time-off', icon: 'mdi-file-document' },
      { label: 'Holidays', path: '/attendance/holidays', icon: 'mdi-file-document' },
      { label: 'Schedules', path: '/attendance/schedules', icon: 'mdi-file-document' },
    ],
    hrm: [
      { label: 'Employee List', path: '/hrm/employees', icon: 'mdi-account-group' },
      { label: 'Payroll', path: '/hrm/payroll', icon: 'mdi-cash' },
      { label: 'Benefits', path: '/hrm/benefits', icon: 'mdi-gift' },
      { label: 'Recruitment', path: '/hrm/recruitment', icon: 'mdi-briefcase' },
      { label: 'Performance', path: '/hrm/performance', icon: 'mdi-chart-line' },
    ],
    home: [{ label: 'Dashboard', path: '/' }],
  }

  const menus = computed(() => moduleMenus[moduleName.value] || [])

  return { menus, moduleName }
}
