<template>
    <div class="index">
        <div class="index-hd">
            <div class="index-desc">目录</div>
        </div>
        <div class="index-bd">
            <div class="kind">
                <router-link class="kind-item" :to="item.path" v-for="(item,i) in list" :key="i">{{ item.name }}</router-link>
                <!-- <div class="kind-item" v-for="(item,i) in list" :key="i">{{ item.name }}</div> -->
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'home',
    data () {
        return {
            list: []
        }
    },
    methods: {
        
    },
    created() {
        console.log(this.$router.options.routes)
        this.$router.options.routes.forEach((item, i) => {
            console.log(item)
            if(item.name!='home') {
                this.list.push({
                    name: item.name,
                    path: item.path
                })
            }
        })
    }
}
</script>

<style scoped lang="scss">
    .index {
        height: 100vh;
        background-color: #fff;
    }
    .index-hd {
        padding: 1rem 40px;
        text-align: center;
    }
    .index-desc {
        color: #888888;
        font-size: 1.6rem;
    }
    .index-bd {
        padding: 0 1rem 1.5rem;
    }

    .kind-item {
        display: block;
        margin: .5rem 0;
        padding: .5rem;
        background-color: #B0C4DE;
        border-radius: 5px;
        overflow: hidden;
        text-align: center;
        &:active {
            background-color: rgba(176,196,222, .8);
        }
    }
    .kind-item:first-child {
        margin-top: 0;
    }
</style>