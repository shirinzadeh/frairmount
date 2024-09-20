<template>
  <main class="container mx-auto px-4 py-8 sm:py-12">
    <h1 class="text-3xl sm:text-4xl font-bold mb-4 text-center text-emerald-900">Explore Top-Rated Australian Casino Hotels for 2024</h1>
    <p class="text-lg sm:text-xl mb-8 sm:mb-12 text-emerald-700 text-center max-w-3xl mx-auto">Uncover premium hotel locations combining opulent accommodations with exhilarating gaming experiences on your upcoming holiday.</p>
    <FilterBar @filter="filterHotels" class="mb-8" />
    <div class="space-y-8 sm:space-y-12">
      <HotelCard
        v-for="hotel in filteredHotels"
        :key="hotel.id"
        :hotel="hotel"
        @view-details="openModal"
      />
    </div>
    <HotelModal
      :is-open="isModalOpen"
      :hotel="selectedHotel"
      @close="closeModal"
    />
  </main>
</template>

<script setup>

const hotels = ref([
  {
    id: 1,
    name: "Pullman Reef Hotel Casino",
    description: "Nestled between Trinity Inlet and the Cruise Liner Terminal, this top-notch Cairns hotel gives guests easy access to the wonders of Tropical North Queensland. Its prime spot puts visitors just a 10-minute drive from Cairns Airport and a quick 5-minute walk from the Reef Fleet Terminal. This location makes the hotel a great starting point to check out the area's natural beauty.",
    image: "/images/pullman-reef-hotel-casino.jpg",
    link: "https://www.reefcasino.com.au/",
    reviews: 1250,
    rating: 4
  },
  {
    id: 2,
    name: "Country Club Villas",
    description: "Country Club Villas offer a perfect base to explore Launceston and Northern Tasmania, or to have a peaceful getaway. You can relax in spacious and cozy self-contained villas built to give you plenty of room and a calming environment.",
    image: "/images/country-club-villas.jpg",
    link: "https://countryclubvillasresort.com/",
    reviews: 980,
    rating: 5
  },
  {
    id: 3,
    name: "Porters Plainland Hotel",
    description: "Discover subtle sophistication at Porters. Your room sits just a few steps from our top-rated eateries, casino areas, shows, and event halls. Whether you're in town for work tying the knot, or checking out the beautiful Lockyer Valley, Porters has everything you need.",
    image: "/images/portres.jpg",
    link: "https://www.portersplainland.com.au/",
    reviews: 683,
    rating: 4
  },
  {
    id: 4,
    name: "Country Club Tasmania",
    description: "Set within 300 acres of lush parkland, shimmering lakes, and gently undulating meadows, this retreat teems with wildlife and offers a breath of fresh air. Despite its tranquil atmosphere, it remains just moments away from the bustling heart of Launceston's central business district.",
    image: "/images/country-club-tasmania.jpg",
    link: "https://countryclubtasmania.com.au/",
    reviews: 241,
    rating: 5
  },
  {
    id: 5,
    name: "Opera Apartments",
    description: "Opera Apartments - South Brisbane offers luxurious urban living, just a 5-minute leisurely stroll from South Bank's man-made beach. Located only 201 meters from Brisbane Exhibition Centre, this property features an outdoor pool on its rooftop on the 17th floor all year round, as well as barbecue facilities and a sun-drenched terrace. Complimentary WiFi is provided throughout, and each apartment reservation at the property features a free private parking space on-site.",
    image: "/images/opera-apartments.jpg",
    link: "http://www.operahome.kz/",
    reviews: 1523,
    rating: 5
  }
  // ... Add the 'rating' property to the other hotel objects
])

const route = useRoute()

const minRating = ref(0)
const isModalOpen = ref(false)
const selectedHotel = ref(null)
const searchQuery = ref('')

const filterHotels = (rating) => {
  minRating.value = rating
}

const filteredHotels = computed(() => {
  return hotels.value.filter(hotel => 
    hotel.rating >= minRating.value &&
    (searchQuery.value === '' || hotel.name.toLowerCase().includes(searchQuery.value.toLowerCase()))
  )
})

const openModal = (hotel) => {
  selectedHotel.value = hotel
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
  selectedHotel.value = null
}

watch(() => route.query.search, (newSearch) => {
  searchQuery.value = newSearch || ''
})

useHead({
  title: 'FortuneFairmont - Find Your Perfect Stay',
  meta: [
    { name: 'description', content: 'Discover the best FortuneFairmont for your next exciting getaway. Luxurious accommodations and thrilling entertainment await!' },
    { name: 'keywords', content: 'casino, hotel, resort, vacation, gambling, entertainment' },
  ]
})
</script>