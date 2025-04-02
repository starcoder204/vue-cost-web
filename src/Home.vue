<template>
  <div class="container">
        <Header
            @main-title-click="mainTitleClicked()"
            @about-title-click="aboutTitleClicked()"
            @login-click="loginSectionVisible = true"
            @logout-click="logoutClicked"
        />

        <Login v-if="!this.$store.state.user.isLoggedIn && loginSectionVisible" />

        <About v-if="aboutSectionVisible" />

        <div v-if="mainSectionVisible" class="main-container">
            <section class="section">
                <p><strong>Underinsurance Prevalence:</strong> Research indicates that a significant portion of homeowners are underinsured, with estimates suggesting that 74% to 75% of homeowners might not have adequate coverage to rebuild their homes after a disaster.</p>
                <br/>
                <p>
                    By front-loading the valuation analysis and using owner-representative cost controls, VDC STUDIO converts insurance limitations into structured equity growth – a financial necessity in wildfire-prone luxury markets where many of the underinsured homeowners never fully recover their property value after disasters.
                </p>
            </section>

            <section class="input-section">
                <div>
                    *Our ICF cost analysis app values are based on a 5000 sf home with a $1000 a sf recommended cost to maximize the
                    appraised value of your home in the Pacific Palisades.
                </div>
                <h2>Enter your values:</h2>
                <div class="input-group">
                    <label for="total-area">Total House Area (sq ft)*</label>
                    <input v-model="totalAreaInput" type="number" @input="validateTotalAreaInput()" id="total-area" placeholder="Enter area..." min="0">
                </div>
                <div class="input-group">
                    <label for="cost-per-sqft">Cost Per Square Foot ($)*</label>
                    <input v-model="costPerSqftInput" type="number" @input="validateCostPerSqftInput()" id="cost-per-sqft" placeholder="Enter cost..." min="0">
                </div>
                <div class="input-group" id="target_appraisal_input_group">
                    <label for="target-appraisal-per-sf">Target Appraisal Per SF*</label>
                    <input type="number" v-model="targetAppraisalInput" id="target-appraisal-per-sf" placeholder="Enter area..." min="0" value="1200">
                </div>
                <button id="calculate-btn" @click="calculateAndDisplayResults()">Calculate</button>
                
                <div v-if="resultSectionVisible" class="construction-desc">
                    <div>Understanding Your Rebuilding Options Navigating post-wildfire reconstruction can feel overwhelming.
                    We offer three clear paths tailored to your needs:</div>
                    <br>
                    <div><b>1. Traditional General Contractor & Architect:</b></div>
                    <div class="construction-desc-sub-block">
                        <div>Wood Structures and non fireproof construction</div>
                        <div class="construction-desc-sub-header">Most likely to produce negative property equity</div>
                        Compare industry-standard costs for conventional wood-frame rebuilding with our innovative, fire-resistant ICF (Insulated Concrete Form) construction. While wood remains common, our method prioritizes safety and durability in wildfire-prone areas.
                    </div>
                    <br>
                    <div><b>2. VDC+Owner Rep Design-Build Contract: </b></div>
                    <div class="construction-desc-sub-block">
                        <div class="construction-desc-sub-header">Produces high positive property equity</div>
                        Our recommended solution combines efficiency, cost savings, and premium quality for maximum property valuation. By eliminating general contractor overhead, we reinvest those funds into higher-grade materials and advanced planning tools like 3D virtual modeling. This approach reduces unexpected costs by up to 80% compared to traditional methods, while providing 24/7 remote site monitoring and expert guidance.
                    </div>
                    <br>
                    <div><b>3. Spec Builder or First-Time Builder Partnerships:</b></div>
                    <div class="construction-desc-sub-block">
                        <div>VDC+Teams has over 35 yrs of experience creating</div>
                        <div class="construction-desc-sub-header">maximum property valuations and profits</div>
                        New to construction? We partner with aspiring developers through limited-term agreements, hiring the most experienced local site superintendents and subcontractors. We will handle all architecture, engineering, material procurement and all construction documents needed for permits. Whether it’s your first project or you’re expanding your portfolio, we create tailored packages that mitigate risk and streamline compliance.
                    </div>                        
                </div>
                <br>
                <br>
                <p>
                    For 30 years, fireproof ICF blocks is what we design and build with, for high value and your families safety
                </p>                    
            </section>

            <ResultSection 
                v-if="resultSectionVisible"
                :tabObj="tabObj"
                :activeTab="activeTab"
                :estimatedValue="estimatedValue"
                :actualTotal="actualTotal"
                :netEquity="netEquity"
                @tab-button-click="watchHighlight"
            />

            <RadioSection/>
        </div>
    </div>
</template>

<script>
import Header from './components/Header.vue';
import Login from './components/Login.vue';
import About from './components/About.vue';
import RadioSection from './components/RadioSection.vue';
import ResultSection from './components/ResultSection.vue';
import { validationConfig } from './config/validationConfig';
import { validateInput, calculateGCWorkflow, calculateOwnerRepWorkflow, calculateSpecBuilderWorkflow } from './lib/utils';
export default {
  components: { Header, Login, About, RadioSection, ResultSection },
  name: 'Home',
  props: {
    msg: String
  },
  data() {
    return {
        mainSectionVisible: true,
        loginSectionVisible: false,
        aboutSectionVisible: false,
        resultSectionVisible: false,
        totalAreaInput: 5000,
        costPerSqftInput: 1000,
        targetAppraisalInput: 1200,
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
    }
  },
  created() {
  },
  methods: {
    mainTitleClicked() {
        this.mainSectionVisible = true;
        this.aboutSectionVisible = false;
    },
    aboutTitleClicked() {
        this.aboutSectionVisible = true;
        this.mainSectionVisible = false;
    },
    logoutClicked() {
        this.$store.dispatch('logout');
        if (this.activeTab == 'spec_builder') {
            this.resultSectionVisible = false;
            this.activeTab = 'owner_rep';
            this.$nextTick(() => {
                this.resultSectionVisible = true;
            })
        }
    },
    validateTotalAreaInput() {
        return validateInput(document.getElementById('total-area'), validationConfig.totalArea);
    },
    validateCostPerSqftInput() {
        return validateInput(document.getElementById('cost-per-sqft'), validationConfig.costPerSqft);
    },
    watchHighlight(tabId) {
        this.activeTab = tabId;
        const totalHouseArea = this.totalAreaInput;
        const costPerSqft = this.costPerSqftInput || validationConfig.costPerSqft.defaultValue;
        const targetAppraisalPerSF = this.targetAppraisalInput;
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
    },
    calculateAndDisplayResults() {
        if (!this.validateTotalAreaInput() || !this.validateCostPerSqftInput()) {
            return;
        }
        // Get input values
        const totalHouseArea = this.totalAreaInput;
        const costPerSqft = this.costPerSqftInput || validationConfig.costPerSqft.defaultValue;
        // Calculate results for both workflows
        this.tabObj['owner_rep'].result = calculateOwnerRepWorkflow(totalHouseArea, costPerSqft);
        this.tabObj['gc'].result = calculateGCWorkflow(totalHouseArea, costPerSqft);
        this.tabObj['spec_builder'].result = calculateSpecBuilderWorkflow(totalHouseArea, costPerSqft);
        this.watchHighlight(this.activeTab);
        this.resultSectionVisible = true;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
