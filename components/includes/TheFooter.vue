<template>
    <footer>
        <div class="footer-inner">
            <h2>A Journey of a Thousand Miles Begins with a Single Step</h2>
            <span>Or you know.. buying a plane ticket</span>
        </div>
    </footer>
</template>

<script>
export default {
    computed: {
        socials() {
            return [
                {
                    name: 'github',
                    url: '',
                    icon: 'fab fa-github-alt'
                },
                {
                    name: 'instagram',
                    url: '',
                    icon: 'fab fa-instagram'
                },
                {
                    name: 'linkedin',
                    url: '',
                    icon: 'fab fa-linkedin-in'
                }
            ]
        }
    },
}
</script>

<style lang="scss" scoped>
footer {
    @include flex;
    background: $purple;
    padding: 80px 20px;
    width: 100%;
    box-sizing: border-box;

    .footer-inner {
        width: 1000px;
        @include flex;
        max-width: 100%;
        color: $white;
    }
}
</style>
