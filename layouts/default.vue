<template>
  <div>
      <Loader />
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
<style>
html {
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
