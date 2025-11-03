<script>
export default {
    name: 'IndexView',
    created() {
        // TODO: after login, check user role and redirect accordingly
        // role: user, navigate to /user
        // role: admin, navigate to /attendance/overview
        this.$router.push(`${this.$route.path}attendance/overview`)
    },
}
</script>