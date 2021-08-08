<template>
    <transition name="fade">
        <div class="loader flex" v-if="open">
            <AnimatedText />
        </div>
    </transition>
</template>

<script>
    import AnimatedText from '@/components/Svg.vue'
    export default {
        components: { AnimatedText },
        data() {
            return {
                open: true
            }
        },
        watch: {
            open() {
                document.body.style.overflow = this.open ? 'hidden' : ''
            }
        },
        mounted() {
            setTimeout( ()=>{
                this.open = false
            // }, 2250 );
            }, 50 );
        }
    }
</script>

<style lang="scss" scoped>
    .loader {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: #fff;
        z-index: 99;
    }
</style>
