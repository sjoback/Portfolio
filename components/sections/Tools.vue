<template>
    <section>
        <div class="section-inner">
            <h2 class="section-inner__header">TOOLS</h2>

            <div class="section-inner__grid">
                <ul>
                    <li
                        v-for="tool in tools"
                        v-addClass="{threshold: .5, class: 'stagger'}"
                    >
                        <a
                            :href="tool.github"
                            rel="noreferrer"
                            :aria-label="tool.span"
                            target="_blank"
                        >
                            <i class="fab fa-github-alt"></i>
                        </a>
                        <a
                            :href="tool.npm"
                            rel="noreferrer"
                            :aria-label="tool.span"
                            target="_blank"
                        >
                                <i class="fab fa-npm"></i>
                        </a>
                        <span>{{ tool.span }}</span>
                        <p>{{ tool.paragraph }}</p>
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
    },
    computed: {
        tools() {
            return [
                {
                    github: 'https://github.com/sjoback/Vue-components',
                    npm: 'https://www.npmjs.com/package/@leetajz/vue-components',
                    span: 'Vue-components',
                    paragraph: 'Package containing components designed for a Nuxtjs-Prismic project.'
                },
                {
                    github: 'https://github.com/sjoback/Vue-directive',
                    npm: 'https://www.npmjs.com/package/@leetajz/vue-directive',
                    span: 'Vue-directive',
                    paragraph: 'Package using the IntersectionObserver for easily integrated animations.'
                },
                // {
                //     github: '',
                //     npm: '',
                //     span: 'Boilerplate',
                //     paragraph: 'A boilerplate for a Nuxtjs-Prismic project.'
                // },
                // {
                //     github: '',
                //     npm: '',
                //     span: '',
                //     paragraph: ''
                // },
            ]
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
                @include grid(1, 60px);

                @include device(pad) {
                    @include grid(2, 60px);
                }

                @include device(desktop) {
                    @include grid(3, 60px);
                }

                li {
                    width: 100%;
                    @include grid(1,10px);
                    text-align: center;
                    opacity: 0;

                    a:first-child {
                        i {
                            color: $purple;
                            &:hover { color: $darkpurple; }
                        }
                    }

                    i {
                        color: $orange;
                        font-size: 46px;
                        transition: .15s ease-in-out;
                        &:hover { color: $darkorange; }
                    }

                    span {
                        width: 100%;
                        color: $font;
                        font-weight: bold;
                        @include font-size(20px);
                        font-family: $fontText;
                    }

                    p {
                        flex: 2;
                        margin-left: 20px;
                    }
                }

                .stagger {
                    animation: stagger .3s ease-in forwards;
                }

                @for $i from 1 through 10 {
                    $delay: .10s;

                    .stagger:nth-child( #{$i} ) { animation-delay: $delay * $i; }
                }

                @keyframes stagger {
                    from {
                        opacity: 1;
                        transform: scale(.8);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1);
                    }
                }
            }
        }
    }
}
</style>
