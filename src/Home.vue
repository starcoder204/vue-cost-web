<template>
  <div class="container">
        <header>
            <h1 class="main-title" @click="mainTitleClicked()">VDC Studio ICF Cost Analysis App</h1>
            <h1 class="about-title" @click="aboutTitleClicked()">About Us</h1>
            <h1 v-if="!this.$store.state.user.isLoggedIn" class="login-title" id="login_title" @click="loginSectionVisible = true">Login</h1>
            <h1 v-if="this.$store.state.user.isLoggedIn" class="logout-title" id="logout_title" @click="logoutClicked">Logout</h1>
        </header>

        <Login v-if="!this.$store.state.user.isLoggedIn && loginSectionVisible" />

        <About v-if="aboutSectionVisible" />

        <div v-if="mainSectionVisible" class="main-container">
            <RedioSection />
            
            <div class="input-container">
                <section class="input-section">
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
                    <br>
                    <div>*Our ICF cost analysis app values are based on a 5000 sf home with a $1000 a sf recommended cost to maximize the appraised value of your home in the Pacific Palisades</div>
                    
                </section>
            </div>
            
            <section v-if="resultSectionVisible" class="results-section">
                <h2>Palisades recommended bank appraisal goal is $1200 a sf . Positive equity is achievable with the VDC Studio Design-Build solution since 2001.</h2>
    
                <div class="comparison-summary">
                    <div class="comparison-item">
                        <span>Banks Estimated Value of finished home:</span>
                        <span id="estimated-value">$0</span>
                    </div>
                    <div class="comparison-item">
                        <span>Actual Total Construction Cost:</span>
                        <span id="actual-total">$0</span>
                    </div>
                    <div class="comparison-item">
                        <span>Net Equity:</span>
                        <span id="net-equity">$0</span>
                    </div>
                </div>
                
                <p>We offer three options to rebuild your property with VDC Studio, For the spec builder option you will need a invitation to view the cost analysis, please email <a href="mailto:manager@vdc-bim.team">manager@vdc-bim.team</a> if you're a real estate developer.</p>
                <div class="tabs-container">
                    <div class="tabs">
                        <button class="tab-btn" @click="activeTab = 'owner_rep'" :class="{ 'active': activeTab == 'owner_rep' }"  data-tab="owner-rep" id="ower_rep_btn">Owner Rep</button>
                        <button class="tab-btn" @click="activeTab = 'gc'" :class="{ 'active': activeTab == 'gc' }" data-tab="gc" id="gc_btn">Traditional GC</button>
                        <button class="tab-btn" @click="activeTab = 'spec_builder'" :class="{ 'active': activeTab == 'spec_builder' }" data-tab="spec-builder" id="spec_builder_btn">Spec Builder</button>
                    </div>

                    <div v-for="(tab, index) in resultTabs" :key="index" v-show="activeTab == tab.id" class="tab-content active" id="owner-rep-tab">
                        <h3>{{ tab.title }}</h3>
                        <ul class="result-list" id="owner-rep-results">
                            <li v-for="(item, index) in tab.result.lineItems" :key="index">
                                <span>{{`${index + 1}. ${item.item}`}}</span>
                                <span :class="item.cost < 0 ? 'negative' : 'zero'">{{item.cost == 0 ? item.cost_display : formatCurrency(item.cost)}}</span>
                            </li>
                        </ul>
                        <div class="totals">
                            <div class="total-item">
                                <span>Actual Total Construction Cost:</span>
                                <span id="owner-rep-total-cost">{{formatCurrency(tab.result.totalCost)}}</span>
                            </div>
                            <div class="total-item">
                                <span>Actual Cost per Sq. foot:</span>
                                <span id="owner-rep-cost-per-sqft">{{formatDecimal(tab.result.costPerSquareFoot)}}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
import Login from './components/Login.vue';
import About from './components/About.vue';
import RedioSection from './components/RedioSection.vue';
import { validationConfig } from './config/validationConfig';
import { validateInput, calculateGCWorkflow, calculateOwnerRepWorkflow, calculateSpecBuilderWorkflow, formatCurrency, formatDecimal } from './lib/utils';
export default {
  components: { Login, About, RedioSection },
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
        gcResults: null,
        ownerRepResults: null,
        specBuilderResults: null,
        resultTabs: [
            { 
                id: 'owner_rep',
                result: null,
                title: 'VDC + Owner Rep Workflow'
            },
            { 
                id: 'gc',
                result: null,
                title: 'Traditional GC with Architect'
            },
            { 
                id: 'spec_builder',
                result: null,
                title: 'VDC + Owner Rep for Spec. Builders Partnership'
            }
        ],
        activeTab: 'owner_rep',
    }
  },
  created() {
    console.log(process.env.VUE_APP_apiKey)
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
    },
    validateTotalAreaInput() {
        return validateInput(document.getElementById('total-area'), validationConfig.totalArea);
    },
    validateCostPerSqftInput() {
        return validateInput(document.getElementById('cost-per-sqft'), validationConfig.costPerSqft);
    },
    formatCurrency(amount) {
        return formatCurrency(amount);
    },
    formatDecimal(amount) {
        return formatDecimal(amount);
    },
    handleTabBtnClicked(event) {
        console.log(event)
    },
    calculateAndDisplayResults() {
        if (!this.validateTotalAreaInput() || !this.validateCostPerSqftInput()) {
            return;
        }
        this.resultSectionVisible = true;

        // Get input values
        const totalHouseArea = this.totalAreaInput;
        const costPerSqft = this.costPerSqftInput || validationConfig.costPerSqft.defaultValue;
        const targetAppraisalPerSF = this.targetAppraisalInput;

        // Calculate results for both workflows
        this.resultTabs[0].result = calculateGCWorkflow(totalHouseArea, costPerSqft);
        this.resultTabs[1].result = calculateOwnerRepWorkflow(totalHouseArea, costPerSqft);
        this.resultTabs[2].result = calculateSpecBuilderWorkflow(totalHouseArea, costPerSqft);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
