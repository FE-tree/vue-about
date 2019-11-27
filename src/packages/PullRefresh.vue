<template>
    <div id="pull-refresh">
        <div class="list"  @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd" :style="{ transform:listMove}">        
            <div class="list-icon" v-show="isLoad && !loading">
                <i class="iconfont icon-arrow-top"></i>
            </div>
            <div class="list-icon" v-show="!isLoad && !loading">
                <i class="iconfont icon-arrow-bottom"></i>
            </div>
            <div class="list-load" v-show="loading">
                <div class="zhuan"><i class="iconfont icon-loading"></i></div>
            </div>
            <div class="list-item" v-text="`translateY(${disL}px)`"></div>
            <div class="list-item" v-for="(item, i) in list" v-text="item" :key="i"></div>
            <div class="list-item" v-text="`translateY(${disL}px)`"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PullRefresh',
    data () {
        return {
            start: 0,
            // end: 0,
            disL: 0,
            listMove: 'translateY(0px)',
            isLoad: false,
            loading: false,
            list: [1,2,3,4,5,6,7,8,9],
            addNum: 1,
        }
    },
    watch: {},
    methods: {
        touchStart(e) {
            this.start = e.changedTouches[0].clientY;
        },
        touchMove(e) {
            this.disL = parseInt(e.changedTouches[0].clientY - this.start);
            this.listMove = 'translateY(' + this.disL +'px)'; 
            this.disL > 50 ? this.isLoad = true : this.isLoad = false;
        },
        touchEnd(e) {
            if(this.isLoad && !this.loading) {
                this.loading = true;
                setTimeout(() => {
                    this.loading = false
                    this.addNum = --this.addNum
                    this.list.unshift(this.addNum)
                    console.log(this.list)
                }, 2000)
            }
            // this.end = e.changedTouches[0].clientY
            this.listMove = 'translateY(0px)'
            this.disL = 0
        }
    }
}
</script>

<style scoped>
    .tabbar {
        width: 100%;
        background-color: #eee;
        display: flex;
        position: fixed;
        top: 0;
        z-index: 9;
    }
    .tabbar .tab {
        text-align: center;
        padding: 1rem 0;
        flex: 1;
    }
    .tabbar .active {
        color: #09f;
    }
    .tabbar .line {
        width: 25%;
        border-bottom: 2px solid #09f;
        position: absolute;
        bottom: 0;
        left: 0;
        transition: all .3s ease;
    }
    .list {
        /*margin-top: 48px;*/
        width: 100%;
        background-color: #fff;
        transform: translateY(0px);
    }
    .list .list-load {
        width: 100%;
        text-align: center;
        font-size: 2rem;
        height: 48px;
        line-height: 48px;
        background-color: #f5f6f8;
    }
    .list .list-icon {
        width: 100%;
        height: 48px;
        line-height: 48px;
        text-align: center;
        font-size: 2rem;
        position: absolute;
        top: -48px;
    }
    .list .list-item {
        text-align: center;
        font-size: 1.5rem;
        padding: 1rem;
        border-bottom: 1px solid #09f;
    }
    .zhuan {
        width: 24px;
        height: 24px;
        margin: 0 auto;
        padding: 12px 0;
        line-height: .4;
        animation: zhuan 1.5s infinite ease-out;
    }
    @keyframes zhuan {
        from { transform: rotate(0deg); }
        to   { transform: rotate(360deg); }
    }
</style>