<template>
    <section class="about-section">
            <div class="bg-white rounded-xl shadow-xs p-4 sm:p-7 dark:bg-neutral-900">
                <div class="text-center mb-5">
                </div>
                <SectionCommission :commissionPercentage="commissionPercentage" :commissionAmount="commissionAmount" />
                <div class="md:flex font-bold">
                    <h4 class="">Your Estimated Commission: </h4>
                    <div class="font-bold text-vdc-secondary-color">
                        <span class="mx-2">{{commissionPercentage}}%</span> <span>{{commissionAmount}}</span>
                    </div>
                </div>
            </div>
    </section>
</template>

<script>
import SectionCommission from '../components/SectionCommission.vue';
import { formatCurrency } from '../lib/utils';
export default {
    components: { SectionCommission },
    data() {
        return {
            commissionPercentage: this.$root.sharedData.commissionPercentage,
            commissionAmount: null
        }
    },
    mounted() {
    },
    methods: {
        calculateCommission(totalCost) {
            this.commissionAmount = formatCurrency(totalCost * this.commissionPercentage / 100);
        }
    },
    beforeRouteEnter(to, from, next) {        
        next(vm => {
            vm.calculateCommission(vm.$root.sharedData.totalCost);
        })
    }
}
</script>