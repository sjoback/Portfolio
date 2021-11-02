<template>
    <section class="banner">
        <div class="section-inner">
            <transition name="banner-text" appear>
                <div class="container">
                    <h2>Joakim Sjöbäck</h2>
                    <h1>Designer</h1>
                    <h1>Front-end Developer</h1>
                    <h1>Binge Watcher</h1>
                    <h2>A sentence with something fun in it.</h2>
                </div>
            </transition>

            <transition name="banner-image" appear>
                <div class="container">
                    <img src="/images/avatar1.webp" alt="It's me!" load="eager">
                    <!-- <img src="/images/banner-geo.webp" alt="It's me!" load="eager" class="bg"> -->
                </div>
            </transition>
        </div>
    </section>
</template>

<style lang="scss" scoped>
section.banner {
    position: relative;
    background: linear-gradient(to bottom,#7a19f1,#332179);
    background-attachment: fixed;
    box-sizing: border-box;

    @include device(mobile) {
        padding-top: 120px;
        padding-bottom: 120px;
    }

    @include device(pad) {
        height: 85vh;
    }

    &:before,
    &:after {
        position: absolute;
        content: "";
        @include size(100%, 400px);
        opacity: .1;
        bottom: -100px;
        left: 0;
        background: url('~assets/images/wave.svg');
        background-size: cover;
        z-index: 2;
    }

    &:after {
        height: 320px;
        transform: scaleX(-1);
    }

    .section-inner {
        color: $white;
        @include grid(1, 40px);
        width: 1300px;

        @include device(pad) {
            @include grid(2, 40px);
        }

        .container {
            text-align: center;
            @include device(pad) {
                text-align: left;
            }

            &:last-child {
                @include flex;
                position: relative;

                img {
                    max-width: 100%;
                    @include size(200px,auto);
                    position: relative;

                    @include device(pad) {
                        @include size(300px,auto);
                    }

                    @include device(desktop) {
                        @include size(400px,auto);
                    }

                    &:after {
                        content: "";
                        position: absolute;
                        @include size(400px);
                        background: $orange;
                        top: -40px;
                        right: -40px;
                    }
                }
            }
        }

        h2 {
            font-family: $fontText;
            font-weight: 500;
            @include font-size(24px, 0px);
            color: $orange;
            margin: 10px 0;
        }
    }
}

// Colors
.black {
    section.banner {
        background: #000;
        height: 100vh;

        &:before,
        &:after {
            opacity: .05;
        }
    }
}
.white {
    section.banner {
        background: rgba(239, 235, 221, .3);
        height: 100vh;

        &:before,
        &:after {
            opacity: .5;
        }

        .section-inner {
            color: #222;;

            h5 {
                @include font-size(20px, 10px);
            }
        }
    }
}
</style>
