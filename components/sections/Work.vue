<template>
    <section>
        <div class="section-inner">
            <div class="section-inner__grid">
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
                                <span>2019</span>
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

                            <a href="https://bettingguide.com" target="_blank">Visit site</a>
                        </div>
                    </div>
                </div>

                <div
                    v-addClass="{threshold: .5, class: 'animate'}"
                    class="grid-inner"
                >
                    <div class="container">
                        <img src="~/assets/images/work-compary.png" alt=""/>
                    </div>
                    <div class="container">
                        <div>
                            <div class="container-head">
                                <h2>Compary.com</h2>
                                <span>2020</span>
                            </div>

                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                            <a href="https://compary.com" target="_blank">Visit site</a>
                        </div>
                    </div>
                </div>

                <div
                    v-addClass="{threshold: .5, class: 'animate'}"
                    class="grid-inner"
                >
                    <div class="container">
                        <img src="~/assets/images/work-compinero.png" alt=""/>
                    </div>
                    <div class="container">
                        <div>
                            <div class="container-head">
                                <h2>Compinero.com</h2>
                                <span>2020</span>
                            </div>

                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                            <a href="https://compinero.com" target="_blank">Visit site</a>
                        </div>
                    </div>
                </div>

                <div
                    v-addClass="{threshold: .5, class: 'animate'}"
                    class="grid-inner"
                >
                    <div class="container">
                        <img src="~/assets/images/work-aok.png" alt=""/>
                    </div>
                    <div class="container">
                        <div>
                            <div class="container-head">
                                <h2>AlltOmKreditkort.se</h2>
                                <span>2021</span>
                            </div>

                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                            <a href="https://alltomkreditkort.se" target="_blank">Visit site</a>
                        </div>
                    </div>
                </div>

                <div
                    v-addClass="{threshold: .5, class: 'animate'}"
                    class="grid-inner"
                >
                    <div class="container">
                        <img src="~/assets/images/work-lånen.png" alt=""/>
                    </div>
                    <div class="container">
                        <div>
                            <div class="container-head">
                                <h2>Lånen.se</h2>
                                <span>2021</span>
                            </div>

                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                            <a href="https://lånen.se" target="_blank">Visit site</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            tab: 2
        }
    }
}
</script>

<style lang="scss" scoped>
section {
    .section-inner {
        &__grid {
            @include grid(1, 100px);
            @include device(pad) {
                @include grid(1, 160px);
            }

            &:first-child { margin-bottom: 100px; }

            .grid-inner.animate {
                opacity: 1;
                animation: animate .3s ease-in forwards;
            }
            .grid-inner {
                opacity: 0;
                @include grid(1, 40px);

                @include device(pad) {
                    @include grid(2, 20px);
                }

                @include device(desktop) {
                    @include grid(2, 40px);
                }

                .container {
                    img {
                        @include size(250px, auto);
                        @include device(pad) {
                            @include size(300px, auto);
                        }

                        @include device(desktop) {
                            @include size(500px, auto);
                        }
                    }

                    &:first-child {
                        @include flex;
                    }

                    &:last-child {
                        @include flex;

                        div {
                            @include flex;
                            @include device(pad) {
                                @include flex(start);
                            }
                        }

                        .container-head {
                            @include flex(start);
                            position: relative;

                            h2 {
                                text-align: left;
                                width: auto;
                                margin: 0;

                                @include device(mobile) {
                                    margin-top: 40px;
                                }
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

                                @include device(mobile) {
                                    position: absolute;
                                    left: 50%;
                                    transform: translateX(-50%);
                                    margin-left: 0;
                                    top: -10px;
                                }
                            }
                        }

                        p {
                            @include spacing(margin,6,(bottom,top));
                            text-align: center;
                            @include device(pad) {
                                text-align: left;
                            }
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
