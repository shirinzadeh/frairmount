<template>
  <footer class="bg-emerald-800 text-white py-8">
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap justify-between">
        <div class="w-full md:w-1/4 mb-6 md:mb-0">
          <h3 class="text-xl font-bold mb-2">Casino Hotels</h3>
          <p>Find your perfect stay at the best casino hotels.</p>
        </div>
        <div class="w-full md:w-1/4 mb-6 md:mb-0">
          <h3 class="text-xl font-bold mb-2">Quick Links</h3>
          <ul>
            <li><NuxtLink to="/" class="hover:text-gray-300">Home</NuxtLink></li>
            <li><NuxtLink to="/about" class="hover:text-gray-300">About</NuxtLink></li>
            <li><NuxtLink to="/contact" class="hover:text-gray-300">Contact</NuxtLink></li>
            <li><NuxtLink to="/privacy" class="hover:text-gray-300">Privacy Policy</NuxtLink></li>
          </ul>
        </div>

        <div class="w-full md:w-1/4 mb-6 md:mb-0">
          <h3 class="text-xl font-bold mb-3 text-white">Stay Updated</h3>
          <form @submit.prevent="subscribeNewsletter" class="flex flex-col space-y-3">
            <input
              type="email"
              v-model="email"
              placeholder="Enter your email"
              class="text-emerald-800 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-gray-400 transition-all duration-300 hover:bg-gray-200"
              required
            >
            <button
              type="submit"
              class="bg-gradient-to-r from-emerald-600 to-emerald-600 text-white px-4 py-3 rounded-lg hover:from-emerald-700 hover:to-emerald-700 transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
              :disabled="isSubmitting"
            >
            {{ isSubmitting ? 'Subscribing...' : 'Subscribe' }}
            </button>
          </form>
        </div>
      </div>
      <div class="mt-8 text-center">
        <p>&copy; {{ new Date().getFullYear() }} Casino Hotels. All rights reserved.</p>
      </div>
    </div>
      <!-- Toast Message -->
      <div v-if="showToast" class="fixed bottom-5 right-5 bg-green-600 text-white px-4 py-2 rounded shadow-lg">
        Your subscription request has been sent!
      </div>
  </footer>

</template>

<script setup>

const email = ref('')
const isSubmitting = ref(false)
const showToast = ref(false)

const subscribeNewsletter = async () => {
  if (isSubmitting.value) return

  isSubmitting.value = true
  try {
    // Simulate API call with a delay
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Show success toast
    showToast.value = true
    setTimeout(() => {
      showToast.value = false
    }, 3000)

    // Reset form
    email.value = ''
  } catch (error) {
    console.error('Error subscribing to newsletter:', error)
    alert('An error occurred. Please try again.')
  } finally {
    isSubmitting.value = false
  }
}
</script>