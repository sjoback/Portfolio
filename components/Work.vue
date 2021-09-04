<template>
    <div class="container">
        <div
            v-for="(work, index) in data"
            v-addClass="{threshold: .5, class: 'show'}"
            class="mobile"
            :class="{open: open === index}"
            @click="open = index"
            v-scroll-to="{
                 el: '#work',
                 duration: 300,
                 force: true
            }"
        >
            <div class="mobile-inner">
                <img
                    :src="work.imageColor"
                    :alt="work.name"
                    class="color"
                />

                <img
                    :src="work.imageBlack"
                    :alt="work.name"
                    class="black"
                />
            </div>
        </div>

        <div
            v-if="open !== false"
            class="overlay"
            @click="open = false"
        />
    </div>
</template>

<script>
export default {
    props: {
        data: {
            type: Array,
            required: false,
            default: () => {}
        }
    },
    data() {
        return {
            open: false
        }
    },
    watch: {
        open() {
            if(this.open !== false) document.body.style.overflow = 'hidden'
            else document.body.style.overflow = 'visible'
        }
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
    @include flex;
    width: 100%;
    position: relative;
}

.mobile.open {

    .mobile-inner {
        animation: open .5s ease-in forwards;
        z-index: 99;
        background: #fff;
        cursor: default;
    }
}

@keyframes open {
    0% {

    }
    50% {
        transform: scale(1.3);
    }
    100% {
        transform: scale(0);
    }
}

.mobile {
    position: relative;
    @include size(160px, 310px);
    margin: 20px;
    min-width: 160px;
    box-shadow: $bxs;
    border-radius: 20px;
    transition: .15s ease-in-out!important;

    &:hover {
        box-shadow: rgba(0, 0, 0, 0.2) 0px 15px 30px 0px;
        img.black { display: none; }
        img.color { display: block; }
    }

    &-inner {
        @include border-radius(20px);
        padding: 15px;
        background: #fff;
        cursor: pointer;
        background-size: cover;
        text-align: center;
        box-sizing: border-box;
        height: 100%;
        position: relative;
        overflow: hidden;

        img {
            @include size(100%, auto);
            border-radius: 10px;
            transition: .15s ease-in-out!important;
        }

        img.color { display: none; }
    }

    &-content { display: none; }

    // &:hover {
    //     .mobile-content {
    //         display: block;
    //     }
    // }
}

.overlay {
    @include overlay(#000, .0);
    position: fixed;
    left: 0;
    right: 0;
    z-index: 98;
    cursor: pointer;
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
