<template>
  <header class="bg-emerald-800 text-white py-4 shadow-md">
    <div class="container mx-auto px-4 flex flex-wrap justify-between items-center">
      <NuxtLink to="/" class="text-2xl font-bold mb-2 sm:mb-0">Casino Hotels</NuxtLink>
      <div class="w-full sm:w-auto flex items-center justify-between sm:justify-end space-x-4">
        <div class="relative">
          <input
            type="text"
            placeholder="Search hotels..."
            class="bg-emerald-700 text-white rounded px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-gold-500"
            v-model="searchQuery"
            @input="search"
          >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-emerald-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <NavigationMenu class="hidden sm:block" />
        <HamburgerIcon @click="toggleSidebar" class="sm:hidden" />
      </div>
    </div>
  </header>
  <Sidebar :isOpen="isSidebarOpen" @close="toggleSidebar" class="sm:hidden"/>
</template>

<script setup>
const router = useRouter()
const isSidebarOpen = ref(false)
const searchQuery = ref('')

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value
}

const search = () => {
  router.push({ path: '/', query: { search: searchQuery.value } })
}

// Watch for route changes to update the search query
watch(() => router.currentRoute.value.query.search, (newSearch) => {
  searchQuery.value = newSearch || ''
})
</script>