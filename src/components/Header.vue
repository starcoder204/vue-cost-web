<template>
    <header>
            <div class="header-title">
                <h1>VDC Studio Wildfire Rebuilding Valuation App</h1>
                <div v-if="isLoggedIn" class="text-lg">
                    <div v-if="fullName.trim() !== ''">Welcome, <span class="welcome-name">{{fullName}}</span></div>
                    <div v-else>Welcome!</div>
                </div>
            </div>
            <nav class="top-menu" :class="{ 'logged': isLoggedIn, 'with-vdc-partner': isVDCPartner }">
                <router-link to="/" :class="{ 'active': this.$route.name === 'Home'}">Home</router-link>
                <router-link to="/vdc-partner" v-if="isLoggedIn && isVDCPartner">VDC+Partner</router-link>
                <router-link to="/spec-builder" v-if="isLoggedIn && !isVDCPartner">Spec Builder</router-link>
                <router-link to="/about">About Us</router-link>
                <router-link to="/account" v-if="isLoggedIn">My Account</router-link>
                <router-link to="/login" v-if="!isLoggedIn">Login</router-link>
                <router-link to="/create" v-if="!isLoggedIn">Register</router-link>
                <a href="javascript:void(0);" @click="logoutClicked()" v-if="isLoggedIn">Logout</a>
            </nav>
            <p>
                What we do best is 3D architetcure and design valuation analysis, with over 30 years of experience behind every analysis.
            </p>
        </header>
</template>

<script>
export default {
    computed: {
        isVDCPartner() {
            return this.$store.state.user.userRole === 'vdc_partner'
        },
        isLoggedIn() {
            return this.$store.state.user.uid
        },
        fullName() {
            return this.$store.state.user.firstName + ' ' + this.$store.state.user.lastName
        }
    },
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

.welcome-name {
    color: #b5f993;
}

.top-menu {
    display: grid;
    grid-template-columns: repeat(4, auto);
    gap: 1rem;
    padding: 0.3rem;
    &.logged {
        grid-template-columns: repeat(5, auto);
    }
    &.with-vdc-partner {
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
        grid-template-columns: 1fr !important;
        gap: 0;
    }

    .top-menu a {
        display: block;
        text-align: left;
    }
}
</style>