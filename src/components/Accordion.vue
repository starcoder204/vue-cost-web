<template>
    <div class="max-w-3xl mx-auto">
      <div
        v-for="(section, index) in sections"
        :key="index"
        class="my-1"
      >
        <button
          @click="toggleSection(index)"
          class="w-full flex items-center justify-between px-4 py-3 bg-gray-100 hover:bg-gray-200 focus:outline-none"
        >
          <h3 class="text-left font-semibold text-gray-700">
            {{ section.title }}
          </h3>
          <svg
            v-if="activeIndex === index"
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 text-gray-500 transform rotate-180 transition-transform duration-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 text-gray-500 transition-transform duration-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
  
        <div
          v-show="activeIndex === index"
          class="px-4 py-3 bg-white text-gray-700"
        >
          <p v-html="section.content" class="space-y-2"></p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TailwindAccordion',
    data() {
      return {
        activeIndex: null,
        sections: [
          {
            title: '1. Traditional General Contractor & Architect',
            content: `Wood Structures and non fireproof construction<br>
                      <a href="#" class="text-blue-600 underline">Most likely to produce negative property equity</a><br>
                      Compare industry-standard costs for conventional wood-frame rebuilding with our innovative, fire-resistant ICF (Insulated Concrete Form) construction. While wood remains common, our method prioritizes safety and durability in wildfire-prone areas.`,
          },
          {
            title: '2. VDC+Owner Rep Design-Build Contract',
            content: `<a href="#" class="text-blue-600 underline">Produces high positive property equity</a><br>
                      Our recommended solution combines efficiency, cost savings, and premium quality for maximum property valuation. By eliminating general contractor overhead, we reinvest those funds into higher-grade materials and advanced planning tools like 3D virtual modeling. This approach reduces unexpected costs by up to 80% compared to traditional methods, while providing 24/7 remote site monitoring and expert guidance.`,
          },
          {
            title: '3. Spec Builder or First-Time Builder Partnerships',
            content: `VDC+Teams has over 35 yrs of experience creating <br>
                      <a href="#" class="text-blue-600 underline">maximum property valuations and profits</a><br>
                      New to construction? We partner with aspiring developers through limited-term agreements, hiring the most experienced local site superintendents and subcontractors. We will handle all architecture, engineering, material procurement and all construction documents needed for permits. Whether it’s your first project or you’re expanding your portfolio, we create tailored packages that mitigate risk and streamline compliance.`,
          }
        ]
      };
    },
    methods: {
      toggleSection(index) {
        this.activeIndex = this.activeIndex === index ? null : index;
      }
    }
  };
  </script>
  