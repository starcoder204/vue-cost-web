<template>
    <section class="about-section">
        <div class="max-w-2xl sm:px-6 lg:px-8 lg:py-8 mx-auto">
            <div class="bg-white rounded-xl shadow-xs mb-5 dark:bg-neutral-900">
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

            <form hanldeSubmit>
                <div class="grid gap-3 lg:gap-3">
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                        <div class="input-group">
                            <label for="hs-firstname-hire-us-2"
                                class="block mb-1 text-gray-700 font-medium dark:text-white">Referral Name</label>
                            <input v-model="referralName" type="text" required
                                name="hs-firstname-hire-us-2" id="hs-firstname-hire-us-2"
                                class="py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
                        </div>

                        <div class="input-group">
                            <label for="referralEmail" class="block mb-1 text-gray-700 font-medium dark:text-white">Referral Email</label>
                            <input v-model="referralEmail" type="email" name="hs-work-email-hire-us-2" id="referralEmail"
                                autocomplete="email"
                                class="py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
                        </div>
                    </div>

                    <div class="input-group">
                        <label for="hs-lastname-hire-us-2"
                            class="block mb-1 text-gray-700 font-medium dark:text-white">Project Name</label>
                        <input v-model="projectName" type="text" required
                            name="hs-lastname-hire-us-2" id="hs-lastname-hire-us-2"
                            class="py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
                    </div>

                    <div class="input-group">
                        <label for="serviceType" class="block mb-1 text-gray-700 font-medium dark:text-white">Service Type</label>
                        <select id="serviceType" v-model="serviceType" required
                            class="py-1.5 sm:py-2 px-3 pe-9 block w-full border-gray-200 shadow-2xs rounded-lg sm:focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
                            <option v-for="(option, index) in serviceTypesOptions" :key="index" :value="option.value">{{
                                option.label }}</option>
                        </select>
                    </div>
                    

                    <div class="input-group">
                        <label for="location" class="block mb-1 text-gray-700 font-medium dark:text-white">Location</label>
                        <select id="location" v-model="location" required
                            class="py-1.5 sm:py-2 px-3 pe-9 block w-full border-gray-200 shadow-2xs rounded-lg sm:focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
                            <option v-for="(option, index) in locationOptions" :key="index" :value="option.id">{{
                                option.name }}</option>
                        </select>
                    </div>
                    
                </div>
            </form>

            <div class="mt-5 flex justify-center gap-x-2">
                <button type="button" @click="hanldeSubmit"
                    class="py-1.5 sm:py-2 px-3 inline-flex items-center gap-x-2 text-md font-medium rounded-lg border border-transparent bg-blue-600 text-white focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                    Submit Referral
                </button>
            </div>
        </div>
        

        <div v-if="isLoading" class="loading-overlay">
            Waiting...
        </div>
    </section>
</template>

<script>
import { db, auth } from './../lib/firebase';
import { doc, updateDoc } from "firebase/firestore";
import { serviceTypesArray } from '../config/serviceTypesConfig';
import { countries } from '../config/locations';
export default {
    name: 'Referral',
    data() {
        return {
            referralName: '',
            projectName: '',
            referralEmail: '',
            serviceType: '',
            serviceTypesOptions: [{
                label: 'Select a role',
                value: ''
            }, ...serviceTypesArray],
            location: 840,
            locationOptions: countries,
            isLoading: false,
        }
    },
    created() {
    },
    methods: {
        async hanldeSubmit() {
            if (!this.referralName || !this.projectName || !this.referralEmail || !this.serviceType || !this.location) return;
        }
    }
}
</script>