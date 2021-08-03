<template>
    <div class="nav">
        <nuxt-link to="/" class="nav__logo">
            <span>Joakim</span>
            <span>Sjöbäck</span>
        </nuxt-link>

        <ul class="nav__list">
            <nuxt-link class="nav__list-link black p-20" to="/about">About</nuxt-link>
            <nuxt-link class="nav__list-link black p-20" to="/contact">Contact</nuxt-link>
        </ul>
        <!-- <ChatBot /> -->
    </div>
</template>
<script>
    import ChatBot from './ChatBot.vue';
    export default {
        components: { ChatBot }
    }
</script>
<style lang="scss">

.nav {
    display: flex;
    align-items: center;
    z-index: 2;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: #fff;

    &__logo {
        padding: 20px;
        color: #000;

        span {
            font-size: 20px;
            line-height: 20px;
            display: block;
            font-family: 'WindSong', cursive;
        }
        span:last-child { margin-left: 20px; }
    }

    &__list {
        flex: 1;
        height: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        margin-right: 200px;

        a {
            font-family: $a;

            &:hover {
                position: relative;

                &:after {
                    transition: .3s ease-in-out;
                    content: "";
                    position: absolute;
                    bottom: 10px;
                    left: 15%;
                    transform: skewY(3deg);
                    height: 5px;
                    width: 70%;
                    background: #111;
                }
            }
        }

        a:nth-child(odd) {
            &:after {
                transform: skewY(-3deg);
            }
        }
    }
}
.nuxt-link-exact-active {

}
</style>
