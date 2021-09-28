<template>
    <footer>
        <div class="footer-inner">
            <div class="footer-inner__outro">
                <h2>A Journey of a Thousand Miles Begins with a Single Step</h2>
                <span>Or you know.. buying a plane ticket</span>
            </div>

            <ul class="footer-inner__socials">
                <li
                    v-for="social in socials"
                    :key="social"
                >
                    <a
                        :href="social.url"
                        :alt="social.name"
                    >
                        <i :class="social.icon"></i>
                    </a>
                </li>
            </ul>
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
                    url: '',
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
        }

        &__socials {
            @include grid(3, 30px);
            @include spacing(margin,8,top);

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
    }
}
</style>
