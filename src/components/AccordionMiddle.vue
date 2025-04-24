<template>
    <div class="max-w-4xl mx-auto">
      <div
        v-for="(section, index) in sections"
        :key="index"
        class="my-1"
      >
        <button
          @click="toggleSection(index)"
          class="w-full flex items-center justify-between px-4 py-3 bg-gray-100 hover:bg-gray-200 focus:outline-none"
        >
          <h3 class="text-left text-gray-700">
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
          class="px-8 py-4 bg-white text-gray-700"
        >
          <p v-html="section.content" class="space-y-2"></p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        activeIndex: null,
        sections: [
          {
            title: 'VDC+ ICCF-ICF Structural Shell Packages to choose from',
            content: `1. 9 Foot Ceilings, Medium Glass, 8 Foot Doors
                        ( $750 SF ) <br>
                      2. 10 Foot Ceilings, Mid-High Glass Package, 8-9 Foot Doors
                        ( $850 SF ) <br>
                      3. 12 Foot Ceilings, Max Glass-High End Package 12 Foot floor to ceiling Doors and Windows headers to the ceiling 
                        ( $1000 SF ) `
          },
        //   {
        //     title: 'What is a “ Structural Shell Package “?',
        //     content: `The Structural Shell Package is our ICCF-ICF preapproved house design for Los Angeles wildfire rebuilding. The shell is the structure built ready for close inspection. This is what is includes
        //                 1. Foundation, waterproofed <br>
        //                 2. ICCF-ICF Exterior Walls poured to the roof <br>
        //                 3. All exterior doors and windows installed <br>
        //                 4. Roof is waterproof <br>
        //                 5. Temporary safety rails at exterior decks and roof. <br>
        //                 <br>
        //                 Shell contract is 100% complete. The project is ready for the next wave of construction by others.
        //                 By others, the home is ready for interior walls, <br>
        //                 3. 9 Foot Ceilings, Medium Glass <br>
        //                 4. 10 Foot Ceilings, Mid-High Glass Package <br>
        //                 5. 12 Foot Ceilings, Max Glass-High End Package <br>`
        //   },
        //   {
        //     title: 'VDC+',
        //     content: `VDC+ is offering the ICCF-ICF Structural Package because well know if the homeowner has a choice between rebuilding with flammable wood or concrete and steel the choice is obvious. So we are offering a unique choice to solve this problem. The building industry is failing the homeowners who must be able to insure the new home when built. Its a fact that you may not get insurance for a wood in the Pacifici palisades this year of 5 years from now.`,
        //   },
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
  