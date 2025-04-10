<template>
    <div>
        <Login />
        <!-- Card -->
        <section class="section block border border-gray-200 focus:outline-hidden dark:border-neutral-700">
            <div class="relative flex items-center overflow-hidden">
                <div class="grow p-4 ms-32 sm:ms-48">
                <div class="min-h-24 flex flex-col justify-center">
                    <h3 class="font-semibold text-gray-800 dark:text-neutral-300">
                        Your Commissions Escrow Status
                    </h3>
                    <!-- <p class="mt-1 text-md dark:text-neutral-500 py-3">
                        Project Name: VDC 2741
                    </p>
                    <p class="mt-1 text-md dark:text-neutral-500 py-3">
                        Commissions: .75% $37,500
                    </p>
                    <p class="mt-1 text-md dark:text-neutral-500 py-3">
                        Escrow Payout Date: May 1, 2025
                    </p> -->
                    <!-- Card Section -->
                    <div class="max-w-[85rem] px-4 py-6 sm:px-6 lg:px-8 lg:py-10 mx-auto">
                        <!-- Grid -->
                        <div class="grid sm:grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-6">
                            <!-- Card -->
                            <div class="flex flex-col bg-white border border-gray-200 shadow-2xs rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
                                <div class="p-4 md:p-5">
                                    <div class="flex items-center gap-x-2">
                                    <p class="text-md text-gray-500 dark:text-neutral-500">
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
                                        <p class="text-md text-gray-500 dark:text-neutral-500">
                                            Commissions
                                        </p>
                                    </div>

                                    <div class="mt-1 flex items-center gap-x-2">
                                        <h3 class="text-md sm:text-xl font-medium text-gray-800 dark:text-neutral-200">
                                            <span class="mr-4">.75%</span><span>$37,500</span>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                            <!-- End Card -->

                            <!-- Card -->
                            <div class="flex flex-col bg-white border border-gray-200 shadow-2xs rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
                                <div class="p-4 md:p-5">
                                    <div class="flex items-center gap-x-2">
                                    <p class="text-md text-gray-500 dark:text-neutral-500">
                                        Escrow Payout Date
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
                    </div>
                    <!-- End Card Section -->
                </div>
                </div>
            </div>
        </section>
        <!-- End Card -->
    </div>
</template>

<script>
import Login from '../components/Login.vue';
export default {
    components: { Login }
}
</script>