<template>
    <section>
        <div class="section-inner">
            <div class="container">
                <div class="container-inner">
                    <img src="/images/designer.webp" alt="Designer" load="eager">
                    <h2>Designer</h2>
                    <p>I enjoy designing with vibrant colors, clean patterns and a 'less is more' mindset.</p>

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
                    <img src="/images/developer.webp" alt="Front-end Developer" load="lazy">
                    <h2>Front-end Developer</h2>
                    <p>I like clean, SEO-optimized & easily digestible code. I love & live in the browser.</p>
                    <h5>Frameworks I enjoy:</h5>
                    <p>Born and bread Vue-head. I've dabbled in React & Laravel.</p>
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
                    <img src="/images/bingewatcher.webp" alt="Bing watcher" load="lazy">
                    <h2>Binge watcher</h2>
                    <p>When I need to find inspiration or creativity I enjoy watching something intriguing.</p>
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
    margin-top: 1px;

    &:after {
        position: absolute;
        content: "";
        width: 100%;
        height: 34px;
        top: -34px;
        left: 0;
        background: url('/images/bg-slim.png');
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
    //     background: url('~assets/images/bg-slim.webp');
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
                @include size(80px);
                margin-bottom: 40px;

                @include device(pad){
                    @include size(110px);
                }

                @include device(desktop){
                    @include size(140px);
                }
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
                font-family: $fontText;

                li {
                    font-weight: 200;
                    width: 100%;
                    text-align: center;
                }
            }
        }
    }
}

// Colors
.black {
    section::after {
        display: none;
    }
}
</style>
