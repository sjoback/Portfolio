<template>
    <div
        class="nav"
        :class="{ scrolled: scrolled }"
    >
        <img src="/favicon.ico" alt="" class="nav-logo">

        <ul class="nav-list">
            <li>
                <nuxt-link to="#">Binge watcher</nuxt-link>
            </li>
            <li>
                <nuxt-link to="#">Say What's up!</nuxt-link>
            </li>
        </ul>
        <!-- <ChatBot /> -->
    </div>
</template>

<script>
import ChatBot from '@/components/ChatBot.vue';
export default {
    components: { ChatBot },
    methods: {
        emit() {
            // emit to layout so open chatbot with appropriate question/answer
        }
    }
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
    height: 80px;
    box-sizing: border-box;
    padding: 0 40px;

    &-logo {
        @include size(50px);
    }

    &-list {
        flex: 1;
        @include flex(end);

        li a {
            margin-left: 40px;
            font-family: $fp;
            font-weight: bold;
            color: $white;
        }
    }
}
</style>
