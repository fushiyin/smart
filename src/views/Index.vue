<script>
export default {
    name: 'IndexView',
    created() {
        this.$router.push(`${this.$route.path}attendance/overview`)
    },
}
</script>