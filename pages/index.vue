<template>
    <div class="main">
        <section class="banner">
            <div class="section-inner">
                <h1>DESIGNER,</h1>
                <h1>FRONT-END DEVELOPER,</h1>
                <h1>BINGE WATCHER</h1>
            </div>
        </section>

        <section>
            <div class="section-inner">
                <div class="container">
                    <h2>Designer</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                    <p class="head">Things I enjoy designing:</p>
                    <p>Something, test, sadfasdf, sdfsa</p>
                    <p class="head">Tools I use/prefer:</p>
                    <ul>
                        <li>Thing</li>
                    </ul>
                </div>
                <div class="container">
                    <h2>Front-end Developer</h2>
                </div>
                <div class="container">
                    <h2>Bing watcher</h2>
                </div>
            </div>
        </section>

        <section>
            <div class="section-inner">
                <h2>Hi! It's me.</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </section>

        <section>
            <div class="section-inner">
                <div class="container">
                    <img src="~/assets/images/laptop.png" alt=""/>
                </div>
                <div class="container">

                </div>
            </div>
        </section>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="scss">
    section.banner {
        position: relative;
        background: linear-gradient(to bottom,#7a19f1,#332179);
        background-attachment: fixed;
        padding-top: 200px;
        padding-bottom: 300px;

        &:before {
            position: absolute;
            content: "";
            width: 100%;
            height: 320px;
            opacity: .1;
            bottom: -50px;
            left: 0;
            background: url('~assets/images/wave.svg');
            transform: scaleX(-1);
            background-size: 100% 100%;
            z-index: 2;
        }
        &:after {
            position: absolute;
            content: "";
            width: 100%;
            height: 400px;
            opacity: .1;
            bottom: -50px;
            left: 0;
            background: url('~assets/images/wave.svg');
            background-size: 100% 100%;
            z-index: 2;
        }

        .section-inner {
            color: $white;
        }
    }

    section {

        &:nth-child(2) {
            position: relative;

            &:after {
                position: absolute;
                content: "";
                width: 100%;
                height: 34px;
                top: -34px;
                left: 0;
                background: url('~assets/images/bg-slim.png');
                background-size: 100% 100%;
                z-index: 2;
            }

            .section-inner {
                margin-top: -80px;
                display: flex;
                align-items: stretch;
                justify-content: center;
                box-shadow: $bxs;
                @include border-radius(20px);
                margin-top: -200px;
                position: relative;
                z-index: 3;


                .container {
                    flex: 1;
                    padding: 40px;
                    background: $white;

                    &:first-child {
                        @include border-radius(20px,(bottom-left, top-left));
                    }
                    &:last-child {
                        @include border-radius(20px,(bottom-right, top-right));
                    }

                    &:nth-child(2) {  @include border((left, right)); }

                    p {
                        text-align: center;
                    }
                    p.head {
                        color: $purple;
                        font-weight: 500;
                        margin-top: 40px;
                        margin-bottom: 10px;
                    }

                    ul {
                        @include flex;
                        font-size: 16px;
                        line-height: 26px;
                        letter-spacing: 1px;
                        font-weight: 100;
                        font-family: $fp;
                    }
                }
            }
        }

        &:nth-child(3) {
            background: $purple;
            color: $white;
            position: relative;
        }

        &:nth-child(4) {
            @include grid(2, 40px);

            .container {
                img {
                    width: 400px;
                    height: auto;
                }
            }
        }
    }
</style>
