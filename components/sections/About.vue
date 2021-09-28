<template>
    <section>
        <div class="section-inner">
            <img src="~/assets/images/avatar.png" alt="">
            <h2>Hi! It's me.</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
    </section>
</template>

<style lang="scss" scoped>
section {
    background: $purple;
    color: $white;
    position: relative;

    .section-inner {
        text-align: center;
        width: 700px;

        img {
            @include size(200px);
        }

        h2 {
            @include spacing(margin,8,(top, bottom));
        }
    }
}
</style>
