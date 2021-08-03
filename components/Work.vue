<template>
    <div class="work">
        <div
            class="mobile"
            v-for="( site, index ) in sites"
            :key="index"
        >
            <a
                :href="site.url"
                target="_blank"
                class="mobile-inner flex"
            >
                <h5>{{ site.name }}</h5>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            projects: [],
            sites: [
                {
                    name: 'BettingGuide',
                    url: 'https://www.bettingguide.com'
                },
                {
                    name: 'Kreditkort',
                    url: 'https://www.kreditkort.com'
                },
                {
                    name: 'Compinero',
                    url: 'https://www.compinero.com'
                },
                {
                    name: 'Lånen',
                    url: 'https://www.lånen.se'
                },
                {
                    name: 'AlltOmKreditkort',
                    url: 'https://www.alltomkreditkort.se'
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

    .section--inner {
        overflow: scroll;
    }

    .mobile {
        margin: 20px;
        cursor: pointer;
        border-radius: 20px;
        width: 180px;
        height: 320px;
        background: #000;
        box-sizing: border-box;
        padding: 7px;

        &-inner {
            text-align: center;
            box-sizing: border-box;
            padding: 10px;
            padding-top: 30px;
            background: #333;
            height: 100%;
            border-radius: 13px;
            position: relative;
            color: white;

            h5 {
                margin-top: -40px;
            }

            &:after {
                position: absolute;
                content: "";
                top: 0;
                left: 50%;
                transform: translateX(-50%);
                width: 90px;
                height: 17.5px;
                background: #000;
                border-bottom-left-radius: 10px;
                border-bottom-right-radius: 10px;
            }
        }

        &-content {
            display: none;
        }

        &:hover {
            .mobile-content {
                display: block;
            }
        }
    }
}
</style>
