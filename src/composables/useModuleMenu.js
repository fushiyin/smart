import { computed } from 'vue'
import { useRoute } from 'vue-router'

export function useModuleMenu() {
  const route = useRoute()

  const moduleName = computed(() => route.path.split('/')[1] || 'home')

  const moduleMenus = {
    attendance: [
      { label: 'Overview', path: '/attendance/overview' },
      { label: 'Reports', path: '/attendance/reports' },
    ],
    hrm: [
      { label: 'Employee List', path: '/hrm/employees' },
      { label: 'Payroll', path: '/hrm/payroll' },
    ],
    home: [{ label: 'Dashboard', path: '/' }],
  }

  const menus = computed(() => moduleMenus[moduleName.value] || [])

  return { menus, moduleName }
}
