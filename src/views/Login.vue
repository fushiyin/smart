<template>
    <div class="auth-shell" :style="{ backgroundImage: `url(${bg})` }">
        <div class="auth-card">
            <div class="left">
                <div class="brand">ATENSYSTEM</div>
                <h1 class="login-title">Login</h1>
                <p class="login-desc">Welcome back — please login to your workspace</p>

                <form @submit.prevent="onSubmit" class="login-form">
                    <label class="field">
                        <span class="label-text">Email</span>
                        <input v-model="email" type="email" placeholder="you@domain.com" required />
                    </label>

                    <label class="field">
                        <span class="label-text">Password</span>
                        <div class="pw-row">
                            <input
                                :type="show ? 'text' : 'password'"
                                v-model="password"
                                placeholder="Enter your password"
                                required
                            />
                            <button type="button" class="pw-toggle" @click="show = !show">
                                {{ show ? 'Hide' : 'Show' }}
                            </button>
                        </div>
                    </label>

                    <div class="row-between">
                        <a class="forgot" href="#">Forgot password?</a>
                        <button class="btn-primary" type="submit">Login</button>
                    </div>
                </form>

                <div class="small-note">Don't have an account? <a href="#">Sign up</a></div>
            </div>

            <div
                class="right"
                :style="{
                    backgroundImage: `url(${bg2})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundColor: '#f3f7fb',
                }"
            ></div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import bg from '@/assets/images/background.jpg'
import bg2 from '@/assets/images/background.png'
const email = ref('')
const password = ref('')
const show = ref(false)

const onSubmit = () => {
    console.log('login', { email: email.value, password: password.value })
}
</script>

<style scoped>
.auth-shell {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px;
    background: #f3f7fb;
    background-size: cover;
    background-position: center;
}
.auth-card {
    width: 100%;
    display: flex;
    border-radius: 20px;
    overflow: hidden;
    background: linear-gradient(180deg, #ffffff, #fbfeff);
    border: 3px solid #cfeef9;
    box-shadow: 0 18px 40px rgba(2, 6, 23, 0.08);
    min-height: 80vh;
    max-width: 70vw;
}
.left {
    flex: 0 0 40%;
    padding: 48px 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.brand {
    font-weight: 700;
    color: #0b5568;
    margin-bottom: 12px;
}
.login-title {
    font-size: 28px;
    margin: 6px 0;
    color: #0f2430;
}
.login-desc {
    color: #64748b;
    margin-bottom: 18px;
}
.login-form {
    display: flex;
    flex-direction: column;
    gap: 12px;
}
.field {
    display: flex;
    flex-direction: column;
    gap: 6px;
}
.label-text {
    font-size: 13px;
    color: #6b7280;
}
.field input {
    padding: 12px 14px;
    border-radius: 10px;
    border: 1px solid #e6f0f6;
    background: #fff;
}
.pw-row {
    display: flex;
    align-items: center;
}
.pw-toggle {
    margin-left: 8px;
    background: transparent;
    border: none;
    color: #0b5568;
    cursor: pointer;
}
.row-between {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 8px;
}
.forgot {
    color: #3b82f6;
    text-decoration: none;
    font-size: 14px;
}
.btn-primary {
    background: #0b7fa8;
    color: #fff;
    padding: 10px 18px;
    border-radius: 8px;
    border: none;
    cursor: pointer;
}
.small-note {
    margin-top: 14px;
    color: #94a3b8;
    font-size: 13px;
}

.right {
    flex: 1;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px;
}
.art-panel {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
}
.art-shape {
    position: absolute;
    border-radius: 50%;
    opacity: 0.12;
}
.art-shape.large {
    width: 420px;
    height: 420px;
    background: #3bb6b0;
    right: -60px;
    top: -40px;
}
.art-shape.medium {
    width: 260px;
    height: 260px;
    background: #8fe3d9;
    right: 0;
    bottom: -20px;
}
.art-shape.small {
    width: 120px;
    height: 120px;
    background: #dff8f3;
    left: 40px;
    bottom: 40px;
}
.art-graphic {
    position: relative;
    z-index: 2;
}

/* Responsive */
@media (max-width: 992px) {
    .auth-card {
        flex-direction: column;
    }
    .left {
        flex: none;
        width: 100%;
        padding: 28px;
    }
    .right {
        width: 100%;
        padding: 20px;
        min-height: 460px;
    }
    .art-shape.large {
        display: none;
    }
}
@media (max-width: 480px) {
    .auth-card {
        border-radius: 0;
        border-width: 0;
    }
    .left {
        padding: 20px;
    }
    .login-title {
        font-size: 22px;
    }
}
</style>
