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

        <section class="section-work" id="work">
            <div class="section-inner">
                <h2>The work.</h2>

                <Work :data="work" />
            </div>
        </section>

        <section>
            <div class="section-inner">
                <h2>Other projects.</h2>

                <!-- <Project /> -->
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
import work from '@/mixins/work.js';
import Work from '@/components/Work.vue'
import Project from '@/components/Project.vue'
import AnimatedText from '@/components/Svg.vue'
export default {
    components: { Work, Project, AnimatedText },
    mixins: [ work ],
    computed: {
        workData() {
            return this.work;
        }
    }
}
</script>
<style lang="scss">

    .banner {

        .section-inner {
            p { margin-top: 10px; }
        }
    }

    .avatar {
        position: relative;

        &-inner {
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

    .section-work {
        @include device(mobile) {
            position: relative;
            padding-left: 0;
            padding-right: 0;

            @include psuedo {
                position: absolute;
                right: 0;
                top: 0;
                background: linear-gradient(90deg, rgba(2,0,36,0) 0%, rgba(255,255,255,1) 100%);
                @include size(50px, 100%);
            }

            .section-inner { padding: 0;}
        }
    }
</style>
