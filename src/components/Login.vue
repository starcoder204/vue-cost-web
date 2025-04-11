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
import { auth, db } from './../lib/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc, setDoc } from "firebase/firestore";
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
                .then(async (userCredential) => {
                    // Successful login
                    const user = userCredential.user;
                    // Check Firestore profile
                    const userDocRef = doc(db, "users", user.uid);
                    const userDoc = await getDoc(userDocRef);
                    let userObj = { email: this.email };
                    if (!userDoc.exists()) {
                        // Create a basic profile or prompt user to fill in
                        userObj = {
                            ...userObj,
                            firstName: '',
                            lastName: '',
                            phoneNumber: '',
                            userRole: 'homeowner'
                        };
                        await setDoc(userDocRef, {
                            ...userObj,
                            createdAt: new Date()
                        });
                    } else {
                        const data = userDoc.data();
                        userObj = {
                            uid: user.uid,
                            email: this.email,
                            firstName: data.firstName,
                            lastName: data.lastName,
                            phoneNumber: data.phoneNumber,
                            userRole: data.userRole
                        };
                    }
                    await this.$store.dispatch('login', userObj);
                    this.isLoading = false;
                    this.$router.push('/').catch(()=>{});
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
</style>