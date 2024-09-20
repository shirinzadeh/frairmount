<template>
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 class="text-4xl font-bold mb-6 text-center">Contact Us</h1>
      <p class="mb-8 text-center">We'd love to hear from you. Please fill out this form and we will get in touch with you shortly.</p>
        <div>
          <h2 class="text-2xl font-semibold mb-4 text-center">Send us a message</h2>
          <ContactForm />
        </div>

    </div>
</template>

<script setup>
useHead({
  title: 'Contact Us - FortuneFairmont',
  meta: [
    { name: 'description', content: 'Get in touch with FortuneFairmont. We\'re here to answer any questions you may have about our casino hotel reviews and services.' },
    { name: 'keywords', content: 'contact FortuneFairmont, customer support, inquiries, casino hotel information' },
    { property: 'og:title', content: 'Contact FortuneFairmont - We\'re Here to Help' },
    { property: 'og:description', content: 'Have questions about casino hotels or need assistance? Contact FortuneFairmont for expert help and information.' },
    { property: 'og:image', content: 'https://www.fortunefairmont.com/images/og-contact.jpg' },
    { property: 'og:url', content: 'https://www.fortunefairmont.com/contact' },
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:title', content: 'Contact FortuneFairmont - We\'re Here to Help' },
    { name: 'twitter:description', content: 'Need assistance with casino hotel bookings or have questions? Reach out to FortuneFairmont today.' },
  ],
  link: [
    { rel: 'canonical', href: 'https://www.fortunefairmont.com/contact' },
  ]
})
</script>