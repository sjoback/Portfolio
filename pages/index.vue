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
                <div class="grid">
                    <div
                        v-addClass="{threshold: .5, class: 'animate'}"
                        class="grid-inner"
                    >
                        <div class="container">
                            <img src="~/assets/images/work-kreditkort.png" alt=""/>
                        </div>
                        <div class="container">
                            <div>
                                <div class="container-head">
                                    <h2>Kreditkort.com</h2>
                                    <span>2020</span>
                                </div>

                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                                <a href="https://kreditkort.com" target="_blank">Visit site</a>
                            </div>
                        </div>
                    </div>

                    <div
                        v-addClass="{threshold: .5, class: 'animate'}"
                        class="grid-inner"
                    >
                        <div class="container">
                            <img src="~/assets/images/work-bettingguide.png" alt=""/>
                        </div>
                        <div class="container">
                            <div>
                                <div class="container-head">
                                    <h2>Bettingguide.com</h2>
                                    <span>2020</span>
                                </div>

                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <footer>
            <div class="footer-inner">
                <h1>K.I.S.S</h1>
                <h2>Keep it simple, stupid!</h2>
                <span>Keeping it simple since 1990.</span>
            </div>
        </footer>
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
            .grid {
                @include grid(1, 160px);

                &-inner.animate {
                    opacity: 1;
                    animation: animate .3s ease-in forwards;
                }
                &-inner {
                    opacity: 0;
                    @include grid(2, 40px);

                    .container {
                        img { @include size(500px, auto); }

                        &:last-child {
                            @include flex;

                            div { @include flex(start); }

                            .container-head {
                                @include flex(start);

                                h2 {
                                    text-align: left;
                                    width: auto;
                                    margin: 0;
                                }

                                span {
                                    background: $purple;
                                    padding: 5px;
                                    border-radius: 3px;
                                    color: $white;
                                    font-size: 12px;
                                    margin-left: 20px;
                                    font-family: $fp;
                                    font-weight: bold;
                                }
                            }

                            p {
                                @include spacing(margin,6,(bottom,top));
                            }

                            a {
                                background: $purple;
                                padding: 15px 30px;
                                font-family: $fp;
                                letter-spacing: .5px;
                                color: $white;
                                border-radius: 50px;
                                transition: .15s ease-in-out;

                                &:hover { background: $darkpurple; }
                            }
                        }
                    }
                }
            }
        }
    }

    footer {
        @include flex;
        background: $purple;
        padding: 80px 20px;
        width: 100%;
        box-sizing: border-box;

        .footer-inner {
            width: 1000px;
            @include flex;
            max-width: 100%;
            color: $white;
        }
    }

    @keyframes animate {
        from {
            opacity: 0;
            transform: translateY(50px);
        }
        to {
            opacity: 1;
            transform: translateY(0px);
        }
    }
</style>
