<template>
    <div class="main">
        <section class="banner">
            <div class="section-inner">
                <h1>DESIGNER,</h1>
                <h1>FRONT-END DEVELOPER,</h1>
                <h1>BINGE WATCHER</h1>
            </div>
        </section>

        <section>
            <div class="section-inner">
                <div class="container">
                    <h2>Designer</h2>
                </div>
                <div class="container">
                    <h2>Front-end Developer</h2>
                </div>
                <div class="container">
                    <h2>Bing watcher</h2>
                </div>
            </div>
        </section>

        <section>
            <div class="section-inner">
                <h2>Hi! It's me.</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </section>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="scss">
    section.banner {
        position: relative;
        background: linear-gradient(to bottom,#7a19f1,#332179);
        background-attachment: fixed;
        padding-top: 200px;
        padding-bottom: 200px;

        .section-inner {
            color: $white;
        }
    }

    section {

        &:nth-child(2) {
            position: relative;
            &:after {
                position: absolute;
                content: "";
                width: 100%;
                height: 114px;
                top: -114px;
                left: 0;
                background: url('~assets/images/bg-slim.png');
                background-size: 100% 100%;
                z-index: 2;
            }

            .section-inner {
                margin-top: -80px;
                display: flex;
                align-items: stretch;
                justify-content: center;
                box-shadow: $bxs;
                @include border-radius(20px);
                border: 1px solid #e6e6e6;

                .container {
                    flex: 1;
                    padding: 40px;
                    background: $white;

                    &:first-child {
                        @include border-radius(20px,(bottom-left, top-left));
                    }
                    &:last-child {
                        @include border-radius(20px,(bottom-right, top-right));
                    }

                    &:nth-child(2) {  @include border((left, right)); }
                }
            }
        }

        &:nth-child(3) {
            background: #7a19f1;
            color: $white;
            position: relative;

            // &:after {
            //     position: absolute;
            //     content: "";
            //     width: 100%;
            //     height: 114px;
            //     top: -114px;
            //     left: 0;
            //     background: url('~assets/images/bg-slim.png');
            //     background-size: 100% 100%;
            //     z-index: 2;
            // }


        }
    }
</style>
