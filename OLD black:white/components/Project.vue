<template>
    <div class="work">
        <a
            href="#"
            target="_blank"
            v-stagger="{ threshold: .5 }"
            v-for="( project, index ) in data"
            :key="index"
            @click="openProject = index"
            @mouseenter="openProject = index"
            @mouseleave="openProject = undefined"
            class="mobile"
        >
            <i class="fab fa-github-alt" />

            <transition name="fade">
                <div
                    v-show="openProject === index"
                    class="open-project flex"
                >
                    <div class="content flex">
                        <div class="flex-1">

                        </div>
                        <div class="flex-1">

                        </div>
                    </div>
                </div>
            </transition>
        </a>
    </div>
</template>

<script>
export default {
    props: {
        data: {
            type: Array,
            required: true,
            default: () => []
        }
    }
}
</script>

<style lang="scss" scoped>
.popper { animation: popper .25s forwards; }
.popper:nth-child(1) { animation-delay: .35s; }
.popper:nth-child(2) { animation-delay: .4s; }
.popper:nth-child(3) { animation-delay: .55s; }
.popper:nth-child(4) { animation-delay: .70s; }
.popper:nth-child(5) { animation-delay: .85s; }
@keyframes popper {
    0% {
        opacity: 0;
        transform: translateY(100px);
    }
    100% {
        opacity: 1;
        transform: translateY(0px);
    }
}
.work {
    @include grid(5, 40px);
    position: relative;

    .mobile {
        @include flex;
        color: #000;
        i {
            // box-shadow: $bxs;
            font-size: 130px;
        }
    }
}

.open-project {
    position: absolute;
    bottom: 100%;
    transform: translateX(-50%);
    left: 50%;
    z-index: 1;

    .content {
        border-radius: 20px;
        min-height: 300px;
        width: 300px;
        max-width: 100%;
        position: relative;
        z-index: 2;
        background: #fff;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        padding: 20px;
        box-sizing: border-box;

        img {
            height: 300px;
            width: auto;
        }

        span {
            font-weight: bold;
        }

        .flex-1:first-child {
            padding-right: 20px;
        }

        a {
            color: #000;
            &:hover { text-decoration: underline; }
        }

        .stack {
            width: 100%;
            justify-content: flex-start;

            .container {
                background: #222;
                color: #fff;
                padding: 5px;
                border-radius: 2px;
                margin: 5px;
            }
        }

        .socials {
            width: 100%;

            i {
                margin: 0 20px;
                font-size: 42px;
                cursor: pointer;
            }
        }
    }

    .overlay {
        z-index: 1;
        position: absolute;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0, .25);
    }
}
</style>
