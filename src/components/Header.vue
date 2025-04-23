<template>
    <header>
      <div class="header-title">
        <h1>VDC Studio Wildfire Rebuilding Valuation App</h1>
        <div v-if="isLoggedIn" class="text-lg flex justify-center">
          <div v-if="fullName.trim() !== ''">
            Welcome, <span class="welcome-name">{{ fullName }}</span>
          </div>
          <div v-else>Welcome!</div>
          &nbsp;&nbsp;
          (<a href="javascript:void(0);" @click="logoutClicked()" class="underline">Sign Out</a>)
        </div>
      </div>

      <!-- Desktop Menu -->
        <nav v-if="isDesktop" class="top-menu hidden md:grid"
            :class="{ 'logged': isLoggedIn, 'with-5-pages': is5Pages, 'with-6-pages': isShowSpecBuilderPage }">
            <router-link to="/" :class="{ 'active': $route.name === 'Home' }">Home</router-link>
            <router-link to="/spec-builder" v-if="isLoggedIn && isShowSpecBuilderPage">Spec Builder</router-link>
            <router-link to="/escrow" v-if="isLoggedIn && isShowEscrowPage">Escrow</router-link>
            <router-link to="/about">About Us</router-link>
            <router-link to="/referral" v-if="isLoggedIn && isShowReferralPage">Referral</router-link>
            <router-link to="/account" v-if="isLoggedIn">My Account</router-link>
            <router-link to="/login" v-if="!isLoggedIn">Login</router-link>
            <router-link to="/create" v-if="!isLoggedIn">Register</router-link>
        </nav>
  
      <!-- Mobile Menu Button -->
      <div class="md:hidden flex justify-end px-4">
        <button @click="toggleMenu" class="text-white focus:outline-none">
          <svg class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="2"
               viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
            <path d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>
      </div>
  
      <!-- Mobile Slide-in Menu with Backdrop -->
      <div v-if="isMenuOpen" class="fixed inset-0 z-50 flex">

            <!-- BACKDROP: fade in -->
            <transition name="fade" appear>
                <div class="absolute inset-0 bg-black opacity-40" @click="toggleMenu"></div>
            </transition>

            <!-- SLIDE-IN MENU: slightly delayed smooth entry -->
            <transition name="slide" appear>
                <div class="mobile-side-bar relative ml-auto w-64 h-full shadow-lg p-6 z-50">
                    <div class="flex justify-between items-center mb-6">
                      <h2 class="text-xl text-white">Menu</h2>
                      <button @click="toggleMenu" class="text-white p-1 rounded">
                          <svg class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="2"
                              viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M6 18L18 6M6 6l12 12"/>
                          </svg>
                      </button>
                    </div>
                    <nav class="flex flex-col space-y-4 text-lg text-white">
                      <router-link to="/" @click.native="toggleMenu">Home</router-link>
                      <router-link to="/spec-builder" v-if="isLoggedIn && isShowSpecBuilderPage" @click.native="toggleMenu">Spec Builder</router-link>
                      <router-link to="/escrow" v-if="isLoggedIn && isShowEscrowPage" @click.native="toggleMenu">Escrow</router-link>
                      <router-link to="/about" @click.native="toggleMenu">About Us</router-link>
                      <router-link to="/referral" v-if="isLoggedIn && isShowReferralPage" @click.native="toggleMenu">Referral</router-link>
                      <router-link to="/account" v-if="isLoggedIn" @click.native="toggleMenu">My Account</router-link>
                      <router-link to="/login" v-if="!isLoggedIn" @click.native="toggleMenu">Login</router-link>
                      <router-link to="/create" v-if="!isLoggedIn" @click.native="toggleMenu">Register</router-link>
                    </nav>
                </div>
            </transition>
       </div>
  
      <p>
        What we do best is 3D architetcure and design valuation analysis, with over 30 years of experience behind every analysis.
      </p>
    </header>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isMenuOpen: false,
        isDesktop: window.innerWidth >= 768
      }
    },
    computed: {
      isShowReferralPage() {
        return !['homeowner', 'homeowner_3d_replacement'].includes(this.$store.state.user.userRole)
      },
      isShowEscrowPage() {
        return ['product_supplier', 'subcontrator', 'vdc_partner', 'spec_build_partnership', 'realtor'].includes(this.$store.state.user.userRole)
      },
      isShowSpecBuilderPage() {
        return ['spec_build_partnership', 'realtor'].includes(this.$store.state.user.userRole)
      },
      is5Pages() {
        return ['product_supplier', 'subcontrator', 'vdc_partner'].includes(this.$store.state.user.userRole)
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
        this.$router.push('/').catch(() => {});
      },
      toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
      },
      handleResize() {
        this.isDesktop = window.innerWidth >= 768;
        if (this.isDesktop) this.isMenuOpen = false;
      }
    },
    mounted() {
      window.addEventListener('resize', this.handleResize);
    },
    destroyed() {
      window.removeEventListener('resize', this.handleResize);
    },
    watch: {
        isMenuOpen(val) {
            document.body.style.overflow = val ? 'hidden' : '';
        }
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
        grid-template-columns: repeat(3, auto);
    }
    &.with-4-pages {
        grid-template-columns: repeat(4, auto);
    }
    &.with-5-pages {
        grid-template-columns: repeat(5, auto);
    }
    &.with-6-pages {
        grid-template-columns: repeat(6, auto);
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

/* Fade animation for backdrop */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

/* Slide-in for menu drawer */
.slide-enter-active, .slide-leave-active {
  transition: transform 0.3s ease-in-out;
}
.slide-enter, .slide-leave-to {
  transform: translateX(100%);
}
</style>