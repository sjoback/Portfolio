<template>
    <footer>
        <div class="footer-inner">
            <div class="footer-inner__outro">
                <img src="/favicon.ico" alt="Joakim Sjöbäck">
                <div class="outro-quote">
                    <i class="fas fa-quote-left"></i>
                    <h1>Good artists copy, great artists steal</h1>
                    <i class="fas fa-quote-right"></i>
                </div>
                <!-- <span>Or you know.. buying a plane ticket</span> -->
            </div>

            <ul class="footer-inner__socials">
                <li
                    v-for="(social, index) in socials"
                    :key="index"
                >
                    <a
                        :href="social.url"
                        :alt="social.name"
                        target="_blank"
                    >
                        <i :class="social.icon"></i>
                    </a>
                </li>
            </ul>

            <div class="footer-inner__copy">Handcrafted by Me Ⓒ 2021</div>
        </div>
    </footer>
</template>

<script>
export default {
    computed: {
        socials() {
            return [
                {
                    name: 'github',
                    url: '',
                    icon: 'fab fa-github-alt'
                },
                {
                    name: 'instagram',
                    url: '',
                    icon: 'fab fa-instagram'
                },
                {
                    name: 'linkedin',
                    url: 'https://www.linkedin.com/in/joakim-sj%C3%B6b%C3%A4ck-8089a0110/',
                    icon: 'fab fa-linkedin-in'
                }
            ]
        }
    },
}
</script>

<style lang="scss" scoped>
footer {
    @include flex;
    background: $purple;
    background: linear-gradient(to bottom,#7a19f1,#332179);
    padding: 80px 20px;
    width: 100%;
    box-sizing: border-box;

    .footer-inner {
        width: 1000px;
        @include flex;
        max-width: 100%;
        color: $white;

        &__outro {
            @include grid(1, 20px);
            width: 100%;
            text-align: center;

            img {
                @include size(60px);
                margin: auto;
            }

            .outro-quote {
                @include flex;
                @include spacing(margin,6,top);

                h1 {
                    text-transform: uppercase;
                    font-size: 32px;
                    margin: 0 15px;
                    font-weight: 200;
                }

                i {
                    margin-top: -20px;
                    font-size: 22px;
                }
            }
        }

        &__socials {
            @include grid(3, 30px);
            @include spacing(margin,10,(top,bottom));

            li {
                @include size(60px);
                @include border-radius(100px);
                @include border(all, 2px, $darkpurple);
                transition: .15s ease-in-out;

                &:hover { background: $darkpurple; }

                a {
                    color: $white;
                    @include flex;
                    @include size(100%);
                    font-size: 22px;
                }
            }
        }

        &__copy {
            font-family: $fontText;
            font-weight: 100;
            opacity: .8;
            width: 100%;
            text-align: center;
            font-size: 14px;
        }
    }
}
</style>
