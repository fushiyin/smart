<template>
    <div class="app-container">
        <h1>ĐÂY LÀ TRANG CHỦ NGƯỜI DÙNG</h1>
        <p>Hiển thị thông tin chung người dùng: Tổng ngày công trong tháng, Ngày phép còn lại</p>
    </div>
</template>

<script setup>
</script>

<style scoped>
.app-container {
    background: #f8fafc;
    padding: 32px 0 0 0;
    display: flex;
    flex-direction: column;
    align-items: center;
}
@media (max-width: 600px) {
    .app-container {
        padding: 18px 0 0 0;
    }
}
</style>