<template>
    <section>
        <div class="section-inner">
            <img src="/images/avatar.webp" alt="It's me!" load="lazy" />
            <h2>Hi! It's me.</h2>
            <hr />
            <p>
                Just your average 32-year old guy living in Mölndal with a
                passion for design & code. Currently working as front-end
                developer at a media company. Tech stack includes Vue, React,
                NextJS, Flutter and Wordpress.
            </p>

            <p>
                I enjoy working in a fast-paced environment and thrive when
                given creative freedom. My experience includes design,
                developing and maintaining websites aswell as creating mobile
                apps.
            </p>

            <p>
                As seen in many of my projects I enjoy mixing vibrant colors
                with simplistic design, icons and clean patterns.
            </p>

            <p>
                Now enough about me. Scroll down and have a look at what I've
                been doing lately. Enjoy!
            </p>
        </div>
    </section>
</template>

<style lang="scss" scoped>
section {
    background: $purple;
    color: $white;
    position: relative;
    background: linear-gradient(to bottom, #7a19f1, #332179);

    &:before,
    &:after {
        position: absolute;
        content: "";
        width: 100%;
        height: 400px;
        opacity: 0.1;
        bottom: -100px;
        left: 0;
        background: url("~assets/images/wave.svg");
        background-size: cover;
        z-index: 2;
    }

    &:after {
        transform: scaleX(-1);
        height: 320px;
        opacity: 0.05;
    }

    .section-inner {
        text-align: center;
        width: 700px;

        h2 {
            @include spacing(margin, 4, bottom);
            @include spacing(margin, 8, top);
            width: 100%;
            text-align: center;
            @include font-size(46px);
        }

        hr {
            background: $orange;
            width: 300px;
            height: 7px;
            border: none;
            margin: 20px 0;
        }

        p {
            margin: 15px 0;
        }

        img {
            @include size(200px);
            position: relative;

            &:after {
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
    }
}
</style>
