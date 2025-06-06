<template>
    <div>
        <div class="main-container">
            <SectionTop />
            
            <section class="section">
                <h3 class="text-black py-3">We answer these questions for you after a wildfire takes a property.</h3>
                <AccordionQueries />
            </section>
            
            <InputSection
                :defaultCostPerSqftInput="1000"
                @calculate="calculateAndDisplayResults"
            />

            <section class="section">
                <!-- <h3 class="text-black py-3">VDC+ ICCF-ICF Structural Shell Packages to choose from</h3> -->
                <AccordionMiddle />
            </section>            

            <ResultSection
                :tabObj="tabObj"
                :activeTab="activeTab"
                :estimatedValue="estimatedValue"
                :actualTotal="actualTotal"
                :netEquity="netEquity"
                :totalInsurancePayoutAmout="totalInsurancePayoutAmout"
                :extendedInsuranceCoverageAmount="extendedInsuranceCoverageAmount"
                @tab-button-click="watchHighlight"
            />

            <SectionDesc />
            <RadioSection />
            <ScrollToTop />
        </div>
    </div>
</template>

<script>
import SectionTop from '../components/SectionTop.vue';
import SectionDesc from '../components/SectionDesc.vue';
import AccordionQueries from '../components/AccordionQueries.vue';
import AccordionMiddle from '../components/AccordionMiddle.vue';
import InputSection from '../components/InputSection.vue';
import ResultSection from '../components/ResultSection.vue';
import RadioSection from '../components/RadioSection.vue';
import ScrollToTop from '../components/ScrollToTop.vue';
import { calculateGCWorkflow, calculateOwnerRepWorkflow, calculateSpecBuilderWorkflow } from '../lib/utils';
export default {
  components: { SectionTop, SectionDesc, AccordionQueries, AccordionMiddle, InputSection, ResultSection, RadioSection, ScrollToTop },
  name: 'Home',
  data() {
    return {
        inputsObj: null,
        tabObj: {
            owner_rep: {
                result: null,
                title: 'VDC + Owner Rep Workflow',
            },
            gc: {
                result: null,
                title: 'Traditional GC with Architect'
            },
            spec_builder: {
                result: null,
                title: 'VDC + Owner Rep for Spec. Builders Partnership'
            }
        },
        activeTab: 'owner_rep',
        estimatedValue: 0,
        actualTotal: 0,
        netEquity: 0,
        totalInsurancePayoutAmout: 0,
        extendedInsuranceCoverageAmount: 0,
    }
  },
  computed: {
  },
  created() {
  },
  mounted() {
  },
  methods: {    
    watchHighlight(tabId) {
        this.activeTab = tabId;
        const totalHouseArea = this.inputsObj.totalAreaInput;
        const costPerSqft = this.inputsObj.costPerSqftInput;
        const targetAppraisalPerSF = this.inputsObj.targetAppraisalInput;
        const result = this.tabObj[tabId].result;
        if (tabId == 'owner_rep') {
            this.estimatedValue = totalHouseArea * targetAppraisalPerSF;
            this.actualTotal = result.totalCost;
            this.netEquity = totalHouseArea * targetAppraisalPerSF - result.totalCost;
        }
        if (tabId == 'gc') {
            this.estimatedValue = totalHouseArea * costPerSqft;
            this.actualTotal = result.totalCost;
            this.netEquity = totalHouseArea * costPerSqft - result.totalCost;
        }
        if (tabId == 'spec_builder') {
            this.estimatedValue = totalHouseArea * targetAppraisalPerSF;
            this.actualTotal = result.totalCost;
            this.netEquity = totalHouseArea * targetAppraisalPerSF - result.totalCost;
        }
        this.totalInsurancePayoutAmout = this.inputsObj.totalInsurancePayoutInput;
        this.extendedInsuranceCoverageAmount = this.inputsObj.extendedInsuranceCoverageInput;
        this.$store.dispatch('save_total_code', this.actualTotal);
        this.$root.sharedData.totalCost = totalHouseArea * costPerSqft;
    },
    calculateAndDisplayResults(params) {
        this.inputsObj = params;
        // Get input values
        const totalHouseArea = this.inputsObj.totalAreaInput;
        const costPerSqft = this.inputsObj.costPerSqftInput;
        // Calculate results
        this.tabObj['owner_rep'].result = calculateOwnerRepWorkflow(totalHouseArea, costPerSqft);
        this.tabObj['gc'].result = calculateGCWorkflow(totalHouseArea, costPerSqft);
        this.tabObj['spec_builder'].result = calculateSpecBuilderWorkflow(totalHouseArea, costPerSqft);
        this.watchHighlight(this.activeTab);
    }
  }
}
</script>
