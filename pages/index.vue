<template>
    <div class="main">
        <section class="banner">
            <div class="section--inner">
                <!-- <p>Hi, my name is</p> -->
                <!-- <h1>Hi!</h1> -->
                <h1>I'm Joakim Sjöbäck.</h1>
                <h1>I design and build things for the web.</h1>
                <p>I'm a front-end developer who dabbles in design. I focus on SEO and other stuffz.</p>
                <p>Scroll down and feast your eyes!</p>
            </div>
        </section>

        <section>
            <div class="section--inner flex">
                <h2>The work.</h2>

                <Work />
            </div>
        </section>

        <section>
            <div class="section--inner flex">
                <h2>Other projects.</h2>
            </div>
        </section>
    </div>
</template>
<script>
import Work from '@/components/Work.vue'
export default {
    components: { Work }
}
</script>
<style lang="scss">

    .banner {

        .section--inner {
            p { margin-top: 10px; }
        }
    }

    .section--inner {
        h2 {
            width: 100%;
            text-align: center;
            margin-bottom: 60px;
        }


    }
</style>
