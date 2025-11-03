import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    isAuthenticated: false,
    loading: false,
    error: null,
  }),
  getters: {
    isLoggedIn: (state) => state.isAuthenticated,
    userEmail: (state) => (state.user ? state.user.email : ''),
  },
  actions: {
    async login(email, password) {
      this.loading = true
      this.error = null
      try {
        await new Promise((r) => setTimeout(r, 600))
        this.user = { email }
        this.isAuthenticated = true
      } catch (err) {
        this.error = err.message || 'Login failed'
        this.isAuthenticated = false
        throw err
      } finally {
        this.loading = false
      }
    },

    logout() {
      this.user = null
      this.isAuthenticated = false
    },
  },
})
