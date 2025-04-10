<template>
    <section class="input-section">
        <div v-if="this.$store.state.user.role === 'non-industry-sales'" class="md:flex font-bold justify-end">
            <h4 class="">Your Estimated Commission: </h4>
            <div class="font-bold text-vdc-secondary-color">
                <span class="mx-2">{{commissionPercentage}}%</span> <span>{{commissionAmount}}</span>
            </div>
        </div>
        <h2>Enter your values:</h2>
        <div class="form-grid">
            <div class="input-group">
                <label for="total-area">Total House Area (sq ft)*</label>
                <input v-model="totalAreaInput" type="number" @input="validateTotalAreaInput()" id="total-area"
                    placeholder="Enter area..." min="0">
            </div>
            <div class="input-group">
                <label for="cost-per-sqft">Cost Per Square Foot ($)*</label>
                <input v-model="costPerSqftInput" type="number" @input="validateCostPerSqftInput()"
                    id="cost-per-sqft" placeholder="Enter cost..." min="0">
            </div>
            <div class="input-group">
                <label for="target-appraisal-per-sf">Target Appraisal Per SF*</label>
                <input type="number" v-model="targetAppraisalInput" id="target-appraisal-per-sf"
                    placeholder="Enter area..." min="0" value="1200">
            </div>
            <div class="input-group">
                <label>Total Insurance Recovery Payout</label>
                <input type="number" v-model="totalInsurancePayoutInput" placeholder="Enter cost..." min="0"
                    value="0">
            </div>
        </div>
        <div class="input-group" style="margin-top: 1rem">
            <label>Estimated Extended Insurance Coverage</label>
            <input type="number" v-model="extendedInsuranceCoverageInput" placeholder="Enter cost..." min="0"
                value="0">
        </div>
        <button id="calculate-btn" @click="calculate">Calculate</button>
        <div>
            *Our ICF cost analysis app values are based on a 5000 sf home with a $1000 a sf recommended cost to
            maximize the appraised value of your home in the Pacific Palisades.
        </div>
        <p>
            For 30 years, fireproof ICF blocks is what we design and build with, for high value and your
            families safety
        </p>
    </section>
</template>

<script>
import { validationConfig } from '../config/validationConfig';
import { validateInput, formatCurrency } from '../lib/utils';
export default {
    props: [ 'defaultCostPerSqftInput' ],
    data() {
        return {
            totalAreaInput: 5000,
            costPerSqftInput: this.defaultCostPerSqftInput,
            targetAppraisalInput: 1200,
            totalInsurancePayoutInput: 0,
            extendedInsuranceCoverageInput: 0,
            commissionPercentage: 0.75,
            commissionAmount: 0
        }
    },
    mounted() {
        this.calculate();
        this.$nextTick(() => {
            const metaData = this.$store.state.user.metadata;
            this.commissionAmount = formatCurrency(metaData.totalCost * this.commissionPercentage / 100);
        })
    },
    methods: {
        validateTotalAreaInput() {
            return validateInput(document.getElementById('total-area'), validationConfig.totalArea);
        },
        validateCostPerSqftInput() {
            return validateInput(document.getElementById('cost-per-sqft'), validationConfig.costPerSqft);
        },
        calculate() {
            if (!this.validateTotalAreaInput() || !this.validateCostPerSqftInput()) {
                return;
            }
            const params = { 
                totalAreaInput: this.totalAreaInput,
                costPerSqftInput: this.costPerSqftInput || validationConfig.costPerSqft.defaultValue,
                targetAppraisalInput: this.targetAppraisalInput,
                totalInsurancePayoutInput: this.totalInsurancePayoutInput,
                extendedInsuranceCoverageInput: this.extendedInsuranceCoverageInput,
            }
            this.$emit('calculate', params)
        }
    }
}
</script>
<style lang="scss" scoped>
.input-section {
    h2 {
        width: 100%;
    }
}
</style>