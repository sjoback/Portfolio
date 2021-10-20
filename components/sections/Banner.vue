<template>
    <section class="banner">
        <div class="section-inner">
            <div class="container">
                <h2>Joakim Sjöbäck</h2>
                <h1>Designer</h1>
                <h1>Front-end Developer</h1>
                <h1>Binge Watcher</h1>
                <h2>A sentence with something fun in it.</h2>
            </div>

            <div class="container">
                <img src="/images/banner-geo.webp" alt="It's me!" load="lazy">
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
section.banner {
    position: relative;
    background: linear-gradient(to bottom,#7a19f1,#332179);
    background-attachment: fixed;
    padding-top: 160px;
    padding-bottom: 100px;

    @include device(pad) {
        padding-top: 200px;
        padding-bottom: 200px;
    }

    &:before,
    &:after {
        position: absolute;
        content: "";
        width: 100%;
        height: 400px;
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

                img {
                    width: 500px;
                    height: auto;
                    max-width: 100%
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
