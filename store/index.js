export const state = () => ({
    activeColor: undefined,
    showChatBot: false
})

export const mutations = {
    SET_COLOR(state, color) {
        state.activeColor = color
    },

    SHOW_CHATBOT(state, bool) {
        state.showChatBot = bool
    }
}
