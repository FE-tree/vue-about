<template>
    <div id="tabbar">
        <div class="tabbar">
            <div v-for="(item, index) in tabbar" class="tab" :style="active==index ? { color: color } : { color:'#000'}" @click="tabClick(index)">{{ item }}</div>
            <div class="line" :style="move"></div>
        </div>

        <div class="tabbar tabbar-fixed">
            <div v-for="(item, index) in tabbar" :class="active2==index ? 'tab active' : 'tab'" @click="tabClick2(index)">{{ item }}</div>
            <div class="line" :style="{ transform: move2}"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Tabbar',
    data () {
        return {
            tabbar: ['华语', '欧美', '韩国', '日本'],
            active: 1,
            color: '#f9f',
            move: {},
            active2: 0,
            move2: 'translateX(0%)',
        }
    },
    watch: {

    },
    methods: {
        tabClick(i) {
            this.color = this.randomColor();
            this.active = i;
            this.move = {
                transform: 'translateX(' + 100 * i +'%)',
                borderBottom: '2px solid ' + this.color
            }
        },
        randomColor() {
             return '#'+Math.floor(Math.random()*0xffffff).toString(16);
        },
        tabClick2(i) {
            this.active2 = i
            this.move2 = 'translateX(' + 100 * i +'%)'
        }
    }
}
</script>

<style scoped>
    .tabbar {
        width: 100%;
        background-color: #fff;
        display: flex;
        position: relative;
    }
    .tabbar-fixed {
        position: fixed;
        bottom: 0;
    }
    .tabbar .tab {
        text-align: center;
        padding: 1rem 0;
        flex: 1;
    }
    .tabbar .active {
        color: #f9f;
    }
    .tabbar .line {
        width: 25%;
        border-bottom: 2px solid #f9f;
        position: absolute;
        bottom: 0;
        left: 0;
        transition: all .3s ease;
        transform: translateX(100%);
    }
</style>