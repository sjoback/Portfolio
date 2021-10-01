<template>
    <section class="banner">
        <div class="section-inner">
            <h1>DESIGNER, FRONT-END DEVELOPER & BINGE WATCHER</h1>
            <h5>A sentence with something fun in it.</h5>
        </div>
    </section>
</template>

<style lang="scss" scoped>
section.banner {
    position: relative;
    background: linear-gradient(to bottom,#7a19f1,#332179);
    background-attachment: fixed;
    padding-top: 200px;
    padding-bottom: 200px;

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

        h5 {
            @include font-size(20px, 10px);
        }
    }
}
</style>
