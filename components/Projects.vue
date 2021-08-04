<template>
    <div>
        <div class="work" v-animate="{ threshold: .5, animation: 'slide-up', duration: '.3s' }">
            <div
                class="mobile"
                v-for="( project, index ) in projects"
                :key="index"
                @click="openProject = project"
            >
                <div class="mobile-inner flex">
                    {{ project.name }}
                </div>
            </div>
        </div>

        <transition name="fade">
            <div class="open-project flex" v-if="openProject">
                <div class="content flex">
                    <div class="flex-1">

                    </div>
                    <div class="flex-1">

                    </div>
                </div>

                <div class="overlay" @click="openProject = false" />
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    data() {
        return {
            openProject: false,
            projects: [
                {
                    name: 'Base-CSS'
                },
                {
                    name: 'Vue-Components'
                },
                {
                    name: 'Vue-Directive'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.work {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    .mobile {
        position: relative;
        margin: 20px;
        cursor: pointer;
        border-radius: 20px;
        border-top-left-radius: 0;
        width: 290px;
        height: 200px;
        border: 7px solid #000;
        transition: .15s ease-in-out;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

        &:hover {
            transform: scale(1.1);
        }

        &:after {
            content: "";
            position: absolute;
            bottom: 100%;
            left: -7px;
            width: 100px;
            height: 35px;
            border-top-left-radius: 20px;
            background: #000;
        }
    }
}

.open-project {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;

    .content {
        min-height: 300px;
        width: 900px;
        max-width: 100%;
        position: relative;
        z-index: 2;
        background: #fff;
        border-radius: 5px;
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
