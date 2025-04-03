<template>
    <header>
            <div class="header-title">
                <h1>VDC Studio Wildfire Rebuilding Valuation App</h1>
            </div>
            <nav class="top-menu">
                <a href="javascript:void(0);" @click="$emit('main-title-click')">Home</a>
                <a href="javascript:void(0);" @click="$emit('about-title-click')">About Us</a>
                <a href="javascript:void(0);" @click="$emit('login-click')" v-if="!this.$store.state.user.isLoggedIn">Login</a>
                <a href="javascript:void(0);" @click="$emit('logout-click')" v-if="this.$store.state.user.isLoggedIn">Logout</a>
            </nav>
            <p>
                What We Do Best Is 3D Design Valuation Analysis
                30+ years of experience behind our method and it works.
            </p>
        </header>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.header-title {
    text-align: center;
}

.top-menu {
    display: grid;
    grid-template-columns: repeat(3, auto);
    gap: 1rem;
    padding: 0.3rem;
}

/* Menu links */
.top-menu a {
    color: white;
    font-size: 22px;
    text-align: center;
}

/* Mobile */
@media (max-width: 767px) {
    .top-menu {
        grid-template-columns: 1fr;
        gap: 0;
    }

    .top-menu a {
        display: block;
        text-align: left;
    }
}
</style>