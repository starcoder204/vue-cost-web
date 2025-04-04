<template>
    <div class="login-container">
        <section class="login-section">
            <div class="input-group">
                <input v-model="email" type="email" id="email" placeholder="Email" />
            </div>
            <div class="input-group">
                <input v-model="password" type="password" id="password" placeholder="Password" />
            </div>
            <button @click="handleLogin">Login</button>
        </section>
        <div v-if="isLoading" class="loading-overlay">
            Waiting...
        </div>
    </div>
</template>

<script>
import { auth } from './../lib/firebase';  // Assuming you export auth from firebase.js
import { signInWithEmailAndPassword } from 'firebase/auth';
export default {
    data() {
        return {
            email: '',
            password: '',
            isLoading: false,
        }
    },
    methods: {
        handleLogin() {
            if (this.email != '' || this.password != '') {
                this.isLoading = true;
                signInWithEmailAndPassword(auth, this.email, this.password)
                .then((userCredential) => {
                    // Successful login
                    this.isLoading = false;
                    const user = userCredential.user;
                    this.$store.dispatch('login', { name: user.displayName, email: user.email });
                    this.$emit('login-callback');
                })
                .catch((error) => {
                    console.log(error.message)
                    this.isLoading = false;
                    alert("Error: " + error.message);
                });
            }
        }
    }
}
</script>

<style scoped>
.loading-overlay {
  position: fixed; /* Positioning relative to the viewport */
  top: 0;
  left: 0;
  width: 100vw; /* Full viewport width */
  height: 100vh; /* Full viewport height */
  display: flex;
  align-items: center; /* Vertical centering */
  justify-content: center; /* Horizontal centering */
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
  color: white;
  font-size: 20px;
  z-index: 1000; /* Make sure it covers other content */
}
</style>