<template>
    <div id="scroll" class="main">
        <div class="left-wrp">
            <div class="left-scroll">
                <div class="item" v-for="i in 15">{{ i }}</div>
            </div>
        </div>
        <div class="right-wrp">
            <div class="right">
                <div class="item" v-for="i in 15">
                    <div class="item0" v-for="j in 3">{{ getString() }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'scroll',
    data() {
        return {
            getString() {
                return Math.random().toString(36).substring(2)
            }
        }
    },
    methods: {
        
    }
}

</script>

<style scoped>
    .main {
        position: relative;
        height: 100%;
        width: 100%;
        /*display: flex;*/
    }
    .left-wrp {
        width: 80px;
        height: 100%;

        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        z-index: 1001;
        overflow: hidden;
    }
    .left-scroll {
        overflow: scroll;
        height: 100%;
        overflow-x: hidden;
    }
    .left-scroll .item {
        width: 80px;
        height: 80px;
        background-color: #09f;
        border: 1px solid #ccc;
        color: #fff;
        font-size: 2rem;
        text-align: center;
        line-height: 80px;
    }


    .right-wrp {
        min-height: 100%;
        margin-left: 80px;
        position: relative;
    }
    .right {
        height: 100%;
    }
    .right .item {
        background-color: #aaf;
        width: 100%;
        height: 100px;
        border: 1px solid #ccc;

        display: flex;
        align-items: center;
        justify-content: center;
    }
    .right .item .item0 {
        height: 100px;
        line-height: 100px;
        flex: 1;
        text-align: center;
        border-right: 1px solid #ccc;
    }
</style>
