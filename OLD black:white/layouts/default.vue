<template>
  <div>
      <!-- <Loader /> -->
      <Navbar />
      <nuxt />
  </div>
</template>
<script>
import Navbar from '@/components/includes/TheNavigation.vue';
import Footer from '@/components/includes/TheFooter.vue';
import Loader from '@/components/Loader.vue';
    export default {
        components: { Navbar, Footer, Loader }
    }
</script>
