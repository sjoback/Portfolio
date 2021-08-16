<template>
    <div class="container">

        <div class="work">
            <div
                v-stagger="{ threshold: .5 }"
                class="mobile"
                v-for="( site, index ) in sites"
                :key="index"
                @click="openProject = site"
            >
                <div class="mobile-inner flex">
                    <img :src="site.imageColor" :alt="openProject.name" class="color" />
                    <img :src="site.imageBlack" :alt="openProject.name" class="black" />
                </div>
            </div>
        </div>

        <transition name="fade">
            <div
                v-if="openProject"
                class="open-project"
            >
                <transition
                    name="pop"
                    appear
                >
                    <div class="content">
                        <a
                            :href="openProject.url"
                            target="_blank"
                        >
                            <img
                                :src="openProject.imageDesktop"
                                :alt="openProject.name"
                                class="desktop"
                            />
                        </a>

                        <div>
                            <div v-html="openProject.name" />
                            <div class="stack">
                                <div
                                    v-for="( tech, index ) in openProject.techStack"
                                    :key="index"
                                    class="container"
                                >
                                    {{ tech }}
                                </div>
                            </div>

                            <!-- <div class="socials flex">
                                <i class="fab fa-github-alt" />
                            </div> -->
                        </div>
                    </div>
                </transition>

                <div
                    class="overlay"
                    @click="openProject = false"
                />
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    data() {
        return {
            openProject: false,
            projects: [],
            sites: [
                {
                    name: '<h3>Betting<span style="color: #509bf5;">Guide</span></h3>',
                    url: 'https://www.bettingguide.com',
                    imageColor: '/images/mobile-bg.png',
                    imageBlack: '/images/mobile-bg-bw.png',
                    imageDesktop: '/images/desktop-compary.png',
                    github: '',
                    techStack: ['HTML', 'CSS', 'NuxtJS', 'VueJS', 'Prismic'],
                    desc: 'BettingGuide.com is a gambling site which compares different gambling offers. It also includes information regarding gambling in the different markets. The front-end is built upon the Prismic API using NuxtJS.'
                },
                {
                    name: 'Kreditkort',
                    url: 'https://www.kreditkort.com',
                    imageColor: '/images/mobile-kreditkort.png',
                    imageBlack: '/images/mobile-kreditkort-bw.png',
                    imageDesktop: '/images/mobile-bg-bw.png',
                    github: '',
                    techStack: 'HTML, CSS, NuxtJS, VueJS, Prismic',
                    desc: ''
                },
                {
                    name: 'Compinero',
                    url: 'https://www.compinero.com',
                    imageColor: '/images/mobile-compinero.png',
                    imageBlack: '/images/mobile-compinero-bw.png',
                    imageDesktop: '/images/mobile-bg-bw.png',
                    github: '',
                    techStack: 'HTML, CSS, NuxtJS, VueJS, Prismic',
                    desc: ''
                },
                {
                    name: 'Compary',
                    url: 'https://www.compary.com',
                    imageColor: '/images/mobile-compary.png',
                    imageBlack: '/images/mobile-compary-bw.png',
                    imageDesktop: '/images/mobile-bg-bw.png',
                    github: '',
                    techStack: 'HTML, CSS, NuxtJS, VueJS, Prismic',
                    desc: ''
                },
                {
                    name: 'AlltOmKreditkort',
                    url: 'https://www.https://www.alltomkreditkort.se',
                    imageColor: '/images/mobile-aok.png',
                    imageBlack: '/images/mobile-aok-bw.png',
                    imageDesktop: '/images/mobile-bg-bw.png',
                    github: '',
                    techStack: 'HTML, CSS, NuxtJS, VueJS, Prismic',
                    desc: ''
                }
            ]
        }
    },
    mounted() {

        document.addEventListener("keydown", (e) => {
            if (e.keyCode == 27) {
                this.openProject = false
            }
        });
    }
}
</script>

<style lang="scss" scoped>
.popper { animation: popper .25s forwards; }
.popper:nth-child(2) { animation-delay: .10s; }
.popper:nth-child(3) { animation-delay: .20s; }
.popper:nth-child(4) { animation-delay: .30s; }
.popper:nth-child(5) { animation-delay: .40s; }
@keyframes popper {
    0% {
        opacity: 0;
        transform: translateX(200px);
    }
    100% {
        opacity: 1;
        transform: translateX(0px);
    }
}

.container {
    width: 100%;
}

.work {
    width: 100%;
    display: flex;
    overflow-x: auto;

    @include device(mobile) {
        @include spacing(padding, 10, right);
    }

    &::-webkit-scrollbar {
        display: none;
    }

    .mobile {
        min-width: 160px;
        width: 160px;
        margin: 20px;
        cursor: pointer;
        border-radius: 20px;
        height: 320px;
        border: 7px solid #000;
        transition: .15s ease-in-out!important;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

        &:hover {
            margin-top: 10px;

            img.black { display: none; }
            img.color { display: block; }
        }

        &-inner {
            background-size: cover;
            text-align: center;
            box-sizing: border-box;
            height: 100%;
            border-radius: 13px;
            position: relative;
            overflow: hidden;

            img {
                width: 100%;
                height: auto;
            }

            img.color { display: none; }
        }

        &-content { display: none; }

        &:hover {
            .mobile-content {
                display: block;
            }
        }
    }
}

.open-project {
    @include flex;
    @include size(100vw, 100vh);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;

    .content {
        @include grid(1, 40px);
        @include spacing(padding, 5);
        min-height: 300px;
        width: 900px;
        max-width: calc(100% - 40px);
        position: relative;
        z-index: 2;
        background: #fff;
        border-radius: 20px;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        align-items: flex-start;

        @include device(pad) {
            @include grid(2, 40px);
        }

        img {
            @include size(100%, auto);
        }

        @include device(pad) {
            img { @include size(auto, 300px); }
        }


        span { font-weight: bold; }

        a {
            color: #000;

            &:hover { text-decoration: underline; }
        }

        .stack {
            @include flex(start);
            width: 100%;
            margin-left: -5px;
            margin-top: 20px;

            .container {
                width: auto;
                background: #222;
                color: #fff;
                padding: 15px;
                border-radius: 10px;
                margin: 5px;
            }
        }
        .desc { margin: 20px 0; }

        .socials {
            width: 100%;

            i {
                margin: 0 20px;
                font-size: 42px;
                cursor: pointer;
            }
        }
    }

    .overlay {
        z-index: 1;
        position: absolute;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0, .25);
    }
}
</style>
