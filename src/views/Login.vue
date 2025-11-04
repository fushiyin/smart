<template>
    <div
        class="auth-shell d-flex flex-column justify-center align-center ga-8"
        :style="{
            backgroundImage: 'url(' + bg + ')',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }"
    >
        <div class="auth-card">
            <div class="row">
                <div class="col image-col pa-8">
                    <div
                        class="image-fill"
                        :style="{
                            backgroundImage: 'url(' + image + ')',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            width: '100%',
                            height: '100%',
                        }"
                    ></div>
                </div>

                <div class="col left pa-8 bg-blur position-relative">
                    <div
                        class="brand position-absolute py-2 px-6 text-center text-white"
                        style="
                            top: -20px;
                            clip-path: polygon(0 0, 100% 0, calc(100% - 8px) 100%, 8px 100%);
                            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
                            transform: translateX(-50%);
                            left: 50%;
                            padding: 6px 16px;
                            font-weight: 600;
                        "
                    >
                        ATENSYSTEM
                    </div>
                    <h2 class="title">Welcome back</h2>
                    <div class="lead">Sign in to continue to your dashboard</div>

                    <form @submit.prevent="onSubmit" class="mt-6">
                        <div class="field">
                            <label class="label">Email address</label>
                            <input
                                v-model="email"
                                type="email"
                                placeholder="you@domain.com"
                                required
                            />
                        </div>

                        <div class="field">
                            <label class="label">Password</label>
                            <div class="pw-row">
                                <input
                                    :type="show ? 'text' : 'password'"
                                    v-model="password"
                                    placeholder="Enter your password"
                                    required
                                    style="flex: 1"
                                />
                                <button
                                    type="button"
                                    @click="show = !show"
                                    class="position-absolute right-0 top-1/2 -translate-y-1/2 mr-10"
                                >
                                    {{ show ? 'Hide' : 'Show' }}
                                </button>
                            </div>
                        </div>

                        <div
                            class="actions d-flex align-center justify-end text-decoration-underline"
                        >
                            <button type="button" class="forgot">Forgot password?</button>
                        </div>
                        <div class="actions w-100 py-4">
                            <button type="submit" class="btn">Login</button>
                        </div>
                    </form>

                    <hr class="my-4 divider" />

                    <div class="d-flex flex-column justify-center align-center">
                        <div class="text">or</div>
                        <div class="footnote">Register for trial? <a href="#"> Register </a></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/useAuthStore'
import { fakeUsers } from '@/utils/constant'
import bg from '@/assets/images/imagepng.png'
import image from '@/assets/images/image.png'

defineOptions({
    name: 'LoginView',
})
const router = useRouter()
const auth = useAuthStore()
const email = ref('')
const password = ref('')
const show = ref(false)

const onSubmit = async () => {
    const user = fakeUsers.find((u) => u?.email.toLowerCase() === email.value.trim().toLowerCase())
    if (!user) {
        alert('User not found')
        return
    }
    try {
        await auth.login(user)
        router.push('/')
    } catch {
        alert('Login failed')
    }
}
</script>

<style scoped>
.auth-shell {
    height: 100dvh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px;
    background: linear-gradient(180deg, #f3f7fb 0%, #ffffff 100%);
    position: relative;
    overflow: hidden;
}
.auth-card {
    position: relative;
    z-index: 2;
    width: 100%;
    max-width: 70vw;
    box-shadow: unset;
    height: 65vh;
    max-height: 80vh;
}
.row {
    display: flex;
    height: 100%;
}
.col {
    flex: 1;
}
.image-col {
    flex: 1.4;
}
.left {
    flex: 1;
    display: flex;
    flex-direction: column;
}
.pa-8 {
    padding: 32px;
}

.bg-blur {
    background: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(10px);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}
.brand {
    font-weight: 700;
    color: #0b5568;
    margin-bottom: 6px;
    background: linear-gradient(180deg, #0b0d0f, #000000);
}
.title {
    font-size: 28px;
    margin: 6px 0;
    color: #0f2430;
}
.lead {
    color: #64748b;
    margin-bottom: 20px;
}

.form {
    display: flex;
    flex-direction: column;
    gap: 18px;
}
.field {
    display: flex;
    flex-direction: column;
    margin-bottom: 12px;
}
.label {
    font-size: 12px;
    color: #6b7280;
    margin-bottom: 6px;
    text-transform: uppercase;
    letter-spacing: 0.6px;
}
.field input {
    padding: 10px 6px;
    border: none;
    border-bottom: 1.5px solid #e6eef2;
    background: transparent;
    outline: none;
    font-size: 15px;
    background: #ffffff;
}
.field input::placeholder {
    color: #9aa6b0;
}
.field input:focus {
    border-bottom-color: #3b82f6;
}
.pw-row {
    display: flex;
    align-items: center;
}
.toggle {
    margin-left: 8px;
    background: transparent;
    border: none;
    color: #1d4ed8;
    cursor: pointer;
}

.actions {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 8px;
}
.forgot {
    color: #6b7280;
    font-size: 13px;
    text-decoration: none;
    background: transparent;
    border: none;
    cursor: pointer;
}

.btn {
    background: linear-gradient(180deg, #0b0d0f, #000000);
    color: #fff;
    padding: 10px 18px;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    width: 100%;
}

.footnote {
    margin-top: 16px;
    color: #94a3b8;
    font-size: 13px;
}

.right {
    padding: 28px;
    display: flex;
}
.image-fill {
    border-radius: 12px;
    width: 100%;
    height: 100%;
}
.divider {
    border: none;
    height: 2px;
    background: rgba(15, 23, 42, 0.04);
    margin: 18px 0;
}

@media (max-width: 992px) {
    .auth-shell {
        background-image: url('@/assets/images/login_background.jpg') !important;
    }
    .auth-card {
        flex-direction: column;
        height: auto;
        max-width: 92vw;
    }
    .row {
        flex-direction: column;
    }
    .image-col {
        order: 1;
        width: 100%;
        height: 260px;
    }
    .left {
        order: 2;
        width: 100%;
        padding: 20px;
    }
}
@media (max-width: 480px) {
    .auth-shell {
        background-image: url('@/assets/images/login_background.jpg') !important;
    }
    .auth-card {
        border-radius: 0;
    }
    .left {
        padding: 18px;
    }
    .title,
    .lead {
        display: none;
    }

    .image-col {
        display: none;
    }
    .bg-blur {
        background: rgba(255, 255, 255, 0.3);
        border-radius: 8px;
        border: 1px solid rgba(200, 200, 200, 0.3);
    }
}
</style>
