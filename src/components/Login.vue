<template>
    <div class="login-container">
        <section class="login-section">
            <div class="input-group">
                <input v-model="email" type="email" id="email" placeholder="Email" />
            </div>
            <div class="input-group">
                <input v-model="password" type="password" id="password" placeholder="Password" />
            </div>
            <button @click="handleLogin" id="login-btn">Login</button>
        </section>
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
        }
    },
    methods: {
        handleLogin() {
            if (this.email != '' || this.password != '') {
                signInWithEmailAndPassword(auth, this.email, this.password)
                .then((userCredential) => {
                    // Successful login
                    const user = userCredential.user;
                    this.$store.dispatch('login', { name: user.displayName, email: user.email });
                })
                .catch((error) => {
                    console.log(error.message)
                    alert("Error: " + error.message);
                });
            }
        }
    }
}
</script>