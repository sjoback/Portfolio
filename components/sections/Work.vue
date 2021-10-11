<template>
    <section>
        <div class="section-inner">
            <h2 class="section-inner__header">PRODUCTS</h2>

            <div class="section-inner__grid">
                <div
                    v-for="(product,index) in products"
                    v-addClass="{threshold: .5, class: 'animate'}"
                    class="grid-inner"
                >
                    <div class="container">
                        <img :src="product.img" alt=""/>
                    </div>
                    <div class="container">
                        <div>
                            <div class="container-head">
                                <h2>{{product.name}}</h2>
                                <span>{{product.launched}}</span>
                            </div>

                            <p v-html="product.desc"></p>

                            <a :href="product.url" target="_blank">Visit site</a>
                        </div>
                    </div>
                </div>
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
        products() {
            return [
                {
                    // img: require('~/images/work-kreditkort.png'),
                    img: '/images/work-kreditkort.png',
                    name: 'Kreditkort.com',
                    launched: '2019',
                    desc: 'Designed with Photoshop. <br> Built with NuxtJS & Prismic. <br> Focus on SEO-rankings & page speed.',
                    url: 'https://kreditkort.com'
                },
                {
                    // img: require('~/images/work-bettingguide.png'),
                    img: '/images/work-bettingguide.png',
                    name: 'BettingGuide.com',
                    launched: '2020',
                    desc: 'Designed with Photoshop. <br> Built with NuxtJS & Prismic. <br> Focus on SEO-rankings & page speed.',
                    url: 'https://bettingguide.com'
                },
                {
                    // img: require('~/images/work-compary.png'),
                    img: '/images/work-compary.png',
                    name: 'Compary.com',
                    launched: '2020',
                    desc: 'Designed with Photoshop. <br> Built with NuxtJS & Prismic. <br> Focus on simplicity, digital profile & page speed.',
                    url: 'https://compary.com'
                },
                {
                    // img: require('~/images/work-compinero.png'),
                    img: '/images/work-compinero.png',
                    name: 'Compinero.com',
                    launched: '2020',
                    desc: 'Designed with Photoshop. <br> Built with NuxtJS & Prismic. <br> Focus on SEO-rankings & page speed.',
                    url: 'https://compinero.com'
                },
                {
                    // img: require('~/images/work-aok.png'),
                    img: '/images/work-aok.png',
                    name: 'AlltOmKreditkort.se',
                    launched: '2021',
                    desc: 'Designed with Photoshop. <br> Built with NuxtJS & Prismic. <br> Focus on SEO-rankings & page speed.',
                    url: 'https://alltomkreditkort.se'
                },
                {
                    // img: require('~/images/work-lånen.png'),
                    img: '/images/work-lånen.png',
                    name: 'Lånen.se',
                    launched: '2021',
                    desc: 'Designed with Photoshop. <br> Built with NuxtJS & Prismic. <br> Focus on SEO-rankings & page speed.',
                    url: 'https://lånen.se'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
section {
    .section-inner {
        &__header {
            color: #999;
            letter-spacing: 2px;
            margin-bottom: 60px;
            font-size: 20px;
        }

        &__grid {
            @include grid(1, 100px);
            @include device(pad) {
                @include grid(1, 160px);
            }

            &:first-child { margin-bottom: 100px; }

            .grid-inner.animate {
                opacity: 1;
                animation: animate .3s ease-in forwards;
            }
            .grid-inner {
                opacity: 0;
                @include grid(1, 40px);

                @include device(pad) {
                    @include grid(2, 20px);
                }

                @include device(desktop) {
                    @include grid(2, 40px);
                }

                .container {
                    img {
                        @include size(250px, auto);
                        @include device(pad) {
                            @include size(300px, auto);
                        }

                        @include device(desktop) {
                            @include size(500px, auto);
                        }
                    }

                    &:first-child {
                        @include flex;
                    }

                    &:last-child {
                        @include flex;

                        div {
                            @include flex;
                            @include device(pad) {
                                @include flex(start);
                            }
                        }

                        .container-head {
                            @include flex(start);
                            position: relative;

                            h2 {
                                text-align: left;
                                width: auto;
                                margin: 0;

                                @include device(mobile) {
                                    margin-top: 40px;
                                }
                            }

                            span {
                                background: $purple;
                                padding: 5px;
                                border-radius: 3px;
                                color: $white;
                                font-size: 12px;
                                margin-left: 20px;
                                font-family: $fontText;
                                font-weight: bold;

                                @include device(mobile) {
                                    position: absolute;
                                    left: 50%;
                                    transform: translateX(-50%);
                                    margin-left: 0;
                                    top: -10px;
                                }
                            }
                        }

                        p {
                            @include spacing(margin,6,(bottom,top));
                            text-align: center;
                            width: 100%;

                            @include device(pad) {
                                text-align: left;
                            }
                        }

                        a {
                            background: $purple;
                            padding: 15px 30px;
                            font-family: $fontText;
                            letter-spacing: .5px;
                            color: $white;
                            border-radius: 50px;
                            transition: .15s ease-in-out;

                            &:hover { background: $darkpurple; }
                        }
                    }
                }
            }
        }
    }
}
@keyframes animate {
    from {
        opacity: 0;
        transform: translateY(50px);
    }
    to {
        opacity: 1;
        transform: translateY(0px);
    }
}
</style>
