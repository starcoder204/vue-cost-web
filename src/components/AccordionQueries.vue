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
          class="px-4 py-3 bg-white text-gray-700"
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
            title: '1. Can I afford to rebuild after a fire',
            content: `Underinsured wildfire property owners will understand how they can rebuild by focusing on on the “ Valuation of the new build” by entering their insurance payout into the VDC+ Valution App`,
          },
          {
            title: '2. Will my property have positive equity when done',
            content: `Why the “ Owner Representative for Owner Builders Services “ rebuilding workflow is the best way to rebuild after a wildfire`,
          },
          {
            title: '3. Can I build a structure with materials that won’t burn or are highly non flammable',
            content: `Owner Representative contracts are more common in very high end or commercial real estate projects, we believe it the best solution for underinsured rebuilding, we make it affordable for wildfire owners`,
          },
          {
              title: '4. Can I get a reasonable insurance policy for my new home when done',
              content: `You can build a new with concrete and steel home structure that wont burn with high end features`
          },
          {
              title: '5. Is hiring a General Contractor the best way to rebuild in a wildfire area',
              content: `Home insurance after you rebuild should be a priority before you build, our ICF Structures with concrete and steel walls, floors and roofs give you a far better odds for getting insurance than others building wood structures`
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
  