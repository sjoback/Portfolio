<template>
    <div class="nav">
        <img src="/favicon.ico" alt="Joakim Sjöbäck" load="eager" class="nav-logo">

        <!-- <ColorChanger /> -->

        <!-- <ul class="nav-list">
            <li>
                <nuxt-link to="#">Binge watcher</nuxt-link>
            </li>
            <li>
                <nuxt-link to="#">Say What's up!</nuxt-link>
            </li>
        </ul> -->
        <!-- <ChatBot /> -->
    </div>
</template>

<script>
import ChatBot from '@/components/ChatBot.vue';
import ColorChanger from '@/components/ColorChanger.vue';
export default {
    components: { ChatBot, ColorChanger }
}
</script>

<style lang="scss" scoped>
.nav {
    @include flex(between);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 99;
    box-sizing: border-box;
    padding: 20px;

    &-logo {
        @include size(60px);
    }

    &-list {
        flex: 1;
        @include flex(end);

        li a {
            margin-left: 40px;
            font-family: $fontText;
            // font-weight: bold;
            color: $white;
        }
    }
}
</style>
