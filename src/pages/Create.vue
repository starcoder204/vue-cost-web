<template>
    <section class="section">
        <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div class="max-w-xl mx-auto">

                <p v-if="error" class="text-red-600 text-center">{{ error }}</p>

                <div class="text-center my-6">
                    <p class="mt-1 text-gray-600 dark:text-neutral-400">
                        Call or text 415-314-7339 with questions
                    </p>
                </div>

                <form @submit.prevent="register">
                    <div class="grid gap-4 lg:gap-6">
                        <div class="input-group">
                            <label for="business-name" class="block mb-1 text-gray-700 font-medium dark:text-white">If applicable, please enter the name of business who referred you to us</label>
                            <input v-model="referredBusinessName" type="text" name="business-nam" id="business-name" autocomplete="business-name" class="py-2.5 sm:py-3 px-4 block w-full border-blue-400 rounded-lg sm:focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
                        </div>

                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                            <div class="input-group">
                                <label for="hs-firstname-hire-us-2" class="block mb-1 text-gray-700 font-medium dark:text-white">First Name <strong class="text-red-600">*</strong></label>
                                <input v-model="firstName" type="text" required name="hs-firstname-hire-us-2" id="hs-firstname-hire-us-2" class="py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
                            </div>

                            <div class="input-group">
                                <label for="hs-lastname-hire-us-2" class="block mb-1 text-gray-700 font-medium dark:text-white">Last Name <strong class="text-red-600">*</strong></label>
                                <input v-model="lastName" type="text" required name="hs-lastname-hire-us-2" id="hs-lastname-hire-us-2" class="py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
                            </div>
                        </div>

                        <div class="input-group">
                            <label for="email" class="block mb-1 text-gray-700 font-medium dark:text-white">Email <strong class="text-red-600">*</strong></label>
                            <input v-model="email" type="email" required name="hs-work-email-hire-us-2" id="email" autocomplete="email" class="py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
                        </div>

                        <div class="input-group">
                            <label for="phone" class="block mb-1 text-gray-700 font-medium dark:text-white">Phone <strong class="text-red-600">*</strong></label>
                            <input v-model="phoneNumber" type="text" required name="hs-work-email-hire-us-2" id="phone" autocomplete="email" class="py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
                        </div>

                        <div class="input-group">
                            <label for="role" class="block mb-1 text-gray-700 font-medium dark:text-white">Role <strong class="text-red-600">*</strong></label>

                            <select id="role" v-model="userRole" required class="py-1.5 sm:py-2 px-3 pe-9 block w-full border-gray-200 shadow-2xs rounded-lg sm:focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
                                <option v-for="(option, index) in roleOptions" :key="index" :value="option.value">{{ option.label }}</option>
                            </select>
                        </div>
                        
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                            <div class="input-group">
                                <label for="password" class="block mb-1 text-gray-700 font-medium dark:text-white">Password <strong class="text-red-600">*</strong></label>
                                <input v-model="password" type="password" required name="hs-company-hire-us-2" id="password" class="py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
                            </div>

                            <div class="input-group">
                                <label for="confirm-password" class="block mb-1 text-gray-700 font-medium dark:text-white">Confirm Password <strong class="text-red-600">*</strong></label>
                                <input v-model="confirmPassword" type="password" required name="hs-company-website-hire-us-2" id="confirm-password" class="py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
                            </div>
                        </div>
                    </div>

                    <div class="mt-10 grid">
                        <button type="submit" class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">Submit</button>
                    </div>

                </form>
            </div>
        </div>

        <div v-if="isLoading" class="loading-overlay">
            Waiting...
        </div>
    </section>
</template>

<script>
import { db, auth } from './../lib/firebase';
export default {
    name: 'Create',
    data() {
        return {
            referredBusinessName: '',
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            userRole: '',
            password: '',
            confirmPassword: '',
            error: '',
            isLoading: false,
            roleOptions: [{
                label: 'Select a role',
                value: ''
            }, {
                label: 'Homeowner, needing insurance recovery model',
                value: 'homeowner'
            }, {
                label: 'Product Supplier',
                value: 'product_supplier'
            }, {
                label: 'Subcontractor',
                value: 'subcontrator'
            }, {
                label: 'VDC+Partner',
                value: 'vdc_partner'
            }, {
                label: 'Spec Build Partnership',
                value: 'spec_build_partnership'
            }]
        }
    },
    methods: {
        async register() {
            this.error = '';
            this.isLoading = true;

            if (this.password !== this.confirmPassword) {
                this.error = "Passwords do not match.";
                return;
            }

            if (!this.userRole) {
                this.error = "User role is missing.";
                return;
            }

            try {
                const userCredential = await auth.createUserWithEmailAndPassword(this.email, this.password);
                const user = userCredential.user;

                const userData = {
                    referredBusinessName: this.referredBusinessName,
                    firstName: this.firstName,
                    lastName: this.lastName,
                    phoneNumber: this.phoneNumber,
                    userRole: this.userRole,
                    email: this.email,
                    createdAt: new Date()
                }

                // Save extended user info to Firestore
                await db.collection('users').doc(user.uid).set(userData);

                await this.$store.dispatch('login', { ...userData, uid: user.uid });
                this.isLoading = false;
                console.log('User registered:', user.uid);
                this.$router.push('/').catch(()=>{});
            } catch (err) {
                this.isLoading = false;
                console.error(err);
                this.error = err.message;
            }
        }
    }
}
</script>

<style lang="sass">
</style>