<template>
  <div>
      <!-- <Loader /> -->
      <Navbar @emit="tellChatBot" />
      <nuxt />
      <Footer />
  </div>
</template>
<script>
import Navbar from '@/components/includes/TheNavigation.vue';
import Footer from '@/components/includes/TheFooter.vue';
import Loader from '@/components/Loader.vue';
export default {
    components: { Navbar, Footer, Loader },
    methods: {
        tellChatBot(value) {
            // Open and pass value to chatbot
            console.log(value);
        }
    }
}
</script>
