<template>
    <section>
        <div class="section-inner">
            <img src="~/assets/images/avatar.png" alt="">
            <h2>Hi! It's me.</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
    </section>
</template>

<style lang="scss" scoped>
section {
    background: $purple;
    color: $white;
    position: relative;
    background: linear-gradient(to bottom,#7a19f1,#332179);

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
        transform: scaleX(-1);
        height: 320px;
        opacity: .05;
    }


    .section-inner {
        text-align: center;
        width: 700px;

        img {
            @include size(200px);
            position: relative;

            &:after {
                // position: absolute;
                position: relative;
                content: "";
                width: 100%;
                height: 100%;
                background: red;
                border-radius: 200px;
                left: -10px;
                top: 10px;
            }
        }

        h2 {
            @include spacing(margin,8,(top, bottom));
        }
    }
}
</style>
