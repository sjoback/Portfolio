<template>
    <section>
        <div class="section-inner">
            <h2 class="section-inner__header">PRODUCTS</h2>

            <div class="section-inner__grid">
                <div
                    v-for="(product,index) in products"
                    class="grid-inner"
                >
                    <div class="container">
                        <img
                            :src="product.img"
                            :alt="product.name"
                            load="lazy"
                        />
                    </div>

                    <div class="container">
                        <div>
                            <div class="container-head">
                                <h2>{{product.name}}</h2>
                                <span>{{product.launched}}</span>
                            </div>

                            <p v-html="product.desc"></p>

                            <hr>

                            <a
                                :href="product.url"
                                rel="noreferrer"
                                target="_blank"
                            >
                                Visit site
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    computed: {
        products() {
            return [
                {
                    img: '/images/work-kreditkort.webp',
                    name: 'Kreditkort.com',
                    launched: '2019',
                    desc: 'Designed with Photoshop. <br> Built with NuxtJS & Prismic. <br> Focus on SEO-rankings & page speed.',
                    url: 'https://kreditkort.com'
                },
                {
                    img: '/images/work-bettingguide.webp',
                    name: 'BettingGuide.com',
                    launched: '2020',
                    desc: 'Designed with Photoshop. <br> Built with NuxtJS & Prismic. <br> Focus on SEO-rankings & page speed.',
                    url: 'https://bettingguide.com'
                },
                {
                    img: '/images/work-compary.webp',
                    name: 'Compary.com',
                    launched: '2020',
                    desc: 'Designed with Photoshop. <br> Built with NuxtJS & Prismic. <br> Focus on simplicity, digital profile & page speed.',
                    url: 'https://compary.com'
                },
                {
                    img: '/images/work-compinero.webp',
                    name: 'Compinero.com',
                    launched: '2020',
                    desc: 'Designed with Photoshop. <br> Built with NuxtJS & Prismic. <br> Focus on SEO-rankings & page speed.',
                    url: 'https://compinero.com'
                },
                {
                    img: '/images/work-aok.webp',
                    name: 'AlltOmKreditkort.se',
                    launched: '2021',
                    desc: 'Designed with Photoshop. <br> Built with NuxtJS & Prismic. <br> Focus on SEO-rankings & page speed.',
                    url: 'https://alltomkreditkort.se'
                },
                {
                    img: '/images/work-lånen.webp',
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
                @include grid(1, 40px);

                @include device(pad) {
                    @include grid(2, 20px);
                }

                @include device(desktop) {
                    @include grid(2, 40px);
                }

                .container {
                    img {
                        @include size(250px, 153px);

                        @include device(pad) {
                            @include size(300px, 183px);
                        }

                        @include device(desktop) {
                            @include size(500px, 305px);
                        }
                    }

                    &:first-child {
                        @include flex;
                    }

                    &:last-child {
                        @include flex(start);

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
                            }

                            span {
                                background: $orange;
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
                            width: 100%;

                            @include device(pad) {
                                text-align: left;
                            }
                        }

                        hr {
                            border: none;
                            height: 2px;
                            background: $orange;
                            width: 100px;
                            display: none;
                        }

                        a {
                            background: $purple;
                            padding: 25px 40px;
                            font-family: $fontText;
                            letter-spacing: .5px;
                            color: $white;
                            border-radius: 50px;
                            max-width: 200px;
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
        transform: translateX(-20px);
    }
    to {
        opacity: 1;
        transform: translateX(0px);
    }
}

@keyframes slideRight {
    from{
        opacity: 0;
        transform: translateX(-50px);
    }
    to{
        opacity: 1;
        transform: translateX(0px);
    }
}
@keyframes slideLeft {
    from{
        opacity: 0;
        transform: translateX(50px);
    }
    to{
        opacity: 1;
        transform: translateX(0px);
    }
}
</style>
