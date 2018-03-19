<template>
    <div>
        <h1>{{show}} {{percent}}</h1>
        <transition name="fade">
            <div class="loading-bar" v-show="show">
                <div class="inner" :style="styles"></div>
            </div>
        </transition>
    </div>
</template>

<script>
import loadingBar from '../../mixins/shared/loadingbar'

export default {
    name: 'loading-bar',
    mixins: [loadingBar],
    data () {
        return {
            show: true,
            status: 'success',
            percent: 0,
            color: '#2d8cf0',
            failedColor: '#ed3f14'
        }
    },
    computed: {
        styles () {
            let style = {
                width: `${this.percent}%`
            }
            if (this.status === 'success') {
                style.backgroundColor = this.color
            }
            if (this.status === 'error') {
                style.backgroundColor = this.failedColor
            }
            return style
        }
    },
    methods: {
        showProgress (show) {
            this.show = show
            console.log('this.show', this.show)
            console.log('this.percent', this.percent)
        },
        start () {
            this.showProgress(true)
            this.percent = 0
        },
        stop () {
            setTimeout(() => {
                this.showProgress(false)
                console.log('this', this)
                this.percent = 100
            }, 1500)
        }
    }
}
</script>

<style lang="scss">
    .loading-bar {
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;

        & .inner {
            transition: width .2s linear;
            height: 5px;
        }

        & .color-primary {
            background-color: #2d8cf0;
        }

        & .color-error {
            background-color: #ed3f14;
        }
    }
    
</style>

