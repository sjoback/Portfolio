<template>
    <section>
        <div class="section-inner">
            <div class="container">
                <div class="container-inner">
                    <img src="~/assets/images/designer.png" alt="Designer">
                    <h2>Designer</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>

                    <h5>Things I enjoy designing:</h5>
                    <p>Simplistic design, Beautiful colors, Clean patterns</p>
                    <h5>Tools I use:</h5>
                    <ul>
                        <li>Adobe Photoshop</li>
                        <li>Adobe Illustrator</li>
                        <li>Invision</li>
                        <li>Paper sketch</li>
                    </ul>
                </div>
            </div>

            <div class="container">
                <div class="container-inner">
                    <img src="~/assets/images/developer.png" alt="Front-end Developer">
                    <h2>Front-end Developer</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                    <h5>Things I enjoy designing:</h5>
                    <p>Born and bread Vue-head. Other frameworks are sweet, Vue is sweeter.</p>
                    <h5>How I do it:</h5>
                    <ul>
                        <li>Vue</li>
                        <li>React</li>
                        <li>Wordpress</li>
                        <li>Laravel</li>
                    </ul>
                </div>
            </div>

            <div class="container">
                <div class="container-inner">
                    <img src="~/assets/images/bingewatcher.png" alt="Bing watcher">
                    <h2>Binge watcher</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                    <h5>Things I enjoy binging on:</h5>
                    <p>Comedy, Drama, Sci Fi, Documentaries</p>
                    <h5>A few series I recommend:</h5>
                    <ul>
                        <li>The Office(US)</li>
                        <li>How I met your mother</li>
                        <li>Succession</li>
                        <li>The Leftovers</li>
                        <!-- <li>True Detective S1</li> -->
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
section {
    padding: 40px 20px;
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

    // &:before {
    //     position: absolute;
    //     content: "";
    //     width: 100%;
    //     height: 34px;
    //     bottom: -34px;
    //     transform: scaleY(-1);
    //     left: 0;
    //     background: url('~assets/images/bg-slim.png');
    //     background-size: 100% 100%;
    //     z-index: 2;
    // }

    .section-inner {
        @include flex(center,stretch);
        position: relative;
        z-index: 3;

        &__header {
            color: #999;
            letter-spacing: 2px;
            margin-bottom: 60px;
            font-size: 20px;
        }

        .container {
            @include flex(center,start);
            height: 100%;
            width: 100%;
            @include spacing(padding,8);
            background: $white;

            @media screen and (min-width: 700px) {
                flex: 1;
                width: auto;
            }

            &-inner {
                @include flex(center,start);
            }

            &:nth-child(2) {
                @include border((top, bottom));

                @include device(pad) {
                    @include border((left, right));
                }
            }

            img {
                @include size(60px);
                margin-bottom: 40px;
            }

            p { text-align: center; }
            h5 {
                color: $purple;
                font-weight: 500;
                margin-top: 40px;
                margin-bottom: 10px;
            }

            ul {
                @include flex;
                width: 100%;
                @include font-size(16px, 10px);
                font-family: $fp;

                li {
                    font-weight: 200;
                    width: 100%;
                    text-align: center;
                }
            }
        }
    }
}

</style>
