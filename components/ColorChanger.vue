<template>
    <div class="color-changer">
        <span @click="showDropdown = !showDropdown"
            >Don't like the colors?<i class="fas fa-chevron-down"></i
        ></span>
        <ul v-if="showDropdown" class="color-changer__list">
            <li
                v-for="color in colors"
                :key="color"
                @click="changeColor(color)"
                class="list-item"
            >
                {{ color }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showDropdown: false,
            colors: ["purple", "black", "white", "red"],
        };
    },
    methods: {
        changeColor(color) {
            this.showDropdown = false;
            this.$store.commit("SET_COLOR", color);
        },
    },
};
</script>

<style lang="scss" scoped>
.color-changer {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    color: $white;
    font-family: $fontText;

    span {
        cursor: pointer;

        i {
            margin-left: 15px;
        }
    }

    &__list {
        position: absolute;
        top: 100%;
        width: 100%;

        .list-item {
            width: 100%;
            cursor: pointer;
        }
    }
}
</style>
