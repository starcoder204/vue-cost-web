<template>
    <header>
            <div class="header-title">
                <h1>VDC Studio Wildfire Rebuilding Valuation App</h1>
            </div>
            <nav class="top-menu" :class="{ 'logged': this.$store.state.user.isLoggedIn }">
                <router-link to="/" :class="{ 'active': this.$route.name === 'Home'}">Home</router-link>
                <router-link to="/spec-builder" v-if="this.$store.state.user.isLoggedIn">Spec Builder</router-link>
                <router-link to="/about">About Us</router-link>
                <router-link to="/login" v-if="!this.$store.state.user.isLoggedIn">Login, Real Estate Investor</router-link>
                <router-link to="/login-partner" v-if="!this.$store.state.user.isLoggedIn">Login, VDC + Partners</router-link>
                <a href="javascript:void(0);" @click="logoutClicked()" v-if="this.$store.state.user.isLoggedIn">Logout</a>
            </nav>
            <p>
                What we do best is 3D architetcure and design valuation analysis, with over 30 years of experience behind every analysis.
            </p>
        </header>
</template>

<script>
export default {
    methods: {
        logoutClicked() {
            this.$store.dispatch('logout');
            this.$router.push('/').catch(()=>{});
        },
    }
}
</script>

<style lang="scss" scoped>
.header-title {
    text-align: center;
}

.top-menu {
    display: grid;
    grid-template-columns: repeat(4, auto);
    gap: 1rem;
    padding: 0.3rem;
    &.logged {
        grid-template-columns: repeat(5, auto);
    }
}

/* Menu links */
.top-menu a {
    color: white;
    font-size: 22px;
    text-align: center;
    text-decoration: underline;
    &.router-link-exact-active {
        color: #ebc3c3;
    }
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