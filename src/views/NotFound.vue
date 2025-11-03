<template>
    <div class="notfound-root">
        <div class="card">
            <div class="graphic">Oops!</div>
            <h2 class="headline">404 — Page not found</h2>
            <p class="message">
                The page you are looking for might have been removed, had its name changed, or is
                temporarily unavailable.
            </p>
            <router-link to="/hrm" class="home-btn">Go to homepage</router-link>
            <div class="small-note">If you think this is an error, contact support.</div>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>
.notfound-root {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px 20px;
}
.card {
    max-width: 920px;
    width: 100%;
    border-radius: 18px;
    padding: 64px 48px;
    text-align: center;
}
.graphic {
    font-size: 110px;
    font-weight: 800;
    line-height: 1;
    margin-bottom: 8px;
    background: linear-gradient(90deg, #3b82f6 0%, #7c3aed 50%, #06b6d4 100%);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    letter-spacing: -4px;
}
.headline {
    font-size: 28px;
    margin: 10px 0 16px;
    color: #0f172a;
    font-weight: 700;
}
.message {
    color: #6b7280;
    font-size: 16px;
    max-width: 720px;
    margin: 0 auto 26px;
}
.home-btn {
    display: inline-block;
    padding: 12px 26px;
    background: linear-gradient(180deg, #2563eb, #1e40af);
    color: #fff;
    border-radius: 999px;
    font-weight: 700;
    text-decoration: none;
    box-shadow: 0 8px 20px rgba(37, 99, 235, 0.18);
}
.home-btn:hover {
    opacity: 0.95;
}
.small-note {
    margin-top: 20px;
    color: #9ca3af;
    font-size: 13px;
}

@media (max-width: 768px) {
    .card {
        padding: 36px 20px;
    }
    .graphic {
        font-size: 78px;
        letter-spacing: -3px;
    }
    .headline {
        font-size: 20px;
    }
    .message {
        font-size: 14px;
    }
    .home-btn {
        padding: 12px 20px;
    }
}
</style>
