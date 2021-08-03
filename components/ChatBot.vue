<template>
    <div class="chat">
        <div v-if="open" @click="open = false" class="chat-overlay"></div>
        <button @click="open =! open" type="button" name="button" class="p-10 bg-mgray">
            <transition name="pop" mode="out-in">
                <i v-if="!open" class="fas fa-comment-dots white h4"></i>
                <i v-else class="fas fa-times white h4"></i>
            </transition>
        </button>

        <transition name="chat">
        <div v-if="open" class="chat-window bg-mgray">
            <div class="head p-20 flex flex-x">
                <h5 class="white t-bold">Non-human Robot</h5>
                <span class="p m-t-10 white">Please interact with me!</span>
            </div>
            <div class="chat-msg p-20">
                <div class="">
                    <div v-for="i in intro.msg" class="stretch"><span class="m-b-20 bot-msg white f-14">{{i}}</span></div>
                    <div v-for="(i, index) in intro.options" @click="showReply(i)" class="stretch"><span class="user-msg black m-b-20 f-14">{{i}}</span></div>
                </div>
                <div class="replies">

                </div>
            </div>
        </div>
        </transition>
    </div>
</template>
<script>
export default {
    data() {
        return {
            open: false,
            botMsg: '',
            intro: {
                msg: [
                    "Alive! Computing ...",
                    "Hello Human!",
                    "How can I brighten your day?"
                ],
                options: [
                    "I just wanted to compliment you on your beautiful work.",
                    "I would like to hire you.",
                    "How can I get in contact with you?"
                ]
            }
        }
    },
    watch: {
    },
    methods: {
        showReply(i) {

        }
    }
}
</script>
<style lang="scss" scoped>
    .chat {
        button {
            cursor: pointer;
            border: none;
            outline: none;
            border-radius: 100px;
            box-shadow: $bxs;
            position: fixed;
            bottom: 20px; right: 20px;
            width: 60px;
            height: 60px;
            z-index: 2;
        }
        &-window {
            overflow-y: scroll;
            width: 350px;
            max-width: calc(100% - 40px);
            position: fixed;
            right: 20px;
            bottom: 100px;
            border-radius: 5px;
            box-shadow: $bxs;
            height: 500px;
            overflow: hidden;
            z-index: 2;
            .head {
                background: #404040;
            }
        }
        &-msg {
            overflow-y: scroll;
            div {
                overflow-y: scroll;
                display: inline-block;
            }
        }
        .bot-msg {
            border: 1px solid #404040;
            padding: 10px 20px;
            border-radius: 5px;
            float: left;
            display: inline-block;
        }
        .user-msg {
            padding: 10px 20px;
            background: white;
            float: left;
            border-radius: 5px;
            cursor: pointer;
        }
        &-overlay {
            z-index: 1;
            position: fixed;
            top: 0; left: 0; width: 100%; height: 100%;
            background: transparent;
        }
    }
</style>
