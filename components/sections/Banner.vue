<template>
    <section class="banner">
        <div class="section-inner">
            <h1>DESIGNER, FRONT-END DEVELOPER & BINGE WATCHER</h1>
            <h2>A sentence with something fun in it.</h2>
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

        h2 {
            font-family: $fontText;
            font-weight: 200;
            @include font-size(24px, 0px);
            margin-top: 10px;
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
