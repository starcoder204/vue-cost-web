<template>
    <section class="section">
            <div class="bg-white rounded-xl shadow-xs p-4 sm:p-7 dark:bg-neutral-900">
                <div class="text-left mb-5 text-lg font-bold">
                    <h4>Two Types Of Referrals</h4>
                    <div>1. Projects</div>
                    <div>2. Products</div>
                </div>
                <ReferralsList :referrals="referrals"/>
                <br/>
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
import ReferralsList from '../components/ReferralsList';
import { formatCurrency } from '../lib/utils';
import { db, auth } from '../lib/firebase';
export default {
    components: { SectionCommission, ReferralsList },
    data() {
        return {
            commissionPercentage: this.$root.sharedData.commissionPercentage,
            commissionAmount: null,
            referrals: [],
        }
    },
    async created() {
        try {
            const snapshot = await db.collection('referrals').where('referralEmail', '==', this.$store.state.user.email).get()
            this.referrals = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
        } catch (error) {
            console.error('Error fetching documents:', error)
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