<template>
    <section class="about-section">
        <div class="bg-white rounded-xl shadow-xs p-4 sm:p-7 dark:bg-neutral-900">
            <div class="text-center mb-5">
                <h2 class="text-2xl md:text-3xl font-bold text-gray-800 dark:text-neutral-200">
                    Referral
                </h2>
            </div>
            <div>
                <p>
                    You can refer a wildfire rebuilding project or a product and if the referral gets to a signed
                    contract you will be paid via this referral escrow app.
                </p>
                <p>
                    Register here to start referring wildfire rebuilding projects for maximum design-build
                    valuation.
                </p>
                <p>
                    VDC+ Owner Rep for Owner Builder Design-Build Package referral is .75% of the total package (see
                    home page for the example 5000 sf home at $1000 per sf valuation and referral payout).
                </p>
                <p>
                    If your project referral is accepted by the VDC+ Team and the referred customer your escrow
                    account will have .75% of the total project cost.
                    VDC+ Products Referral, payout varies.
                </p>
            </div>
        </div>

        <form>
            <div class="grid gap-3 lg:gap-3">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                    <div class="input-group">
                        <label for="hs-firstname-hire-us-2"
                            class="block mb-1 text-gray-700 font-medium dark:text-white">First Name</label>
                        <input v-model="firstName" type="text" required :disabled="!isEditable"
                            name="hs-firstname-hire-us-2" id="hs-firstname-hire-us-2"
                            class="py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
                    </div>

                    <div class="input-group">
                        <label for="hs-lastname-hire-us-2"
                            class="block mb-1 text-gray-700 font-medium dark:text-white">Last Name</label>
                        <input v-model="lastName" type="text" required :disabled="!isEditable"
                            name="hs-lastname-hire-us-2" id="hs-lastname-hire-us-2"
                            class="py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
                    </div>
                </div>

                <div class="input-group">
                    <label for="email" class="block mb-1 text-gray-700 font-medium dark:text-white">Email</label>
                    <input v-model="email" type="email" disabled name="hs-work-email-hire-us-2" id="email"
                        autocomplete="email"
                        class="py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
                </div>

                <div class="input-group">
                    <label for="phone" class="block mb-1 text-gray-700 font-medium dark:text-white">Phone</label>
                    <input v-model="phoneNumber" type="text" :disabled="!isEditable" name="hs-work-email-hire-us-2"
                        id="phone" autocomplete="email"
                        class="py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
                </div>

                <div class="input-group">
                    <label for="role" class="block mb-1 text-gray-700 font-medium dark:text-white">Role</label>

                    <select id="role" v-model="userRole" required :disabled="!isEditable"
                        class="py-1.5 sm:py-2 px-3 pe-9 block w-full border-gray-200 shadow-2xs rounded-lg sm:focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
                        <option v-for="(option, index) in roleOptions" :key="index" :value="option.value">{{
                            option.label }}</option>
                    </select>
                </div>
            </div>
        </form>

        <div class="mt-5 flex justify-end gap-x-2">
            <button type="button" @click="isEditable = !isEditable"
                class="py-1.5 sm:py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-gray-200 text-gray-800 shadow-2xs hover:bg-gray-300 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700">
                {{ isEditable ? 'Cancel' : 'Edit' }}
            </button>
            <button type="button" @click="hanldeSave" :disabled="!isEditable"
                class="py-1.5 sm:py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                Save changes
            </button>
        </div>

        <div v-if="isLoading" class="loading-overlay">
            Waiting...
        </div>
    </section>
</template>

<script>
import { db, auth } from './../lib/firebase';
import { doc, updateDoc } from "firebase/firestore";
import { rolesArray } from '../config/userRolesConfig';
export default {
    name: 'Referral',
    data() {
        return {
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            userRole: '',
            roleOptions: [{
                label: 'Select a role',
                value: ''
            }, ...rolesArray],
            isEditable: false,
            isLoading: false,
        }
    },
    created() {
        const userObj = this.$store.state.user;
        this.firstName = userObj.firstName;
        this.lastName = userObj.lastName;
        this.email = userObj.email;
        this.phoneNumber = userObj.phoneNumber;
        this.userRole = userObj.userRole || '';
    },
    methods: {
        async hanldeSave() {
            if (!this.isEditable) return;
            this.isLoading = true;
            const userDocRef = doc(db, "users", this.$store.state.user.uid);
            try {
                const updatedData = {
                    firstName: this.firstName,
                    lastName: this.lastName,
                    phoneNumber: this.phoneNumber,
                    userRole: this.userRole
                }
                await updateDoc(userDocRef, updatedData);
                console.log("✅ User profile updated!");
                await this.$store.dispatch('update', updatedData);
                this.isEditable = !this.isEditable;
                this.isLoading = false;
            } catch (error) {
                this.isLoading = false;
                console.error("❌ Error updating user:", error);
            }
        }
    }
}
</script>