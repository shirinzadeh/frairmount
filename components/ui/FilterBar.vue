<template>
    <div class="mb-8">
      <h2 class="text-2xl font-semibold mb-4">Filter Hotels</h2>
      <div class="flex items-center space-x-4">
        <label>Minimum Rating:</label>
        <select v-model="selectedRating" @change="updateFilter" class="bg-gray-700 text-white rounded px-2 py-1">
          <option value="0">All</option>
          <option value="3">3+ Stars</option>
          <option value="4">4+ Stars</option>
          <option value="5">5 Stars</option>
        </select>
      </div>
    </div>
  </template>
  
  <script setup>
  
  const selectedRating = ref(0)
  const emit = defineEmits(['filter'])
  
  const updateFilter = () => {
    emit('filter', parseInt(selectedRating.value))
  }
  </script>