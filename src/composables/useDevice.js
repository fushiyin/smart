import { ref, computed, onMounted, onUnmounted } from 'vue'

export function useDevice() {
  const width = ref(window.innerWidth)

  const updateWidth = () => {
    width.value = window.innerWidth
  }

  onMounted(() => {
    window.addEventListener('resize', updateWidth)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', updateWidth)
  })

  const BREAKPOINTS = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
  }

  const isMobile = computed(() => width.value < BREAKPOINTS.sm)
  const isTablet = computed(() => width.value >= BREAKPOINTS.sm && width.value < BREAKPOINTS.lg)
  const isDesktop = computed(() => width.value >= BREAKPOINTS.lg)
  const isLargeDesktop = computed(() => width.value >= BREAKPOINTS.xl)

  const deviceType = computed(() => {
    if (isMobile.value) return 'mobile'
    if (isTablet.value) return 'tablet'
    if (isDesktop.value) return 'desktop'
    return 'unknown'
  })

  return {
    width,
    isMobile,
    isTablet,
    isDesktop,
    isLargeDesktop,
    deviceType,
  }
}
