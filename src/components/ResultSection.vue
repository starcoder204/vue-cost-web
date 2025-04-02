<template>
    <section class="results-section">
        <h2>Palisades recommended bank appraisal goal is $1200 a sf . Positive equity is achievable with the VDC Studio Design-Build solution since 2001.</h2>

        <div class="comparison-summary">
            <div class="comparison-item">
                <span>Banks Estimated Value of finished home:</span>
                <span id="estimated-value">{{ formatCurrency(this.estimatedValue) }}</span>
            </div>
            <div class="comparison-item">
                <span>Actual Total Construction Cost:</span>
                <span id="actual-total">{{ formatCurrency(this.actualTotal) }}</span>
            </div>
            <div class="comparison-item">
                <span>Net Equity:</span>
                <span id="net-equity" :class="{ 'positive': netEquity > 0, 'negative': netEquity < 0 }">{{ formatCurrency(this.netEquity) }}</span>
            </div>
        </div>
        
        <p>We offer three options to rebuild your property with VDC Studio, For the spec builder option you will need a invitation to view the cost analysis, please email <a href="mailto:manager@vdc-bim.team">manager@vdc-bim.team</a> if you're a real estate developer.</p>
        <div class="tabs-container">
            <div class="tabs">
                <button class="tab-btn" @click="tabButtonClicked('owner_rep')" :class="{ 'active': actTab == 'owner_rep' }"  data-tab="owner-rep">Owner Rep</button>
                <button class="tab-btn" @click="tabButtonClicked('gc')" :class="{ 'active': actTab == 'gc' }" data-tab="gc">Traditional GC</button>
                <button class="tab-btn" @click="tabButtonClicked('spec_builder')" :class="{ 'active': actTab == 'spec_builder' }" v-if="this.$store.state.user.isLoggedIn" data-tab="spec-builder">Spec Builder</button>
            </div>

            <div v-for="(key, index) in Object.keys(tabObj)" :key="index" v-show="actTab == key" class="tab-content active" id="owner-rep-tab">
                <h3>{{ tabObj[key].title }}</h3>
                <ul class="result-list" id="owner-rep-results">
                    <li v-for="(item, index) in tabObj[key].result.lineItems" :key="index">
                        <span>{{`${index + 1}. ${item.item}`}}</span>
                        <span :class="item.cost < 0 ? 'negative' : 'zero'">{{item.cost == 0 ? item.cost_display : formatCurrency(item.cost)}}</span>
                    </li>
                </ul>
                <div class="totals">
                    <div class="total-item">
                        <span>Actual Total Construction Cost:</span>
                        <span id="owner-rep-total-cost">{{formatCurrency(tabObj[key].result.totalCost)}}</span>
                    </div>
                    <div class="total-item">
                        <span>Actual Cost per Sq. foot:</span>
                        <span id="owner-rep-cost-per-sqft">{{formatDecimal(tabObj[key].result.costPerSquareFoot)}}</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { formatCurrency, formatDecimal } from './../lib/utils';
export default {
    props: ['tabObj', 'activeTab', 'estimatedValue', 'actualTotal', 'netEquity'],
    data() {
        return {
            actTab: this.activeTab,
        }
    },
    methods: {
        formatCurrency(amount) {
            return formatCurrency(amount);
        },
        formatDecimal(amount) {
            return formatDecimal(amount);
        },
        tabButtonClicked(tabId) {
            this.actTab = tabId;
            this.$emit('tab-button-click', tabId)
        },
    }
}
</script>