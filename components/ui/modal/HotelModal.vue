<template>
    <div v-if="isOpen" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-emerald-800 dark:bg-emerald-900 rounded-lg p-8 max-w-2xl w-full mx-4">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-2xl font-bold text-white">{{ hotel.name }}</h2>
          <button @click="close" class="text-gray-400 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <NuxtImg
          :src="hotel.image"
          :alt="hotel.name"
          class="w-full h-64 object-cover rounded-lg mb-4"
          sizes="sm:100vw md:600px"
          loading="lazy"
        />
        <p class="text-gray-300 mb-4">{{ hotel.description }}</p>
        <div class="flex items-center mb-4">
          <span v-for="i in 5" :key="i" :class="{ 'text-gold-400': i <= hotel.rating, 'text-gray-400': i > hotel.rating }">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </span>
          <span class="text-gray-300 text-sm ml-2">({{ hotel.reviews }} reviews)</span>
        </div>
        <a :href="hotel.link" target="_blank" rel="noopener noreferrer" class="bg-gold-600 text-white px-6 py-3 rounded-lg block text-center hover:bg-gold-700 transition-colors duration-300">
          Book Now
        </a>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    isOpen: Boolean,
    hotel: Object,
  })
  
  const emit = defineEmits(['close'])
  
  const close = () => {
    emit('close')
  }
  </script>