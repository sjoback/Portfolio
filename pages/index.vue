<template>
    <div class="main">
        <section class="banner">
            <div class="section-inner">
                <h1>I'm Joakim Sjöbäck.</h1>
                <h1>I design and build things for the web.</h1>
                <p>I'm a front-end developer who dabbles in design. I focus on SEO and other stuffz.</p>
                <p>Scroll down and feast your eyes!</p>
            </div>
        </section>

        <section>
            <div class="section-inner">
                <h2>The work.</h2>

                <Work />
            </div>
        </section>

        <section>
            <div class="section-inner">
                <h2>Other projects.</h2>

                <Projects />
            </div>
        </section>

        <section>
            <div class="section-inner">
                <h2>About Me.</h2>

                <div class="fw flex">
                    <div class="flex-1">

                    </div>

                    <div class="flex-1">
                        <div class="avatar">
                            <div class="avatar-inner" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
import Work from '@/components/Work.vue'
import Projects from '@/components/Projects.vue'
import AnimatedText from '@/components/Svg.vue'
export default {
    components: { Work, Projects, AnimatedText }
}
</script>
<style lang="scss">

    .banner {

        .section-inner {
            p { margin-top: 10px; }
        }
    }

    .section-inner {
        h2 {
            width: 100%;
            text-align: center;
            margin-bottom: 60px;
        }
    }

    .avatar {
        position: relative;

        &-inner {
            //image
            position: relative;
            background: #222;
            z-index: 2;
            width: 200px;
            height: 200px;
            border-radius: 100px;
        }

        &:after {
            z-index: 1;
            content: "";
            position: absolute;
            border-radius: 100px;
            width: 200px;
            height: 200px;
            top: 5px;
            left: 5px;
            background: #000;
        }
    }
</style>
