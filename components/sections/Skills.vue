<template>
    <section>
        <div class="section-inner">
            <div class="container">
                <img src="~/assets/images/designer.png" alt="Designer">
                <h2>Designer</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>

                <h5>Things I enjoy designing:</h5>
                <p>Simplistic design, Beautiful color schemas, sdfsa</p>
                <h5>Tools I use/prefer:</h5>
                <ul>
                    <li>Adobe Photoshop</li>
                    <li>Adobe Illustrator</li>
                    <li>Sketch</li>
                    <li>Invision</li>
                    <li>Paper sketch</li>
                </ul>
            </div>
            <div class="container">
                <img src="~/assets/images/developer.png" alt="Front-end Developer">
                <h2>Front-end Developer</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                <h5>Things I enjoy designing:</h5>
                <p>Something, test, sadfasdf, sdfsa</p>
                <h5>Tools I use/prefer:</h5>
                <ul>
                    <li>Thing</li>
                </ul>
            </div>
            <div class="container">
                <img src="~/assets/images/bingewatcher.png" alt="Bing watcher">
                <h2>Bing watcher</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                <h5>Things I enjoy designing:</h5>
                <p>Something, test, sadfasdf, sdfsa</p>
                <h5>Tools I use/prefer:</h5>
                <ul>
                    <li>Thing</li>
                </ul>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
section {
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
            @include flex(center,start);
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
