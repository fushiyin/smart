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
                <div v-if="$vuetify.display.mdAndUp" class="col image-col">
                    <div class="image-fill"></div>
                </div>
                <div
                    v-else
                    class="col"
                    :style="{
                        backgroundImage: 'url(' + mobile + ')',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }"
                >
                    <div class="mobile-graphic d-flex h-100 justify-center align-center">
                        <div class="mobile-header text-center">
                            <h2 class="text-h5 font-weight-medium mb-2 text-white">ATENSYSTEM</h2>
                            <div class="text-body-2 text--secondary text-white">
                                Your gateway to efficient management
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col left bg-blur position-relative">
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

                    <form
                        @submit.prevent="onSubmit"
                        :class="{
                            'mt-6': !vuetify.display.mdAndUp,
                        }"
                    >
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
                                    <v-icon>{{ show ? 'mdi-eye' : 'mdi-eye-off' }}</v-icon>
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

                    <v-divider thickness="2" class="my-4"> </v-divider>

                    <div class="d-flex flex-column justify-center align-center footer-note">
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
import bg from '@/assets/images/imagepng.png'
import mobile from '@/assets/images/mobile.webp'
import vuetify from '@/plugins/vuetify'
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
    background: linear-gradient(180deg, #f3f7fb 0%, #ffffff 100%);
    position: relative;
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
    padding: 32px;
}
.pa-8 {
    padding: 32px;
}

.bg-blur {
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(10px);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}
.brand {
    font-weight: 700;
    color: #0b5568;
    margin-bottom: 6px;
    background: linear-gradient(180deg, #3b82f6, #2563eb);
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
    background: linear-gradient(180deg, #6fa6ff, #6193fd);
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
    background-image: url('@/assets/images/image.png');
    background-size: cover;
    background-position: center;
}

/* responsive */
@media (max-width: 992px) {
    .auth-card {
        flex-direction: column;
        height: auto;
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

@media (max-width: 768px) {
    .auth-shell {
        padding: 0;
        background-size: cover !important;
        background-position: bottom center !important;
        background-image: none !important;
        background-color: ;
    }
    .title,
    .lead {
        display: none;
    }

    .auth-card {
        max-width: 100%;
        height: 100vh;
        max-height: 100vh;
        box-shadow: none;
        background: red;
    }

    .image-col {
        display: none;
    }

    .left {
        backdrop-filter: none !important;
        box-shadow: none !important;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
        padding: 0;
        border-radius: 80px 0 0 0 !important;
        background: #ffffff !important;
    }

    .brand {
        display: none;
    }

    .mobile-header {
        width: 100%;
        text-align: center;
        margin-bottom: 48px;
    }

    .mobile-graphic {
        width: 100%;
        flex: 1;
        border-radius: 0 0 24px 24px;
        position: relative;
        overflow: hidden;
        margin-bottom: 32px;
    }

    .left form {
        width: 100%;
        max-width: 400px;
        background: transparent;
        padding: 32px 20px;
    }

    .field {
        margin-bottom: 16px;
    }

    .label {
        font-size: 13px;
        font-weight: 500;
        color: #64748b;
        margin-bottom: 8px;
        text-transform: none;
        letter-spacing: 0;
    }

    .field input {
        border: none;
        border-bottom: none;
        background: #ffffff;
        padding: 14px 20px;
        border-radius: 12px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
        width: 100%;
        font-size: 15px;
    }

    .field input:focus {
        box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        border-bottom: none;
    }

    .pw-row button {
        right: 20px !important;
    }

    .actions {
        justify-content: center;
        margin-top: 12px;
        margin-bottom: 20px;
    }

    .forgot {
        font-size: 14px;
        color: #64748b;
    }

    .v-divider {
        display: none;
    }

    .social-login {
        width: 100%;
        max-width: 400px;
        display: flex;
        gap: 12px;
        margin-bottom: 24px;
    }
    .text {
        display: none;
    }
    .footnote {
        font-size: 14px;
        color: #64748b;
        text-align: center;
        display: none;
    }
    .footnote a {
        color: #3b82f6;
        text-decoration: none;
        font-weight: 600;
    }
}
</style>
