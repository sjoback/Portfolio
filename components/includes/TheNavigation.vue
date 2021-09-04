<template>
    <div class="nav" :class="{ scrolled: scrolled }">
        <!-- <nuxt-link to="#" class="nav-logo">J.S</nuxt-link> -->
        <!-- <ul
            class="nav-socials"
            v-addClass="{threshold: 0, class: 'showList'}"
        >
            <li
                v-for="(social, index) in socials"
                :key="index"
                v-addClass="{threshold: 0, class: 'showListItem'}"
            >
                <a href="#" target="_blank">
                    <i :class="social.icon" />
                </a>
            </li>
        </ul>

        <div class="nav-email">
            <div class="border" />

            <div class="border" />

            <div class="border" />

            <div class="border" />

            <a
                v-addClass="{threshold: 0, class: 'showEmail'}"
                href="mailto: joakim.sjoback@gmail.com"
            >
                joakim.sjoback@gmail.com
            </a>

            <div class="border" />
        </div> -->

        <!-- <ChatBot /> -->
    </div>
</template>
<script>
    import ChatBot from '@/components/ChatBot.vue';
    export default {
        components: { ChatBot },
        data() {
            return {
                scrolled: false
            }
        },
        computed: {
            socials() {
                return [
                    {
                        name: 'github',
                        url: '',
                        icon: 'fab fa-github-alt'
                    },
                    {
                        name: 'instagram',
                        url: '',
                        icon: 'fab fa-instagram'
                    },
                    {
                        name: 'linkedin',
                        url: '',
                        icon: 'fab fa-linkedin-in'
                    }
                ]
            }
        },
        methods: {
            onScroll(e) {
                if ( window.scrollY > 100 ) this.scrolled = true
                else this.scrolled = false
            }
        },
        mounted() {
            window.addEventListener("scroll", this.onScroll)
        },
        beforeDestroy() {
            window.removeEventListener("scroll", this.onScroll)
        }
    }
</script>
<style lang="scss">
.nav {
    display: flex;
    align-items: center;
    z-index: 2;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1;
    // transition: .15s ease-in-out;

    &-logo {
        font-family: $fontSpan;
        font-weight: 800;
        font-size: 52px;
        margin: 30px 30px 30px 50px;

        span {
            font-size: 20px;
            line-height: 20px;
            display: block;
            font-family: 'WindSong', cursive;
        }
        span:last-child { margin-left: 10px; }
    }

    &-socials {
        position: fixed;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        overflow: hidden;
        box-shadow: $bxs;
        @include spacing(padding, 6);
        @include border-radius(25px, (top-right, bottom-right));
        // background: $white;

        li {
            @include flex;

            a {
                @include font-size(36px, 0px);
                @include border-radius(5px);
                @include spacing(margin, 2, (top,bottom));
                // @include border(all, 2px, transparent);
                opacity: 0;
                @include flex;
                @include spacing(padding, 1);
                color: $font;

                i { transition: .15s ease-in-out; }

                &:hover {
                    i { transform: scale(1.3); }
                }
            }
        }
    }

    &-email {
        position: fixed;
        right: 40px;
        bottom: 0;

        a {
            writing-mode: vertical-lr;
            @include font-size(14px, 0);
            font-family: $fontSpan;
            font-weight: bold;
            opacity: 0;
            color: $font;
            margin: 20px 0;
        }

        div { @include flex; }

        .border {
            width: 2px;
            border-radius: 10px;
            background: $font;
            // margin-left: 5px;
            margin: 20px 0 20px 5px;
        }
        .border:nth-child(1) { height: 7px; }
        .border:nth-child(2) { height: 30px; }
        .border:nth-child(3) { height: 60px; }
        .border:nth-child(4) { height: 120px; }
        .border:nth-child(5) { height: 150px; }
    }

    .animatedLine {
        .border, div { animation: animatedLine .5s ease-in forwards; }
    }

    @keyframes animatedLine {
        from {
            opacity: 0;
            height: 0;
        }

        to {
            opacity: 1;
            height: 150px;
        }
    }

    .showListItem { a { animation: showListItem .3s ease-in forwards; } }
    .showListItem:nth-child(1) { a { animation-delay: 1s; } }
    .showListItem:nth-child(2) { a {animation-delay: .8s; } }
    .showListItem:nth-child(3) { a {animation-delay: .6s; } }

    @keyframes showListItem {
        0% {
            opacity: 0;
            transform: scale(.9);
        }

        50% {
            opacity: 1;
            transform: scale(1.2);
        }

        100% {
            opacity: 1;
            transform: scale(1);
        }
    }

    .showEmail {
        animation: showEmail .5s ease-in forwards;
        animation-delay: .6s;
    }
    @keyframes showEmail {
        from {
            opacity: 0;
            margin-right: -100px;
        }
        to {
            opacity: 1;
            margin-right: 0;
        }
    }
}
</style>
