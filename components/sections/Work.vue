<template>
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
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
section {
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
