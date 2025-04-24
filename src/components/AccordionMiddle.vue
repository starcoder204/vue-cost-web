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
            title: 'What is a Structural Shell Package?',
            content: `A Structural Shell Package refers to a construction approach where the main structure and exterior envelope of a building are completed, making it weather-tight and ready for interior build-out. This typically includes the foundation, structural walls, roof, exterior doors and windows, but excludes interior finishes, walls, and systems. 
            The concept is often called “shell and core” or “core and shell” construction, and it’s widely used to provide a secure, flexible base that can be customized in later phases.
            For wildfire-prone areas like Los Angeles, using advanced materials such as ICCF (Insulated Composite Concrete Forms) or ICF (Insulated Concrete Forms) enhances fire resistance and structural resilience
            `
          },
          {
            title: 'Our LA Customized ICCF/ICF Structural Shell Package',
            content: `Our Structural Shell Package is an ICCF-ICF house design strategy tailored for Los Angeles wildfire rebuilding. The shell includes everything from the foundation to the roof, built to be ready for close-in inspection. Once complete, the house is watertight and prepared for interior walls and finishes.
                        <ul>
                          What’s Included:
                          <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&bull;Waterproofed foundation</li>
                          <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&bull;ICCF-ICF exterior walls poured to the roof</li>
                          <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&bull;All exterior doors and windows installed</li>
                          <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&bull;Waterproofed roof</li>
                          <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&bull;Temporary safety rails at exterior decks and roof</li>
                          <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&bull;No interior walls yet</li>
                        </ul>
                        The Shell contract delivers a 100% complete, weather-tight structure. Your home is now ready for the next phases of construction.
                        <br>
                        Summary:
                        A Structural Shell Package provides a robust, fire-resistant building envelope, ensuring your home is protected and ready for interior customization—an ideal solution for rebuilding in wildfire-prone regions.`
          },
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
  