<template>
    <div class="main">
        <Banner />
        <Skills />
        <About />
        <Work />
    </div>
</template>

<script>
import Banner from '@/components/sections/Banner.vue';
import Skills from '@/components/sections/Skills.vue';
import About from '@/components/sections/About.vue';
import Work from '@/components/sections/Work.vue';
export default {
    components: { Banner, Skills, About, Work }
}
 </script>
