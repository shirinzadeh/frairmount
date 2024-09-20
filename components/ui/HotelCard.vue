<template>
  <div class="bg-emerald-600 shadow-lg rounded-lg overflow-hidden flex flex-col sm:flex-row max-w-6xl mx-auto transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] group">
    <div class="w-full sm:w-1/3  relative overflow-hidden grid items-center">
      <NuxtImg
        :src="hotel.image"
        :alt="hotel.name"
        class="w-full h-24 sm:h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        sizes="sm:50vw md:400px"
        loading="lazy"
      />
      <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
    </div>
    <div class="w-full sm:w-2/3 p-4 sm:p-6 flex flex-col justify-between relative">
      <div>
        <h2 class="text-2xl sm:text-3xl font-bold mb-3 text-white group-hover:text-yellow-300 transition-colors duration-300">{{ hotel.name }}</h2>
        <p class="text-sm sm:text-base text-gray-200 mb-4">{{ hotel.description }}</p>
        <div class="flex items-center mb-4">
          <span v-for="i in 5" :key="i" :class="{ 'text-yellow-400': i <= hotel.rating, 'text-gray-400': i > hotel.rating }">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </span>
          <span class="text-gray-200 text-sm ml-2">({{ hotel.reviews }} reviews)</span>
        </div>
      </div>
      <div class="flex justify-between items-center mt-4">
        <button
          @click="$emit('view-details', hotel)"
          class="bg-yellow-600 text-white px-4 py-1 rounded-lg transition-colors duration-300 hover:bg-yellow-400 font-semibold"
        >
          View Details
        </button>
        <NuxtLink 
          :to="hotel.link" 
          class="bg-emerald-900 text-white px-6 py-3 rounded-lg transition-colors duration-300 hover:bg-emerald-400 font-semibold flex items-center"
        >
          <span>Visit Hotel</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  hotel: {
    type: Object,
    required: true
  }
})

defineEmits(['view-details'])
</script>