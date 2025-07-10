<template>
    <div id="drag">
        <h2>鼠标拖动事件，触摸事件暂时不行</h2>
        <br>
        <div class="list">
            <p class="txt" v-for="p in list" draggable="true" @dragstart="dragstart($event, 'left')" @dragend="dragend" @drop='drop' @dragover='dragover' @dragleave='dragleave'>{{ p.li }}</p>
        </div>
        <br>
        <div class="list">
            <p class="txt" v-for="p in list2" draggable="true" @dragstart="dragstart($event, 'right')" @dragend="dragend" @drop='drop' @dragover='dragover' @dragleave='dragleave'>{{ p.li }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'drag',
    data () {
        return {
            list: [
                { li: '琉璃之金' },
                { li: '朦胧之森' },
                { li: '缥缈之滔' },
                { li: '逍遥之火' },
                { li: '璀璨之沙' }
            ],
            list2: [
                { li: '蓬勃之阳' },
                { li: '沉珂之阴' }
            ],
            target: {
                txt: '',
                direction: ''
            }
        }
    },
    methods: {
        dragstart(e, dir) {
            // console.log(e.target)
            // console.log(e.currentTarget)
            e.currentTarget.style.opacity = "0.4";
            this.target.txt = e.target.innerHTML
            this.target.direction = dir
        },
        dragend(e) {
            e.target.style.opacity = "1";
        },
        dragover(e) {
            e.preventDefault()
            // console.log(e.target.parentElement)
            if(e.target.parentElement.className == 'list') {
                e.target.parentElement.style.border = '1px solid #69f'
            }
        },
        dragleave(e) {
            e.preventDefault()
            // console.log(e)
            if(e.target.parentElement.className == 'list') {
                e.target.parentElement.style.border = '1px solid #ccc'
            }
        },
        drop(e) {
            e.preventDefault()
            if(event.target.className == "txt") {
                console.log(e)
                e.target.parentElement.style.border = '1px solid #ccc'
                this.resetList(this.target.txt)
            }
        },
        resetList(txt) {
            if(this.target.direction=='left') {
                this.list = this.list.filter((item)=>{
                    return item.li != txt
                })
                this.list2.push({
                    li: txt
                })
            }
            if(this.target.direction=='right') {
                this.list2 = this.list2.filter((item)=>{
                    return item.li != txt
                })
                this.list.push({
                    li: txt
                })
            }
        }
    },
    computed: {
        
    },
    created() {
        
    },
    mounted() {
        
    }
}
</script>

<style scoped>
    #drag {
        padding: 1rem;
    }
    .list {
        background: #eee;
        padding: .1rem 0;
        border: 1px solid #ccc;
    }
    .list .txt {
        height: 2rem;
        line-height: 2rem;
        padding-left: 1rem;
    }
    .list2 {}
</style>
