<template>
    <div id="ScrollBottom">
        <div class="listBoxCon" @scroll.native="listScroll">
            <div class="list-item" v-for="(item, i) in 20" v-text="item" :key="i"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ScrollBottom',
    data() {
        return {
            list: []
        }
    },
    methods: {
        listScroll(ev) {
            console.log(ev)
            if (ev.srcElement.scrollHeight - (ev.srcElement.scrollTop + ev.srcElement.clientHeight) == 0) {
             　　console.log('bottom')
            }
        }
    }
}

</script>

<style>
    #ScrollBottom {
        position: fixed;
        top: 0;
        left: 0;
        right:0;
        bottom: 0;
        overflow: auto;
    }
    .listBoxCon {
        overflow-x: hidden;
        overflow-y: scroll;
    }
    .list-item {
        text-align: center;
        font-size: 1.5rem;
        padding: 1rem;
        border-bottom: 1px solid #09f;
    }
</style>
