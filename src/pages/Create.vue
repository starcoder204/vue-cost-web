<template>
    <section class="section">
        <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div class="max-w-xl mx-auto">
                <form>
                    <div class="grid gap-4 lg:gap-6">
                        <div class="input-group">
                            <label for="business-name" class="block mb-2 text-gray-700 font-medium dark:text-white">Business name who referred you <strong class="text-red-600">*</strong></label>
                            <input type="email" name="hs-work-email-hire-us-2" id="business-name" autocomplete="business-name" class="py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
                        </div>

                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                            <div class="input-group">
                                <label for="hs-firstname-hire-us-2" class="block mb-2 text-gray-700 font-medium dark:text-white">First Name</label>
                                <input type="text" name="hs-firstname-hire-us-2" id="hs-firstname-hire-us-2" class="py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
                            </div>

                            <div class="input-group">
                                <label for="hs-lastname-hire-us-2" class="block mb-2 text-gray-700 font-medium dark:text-white">Last Name</label>
                                <input type="text" name="hs-lastname-hire-us-2" id="hs-lastname-hire-us-2" class="py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
                            </div>
                        </div>

                        <div class="input-group">
                            <label for="email" class="block mb-2 text-gray-700 font-medium dark:text-white">Email <strong class="text-red-600">*</strong></label>
                            <input type="email" name="hs-work-email-hire-us-2" id="email" autocomplete="email" class="py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
                        </div>

                        <!-- Grid -->
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                            <div class="input-group">
                                <label for="phone" class="block mb-2 text-gray-700 font-medium dark:text-white">Phone</label>
                                <input type="text" name="hs-work-email-hire-us-2" id="phone" autocomplete="email" class="py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
                            </div>
                            <div class="input-group">
                                <label for="role" class="block mb-2 text-gray-700 font-medium dark:text-white">Role <strong class="text-red-600">*</strong></label>

                                <select id="role" class="py-1.5 sm:py-2 px-3 pe-9 block w-full border-gray-200 shadow-2xs rounded-lg sm:focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
                                    <option selected>Select a role</option>
                                    <option>Homeowner</option>
                                    <option>Insurance Recovery Model</option>
                                    <option>Product Supplier</option>
                                    <option>Subcontractor</option>
                                    <option>VDC+Partner</option>
                                    <option>Spec Build Partnership</option>
                                </select>
                            </div>
                        </div>
                        
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                            <div class="input-group">
                                <label for="password" class="block mb-2 text-gray-700 font-medium dark:text-white">Password <strong class="text-red-600">*</strong></label>
                                <input type="text" name="hs-company-hire-us-2" id="password" class="py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
                            </div>

                            <div class="input-group">
                                <label for="confirm-password" class="block mb-2 text-gray-700 font-medium dark:text-white">Confirm Password <strong class="text-red-600">*</strong></label>
                                <input type="text" name="hs-company-website-hire-us-2" id="confirm-password" class="py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
                            </div>
                        </div>
                    </div>

                    <div class="mt-10 grid">
                        <button type="submit" class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">Submit</button>
                    </div>

                </form>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Create',
    data() {
        return {
            referredBusinessName: '',
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            password: '',
            confirmPassword: '',
        }
    },
    methods: {
        submit() {

        }
    }
}
</script>