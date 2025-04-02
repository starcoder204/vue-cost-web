<template>
    <header>
            <div class="top-menu-titles">
                <h1 class="main-title" @click="$emit('main-title-click')">VDC Studio Wildfire Rebuilding Valuation App</h1>
                <h1 class="about-title" @click="$emit('about-title-click')">About Us</h1>
                <h1 v-if="!this.$store.state.user.isLoggedIn" class="login-title" @click="$emit('login-click')">Login</h1>
                <h1 v-if="this.$store.state.user.isLoggedIn" class="logout-title" @click="$emit('logout-click')">Logout</h1>
            </div>
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