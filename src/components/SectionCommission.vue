<template>
    <section class="section block border border-gray-200 focus:outline-hidden dark:border-neutral-700">
            <div class="relative flex items-center overflow-hidden">
                <div class="grow p-4 ms-32 sm:ms-48">
                <div class="min-h-24 flex flex-col justify-center">
                    <h3 class="font-semibold text-gray-800 dark:text-neutral-300">
                        Your Commissions Escrow Status
                    </h3>
                    <div class="px-2 py-4 sm:px-6 lg:px-4 lg:py-6 mx-auto">
                        <!-- Grid -->
                        <div class="grid sm:grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-6">
                            <!-- Card -->
                            <div class="flex flex-col bg-white border border-gray-200 shadow-2xs rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
                                <div class="p-4 md:p-5">
                                    <div class="flex items-center gap-x-2">
                                    <p class="text-md text-gray-600 dark:text-neutral-500">
                                        Project Name
                                    </p>
                                    </div>

                                    <div class="mt-1 flex items-center gap-x-2">
                                    <h3 class="text-md sm:text-xl font-medium text-gray-800 dark:text-neutral-200">
                                        VDC 2741
                                    </h3>
                                    </div>
                                </div>
                            </div>
                            <!-- End Card -->

                            <!-- Card -->
                            <div class="flex flex-col bg-white border border-gray-200 shadow-2xs rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
                                <div class="p-4 md:p-5">
                                    <div class="flex items-center gap-x-2">
                                        <p class="text-md text-gray-600 dark:text-neutral-500">
                                            Commissions
                                        </p>
                                    </div>

                                    <div class="mt-1 flex items-center gap-x-2">
                                        <h3 class="text-md sm:text-xl font-medium text-gray-800 dark:text-neutral-200">
                                            <span class="mr-4">{{commissionPercentage}}%</span>
                                            <span>{{commissionAmount}}</span>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                            <!-- End Card -->

                            <!-- Card -->
                            <div class="flex flex-col bg-white border border-gray-200 shadow-2xs rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
                                <div class="p-4 md:p-5">
                                    <div class="flex items-center gap-x-2">
                                    <p class="text-md text-gray-600 dark:text-neutral-500">
                                        Escrow Payout Date <strong class="text-red-600">*</strong>
                                    </p>
                                    </div>

                                    <div class="mt-1 flex items-center gap-x-2">
                                    <h3 class="text-md sm:text-xl font-medium text-gray-800 dark:text-neutral-200">
                                        May 1, 2025
                                    </h3>
                                    </div>
                                </div>
                            </div>
                            <!-- End Card -->
                        </div>
                        <!-- End Grid -->
                        <div class="my-2">
                            <strong class="text-red-600">*</strong>15-30 days after contract signed
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
</template>

<script>
import { formatCurrency, formatDecimal } from './../lib/utils';
export default {
    data() {
        return {
            commissionPercentage: 0.75,
            commissionAmount: 0
        }
    },
    mounted() {
        this.$root.$on('calculate_commission', (totalCost) => {
            this.calculateCommission(totalCost);
        });
        this.calculateCommission(this.$store.state.user.metadata.totalCost);
    },
    methods: {
        calculateCommission(totalCost) {
            this.commissionAmount = formatCurrency(totalCost * this.commissionPercentage / 100);
        }
    }
}
</script>