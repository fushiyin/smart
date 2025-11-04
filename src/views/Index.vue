<script setup>
defineOptions({ name: 'IndexView' })

import { useAuthStore } from '@/stores/useAuthStore'
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const user = useAuthStore().user

onMounted(() => {
    if (!user) {
        return router.push('/login')
    }

    if (user.role === 'User') {
        return router.push('/home')
    } else return router.push('/dashboard')
})
</script>