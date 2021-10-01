<template>
    <section>
        <div class="section-inner">
            <h2 class="section-inner__header">TOOLS</h2>

            <div class="section-inner__grid">
                <ul>
                    <li>
                        <a href="#" target="_blank"><i class="fab fa-github-alt"></i></a>
                        <a href="#" target="_blank"><i class="fab fa-npm"></i></a>
                        <span>Base-CSS</span>
                        <p>Basic package containing mixins & css-classes.</p>
                    </li>

                    <li>
                        <a href="#" target="_blank"><i class="fab fa-github-alt"></i></a>
                        <a href="#" target="_blank"><i class="fab fa-npm"></i></a>
                        <span>Vue-components</span>
                        <p>Package containing components designed for a Nuxtjs-Prismic project.</p>
                    </li>

                    <li>
                        <a href="#" target="_blank"><i class="fab fa-github-alt"></i></a>
                        <a href="#" target="_blank"><i class="fab fa-npm"></i></a>
                        <span>Vue-directive</span>
                        <p>Package using the IntersectionObserver for easily integrated animations.</p>
                    </li>

                    <li>
                        <a href="#" target="_blank"><i class="fab fa-github-alt"></i></a>
                        <a href="#" target="_blank"><i class="fab fa-npm"></i></a>
                        <span>Boilerplate</span>
                        <p>A boilerplate for a Nuxtjs-Prismic project.</p>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            tab: 2
        }
    }
}
</script>

<style lang="scss" scoped>
section {
    @include border(top, 1px, #e6e6e6);

    .section-inner {
        width: 1000px;

        &__header {
            color: #999;
            letter-spacing: 2px;
            margin-bottom: 60px;
            font-size: 20px;
        }

        &__grid {
            width: 100%;

            ul {
                @include grid(3, 60px);

                li {
                    width: 100%;
                    @include grid(1,10px);
                    text-align: center;

                    i {
                        color: $purple;
                        font-size: 46px;
                        &:hover { color: $darkpurple; }
                    }

                    span {
                        width: 100%;
                        color: $font;
                        font-weight: bold;
                        @include font-size(20px);
                        font-family: $fp;
                    }

                    p {
                        flex: 2;
                        margin-left: 20px;
                    }
                }
            }
        }
    }
}
</style>
