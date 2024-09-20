<template>
  <form @submit="onSubmit" class="space-y-4 max-w-md mx-auto">
    <div>
      <label for="name" class="block text-sm font-medium mb-1">Name</label>
      <input
        id="name"
        v-model="name"
        type="text"
        :class="{ 'border-red-400': nameError }"
        class="w-full text-emerald-800 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-gray-400 transition-all duration-300 hover:bg-gray-200"
        placeholder="Enter your name"
        required
      />
      <span v-if="nameError" class="text-red-400 text-sm">{{ nameError }}</span>
    </div>

    <div>
      <label for="email" class="block text-sm font-medium  mb-1">Email</label>
      <input
        id="email"
        v-model="email"
        type="email"
        :class="{ 'border-red-400': emailError }"
        class="w-full text-emerald-800 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-gray-400 transition-all duration-300 hover:bg-gray-200"
        placeholder="Enter your email"
        required
      />
      <span v-if="emailError" class="text-red-400 text-sm">{{ emailError }}</span>
    </div>

    <div>
      <label for="message" class="block text-sm font-medium  mb-1">Message</label>
      <textarea
        id="message"
        v-model="message"
        rows="4"
        :class="{ 'border-red-400': messageError }"
        class="w-full text-emerald-800 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-gray-400 transition-all duration-300 hover:bg-gray-200"
        placeholder="Enter your message"
        required
      ></textarea>
      <span v-if="messageError" class="text-red-400 text-sm">{{ messageError }}</span>
    </div>

    <div>
      <button
        type="submit"
        :disabled="isSubmitting"
        class="w-full bg-gradient-to-r from-emerald-600 to-emerald-600 text-white px-4 py-3 rounded-lg hover:from-emerald-700 hover:to-emerald-700 transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
      >
        {{ isSubmitting ? 'Submitting...' : 'Submit' }}
      </button>
    </div>
  </form>

  <!-- Toast Message -->
  <div v-if="showToast" class="fixed bottom-5 right-5 bg-green-600 text-white px-4 py-2 rounded shadow-lg">
    Your message has been sent successfully!
  </div>
</template>

<script setup>

const { handleSubmit, resetForm } = useForm()

const { value: name, errorMessage: nameError, resetField: resetName } = useField('name', (value) => {
  if (!value) return 'Name is required'
  return true
})

const { value: email, errorMessage: emailError, resetField: resetEmail } = useField('email', (value) => {
  if (!value) return 'Email is required'
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    return 'Invalid email address'
  }
  return true
})

const { value: message, errorMessage: messageError, resetField: resetMessage } = useField('message', (value) => {
  if (!value) return 'Message is required'
  return true
})

const isSubmitting = ref(false)
const showToast = ref(false)

const onSubmit = handleSubmit(async (values) => {
  isSubmitting.value = true
  try {
    // Simulate API call with a delay
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Show success toast
    showToast.value = true
    setTimeout(() => {
      showToast.value = false
    }, 3000)

    // Reset form and clear validation errors
    resetForm()
    resetName()
    resetEmail()
    resetMessage()
  } catch (error) {
    console.error('Error submitting form:', error)
    alert('An error occurred. Please try again.')
  } finally {
    isSubmitting.value = false
  }
})
</script>