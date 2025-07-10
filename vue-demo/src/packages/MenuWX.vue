<template>
    <div class="index">
        <div class="index-hd">
            <div class="index-desc">菜单列表</div>
        </div>
        <div class="index-bd">
            <div class="kind">
                <div v-for="item in list">
                    <div class="kind-item">
                        <div :id="item.id" :class="item.open ? 'kind-hd kind-hd-show' : 'kind-hd'" @click="kindToggle">
                            <div class="kind-text">{{ item.name }}</div>
                            <img class="kind-img" :src="`../static/kind/${item.id}.png`">
                        </div>
                        <div :class="item.open ? 'kind-bd kind-bd-show' : 'kind-bd'">
                            <div :class="item.open ? 'nav-box nav-box-show' : 'nav-box'">
                                <!-- <div v-for="page in item.pages">
                                    <router-link :to="`pages/${page}/${page}`" class="nav">
                                        <div class="nav-text">{{page}}</div>
                                        <div class="nav-arrow"></div>
                                    </router-link>
                                </div> -->
                                <div v-for="page in item.pages">
                                    <div class="nav">
                                        <div class="nav-text">{{page}}</div>
                                        <div class="nav-arrow"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Login',
    data () {
        return {
            list: [{
                id: 'view',
                name: '视图容器',
                open: false,
                pages: ['test', 'view', 'scroll-view', 'movable-view', 'cover-view', 'swiper', 'tabbar']
            }, {
                id: 'content',
                name: '基础内容',
                open: false,
                pages: ['text', 'icon', 'progress']
            }, {
                id: 'form',
                name: '表单组件',
                open: false,
                pages: ['button', 'checkbox', 'form', 'input', 'label', 'picker', 'radio', 'slider', 'switch', 'textarea']
            }, {
                id: 'nav',
                name: '导航',
                open: false,
                pages: ['nav']
            }, {
                id: 'media',
                name: '媒体组件',
                open: false,
                pages: ['image', 'audio', 'video', 'danmu', 'camera', 'live-player']
            }, {
                id: 'map',
                name: '地图',
                open: false,
                pages: ['map', 'weather']
            }, {
                id: 'canvas',
                name: '画布',
                open: false,
                pages: ['canvas']
            }]
        }
    },
    methods: {
        kindToggle: function(e) {
            e.preventDefault()
            var id = e.currentTarget.id,
                list = this.list
            // console.log(e.currentTarget.id)
            for (var i = 0, len = list.length; i < len; ++i) {
                if (list[i].id == id) {
                    list[i].open = !list[i].open
                } else {
                    list[i].open = false
                }
            }
            this.list = list
        }
    }
}
</script>

<style scoped>
    /*@import '../assets/css/loginregister.css';*/
    .index {
        background-color: #efefef;
    }
    .index-hd {
        padding: 3rem 40px;
        text-align: center;
    }
    .index-desc {
        color: #888888;
        font-size: 1.6rem;
    }
    .index-bd {
        padding: 0 1rem 1.5rem;
    }

    .nav-box {
        opacity: 0;
        position: relative;
        background-color: #FFFFFF;
        line-height: 1.41176471;
        font-size: 1rem;

        transform: translateY(-50%);
        transition: .3s;
    }
    .nav-box-show {
        opacity: 1;
        transform: translateY(0);
    }
    .nav {
        padding: .8rem 1rem;
        position: relative;
        display: flex;
        align-items: center;
    }
    .nav:before {
        content: " ";
        position: absolute;
        left: 30px;
        top: 0;
        right: 30px;
        height: 1px;
        border-top: 1px solid #D8D8D8;
        color: #D8D8D8;
    }
    .nav:first-child:before {
        display: none;
    }
    .nav-text {
        flex: 1;
    }
    .nav-arrow {
        padding-right: 26px;
        position: relative;
    }
    .nav-arrow:after {
        content: " ";
        display: inline-block;
        height: .66rem;
        width: .66rem;
        border-width: 2px 2px 0 0;
        border-color: #888888;
        border-style: solid;
        transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
        position: absolute;
        top: 50%;
        margin-top: -.4rem;
        right: 1rem;
    }

    .kind-item {
        margin: 20px 0;
        background-color: #FFFFFF;
        border-radius: 4px;
        overflow: hidden;
    }
    .kind-item:first-child {
        margin-top: 0;
    }
    .kind-text {
        flex: 1;
    }
    .kind-img {
        width: 1.5rem;
        height: 1.5rem;
    }
    .kind-hd {
        padding: 1rem;
        display: flex;
        align-items: center;

        transition: opacity .3s;
    }
    .kind-hd-show {
        opacity: .2;
    }
    .kind-bd {
        height: 0;
        overflow: hidden;
    }
    .kind-bd-show {
        height: auto;
    }
</style>