<template>
    <div class="main">
        <Banner />
        <Skills />
        <About />
        <Work />
        <Tools />
    </div>
</template>

<script>
import Banner from '@/components/sections/Banner.vue';
import Skills from '@/components/sections/Skills.vue';
import About from '@/components/sections/About.vue';
import Tools from '@/components/sections/Tools.vue';
import Work from '@/components/sections/Work.vue';
export default {
    components: {
        Banner,
        Skills,
        About, Work, Tools
    }
}
 </script>
