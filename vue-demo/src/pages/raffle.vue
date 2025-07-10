<template>
    <div id="list-complete-demo" class="demo">
        <button v-on:click="start">start</button>
        <button v-on:click="end">end</button>
        <div class="draw-list">
            <span v-for="item in target">{{item}}</span>
        </div>
        <transition-group name="list-complete" tag="p">
            <span v-for="item in arrList" v-bind:key="item" class="list-complete-item" :class="{'draw-bg': item == value}">
                {{ item }}
            </span>
        </transition-group>
    </div>
</template>
<script>
let _ = require('lodash')
export default {
    name: '',
    data() {
        return {
            arrList: [
                "张三",
                "李四",
                "王五",
                "赵六",
                "陈七",
                "张八",
                "周九",
                "吴十",
                "郑十一",
                "冯十二",
                "卫十三",
                "蒋十四",
                "沈十五",
                "韩十六",
                "杨十七",
                "朱十八",
                "秦十九",
                "许二十",
                "何二十一",
                "吕二十二",
                "施二十三",
                "孔二十四",
                "曹二十五",
                "严二十六",
                "华二十七",
            ],
            target: [], //中奖名单
            index: -1, //当前随机索引
            timer: null, //定义一个定时器
            value: '', //当前人员名
            status: true //当前抽奖状态
        }
    },
    mounted() {
        if (!localStorage.getItem('initData')) {
            console.log(localStorage.getItem('initData'))
            localStorage.setItem('initData', JSON.stringify(this.arrList))
        } else {
            this.arrList = JSON.parse(localStorage.getItem('initData'))
        }
        if (localStorage.getItem('drawList')) {
            this.target = JSON.parse(localStorage.getItem('drawList'))
        }
    },
    methods: {
        start() {
            if (this.status) {
                if (this.index != -1) {
                    this.arrList.splice(this.index, 1)
                    localStorage.setItem('initData', JSON.stringify(this.arrList))
                }
                this.shuffle()
                setTimeout(() => {
                    this.recursive()
                }, 800)
                this.status = !this.status
            }
        },
        randomIndex: function() {
            this.index = Math.floor(Math.random() * this.arrList.length)
            return this.index
        },
        remove: function() {
            this.arrList.splice(this.randomIndex(), 1)
        },
        shuffle: function() {
            this.arrList = _.shuffle(this.arrList)
        },
        recursive() {
            clearTimeout(this.timer)
            this.timer = setTimeout(() => {
                this.value = this.arrList[this.randomIndex()]
                this.recursive()
            }, 200)
        },
        end() {
            if (this.status) {
                return
            }
            clearTimeout(this.timer)
            this.index = this.randomIndex()
            this.value = this.arrList[this.index]
            this.target.push(this.value)
            localStorage.setItem('drawList', JSON.stringify(this.target))
            this.status = !this.status
        }
    }
}

</script>
<style scoped>
.demo {}
.demo .draw-list {
    margin: 20px 0;
    padding-bottom: 10px;
}
.demo .draw-list span {
    padding: 5px 10px;
    background-color: #09f;
    margin-right: 5px;
}
.demo .list-complete-item {
    border: 1px solid #ccc;
    padding: 8px 10px;
    display: inline-block;
    margin: 8px 5px;
}
.demo .draw-bg {
    border: 1px solid #09f;
    background-color: #09f;
}
</style>
