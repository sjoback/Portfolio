<template>
    <section>
        <div class="section-inner">

            <h2 class="section-inner__header">Tools</h2>

            <div
                class="section-inner__grid"
            >
                <ul>
                    <li>
                        <a href="#" target="_blank"><i class="fab fa-github-alt"></i></a>
                        <a href="#" target="_blank"><i class="fab fa-npm"></i></a>
                        <span>Base-CSS</span>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            tab: 2
        }
    }
}
</script>

<style lang="scss" scoped>
section {
    .section-inner {
        ul {
            li {
                @include flex;

                i {
                    color: $purple;
                    font-size: 46px;
                    margin: 0 20px;
                }

                span {
                    margin: 0 20px;
                    color: $font;
                    font-weight: bold;
                    @include font-size(24px);
                    font-family: $fp;
                }
            }
        }
    }
}
</style>
