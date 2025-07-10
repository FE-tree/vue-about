<template>
    <ul class="wrapper">
        <!-- 遍历 菜单数据 -->
        <menu-item :key="index" v-for="(item, index) in router">
            <!-- 对于没有 children 子菜单的 item -->
            <span class="item-title" v-if="!item.children">{{item.name}}</span>

            <!-- 对于有 children 子菜单的 item -->
            <template v-else>
                <span @click="handleToggleShow">{{item.name}}</span>
                <!-- 递归操作 -->
                <!-- item.children变成了字符串 -->
                <menu-path :router="item.children" v-show="toggleShow"></menu-path>
            </template>
        </menu-item>
    </ul>
</template>

<script>
    import MenuItem from "./MenuItem"
    export default {
        name: "menu-path",
        props: {
            router: { // Menu 组件接受一个 paths 作为菜单数据
                type: Array,
                default: () => []
            }
        },
        components: {
            MenuItem
        },
        data() {
            return {
                toggleShow: false // toggle 状态
            };
        },
        methods: {
            handleToggleShow() {
                // 处理 toggle 状态的是否展开子菜单 handler
                this.toggleShow = !this.toggleShow;
            },
            evalArray(json) {
                return (new Function("", "return" + json))()
            }
        }
    }
</script>

<style scoped>
    .wrapper {
        cursor: pointer;
        list-style-type: circle;
        margin-left: 10px;
        /*background-color: #e9e9e9;*/
    }
    .wrapper .item-title {
        font-size: 16px;
    }
</style>
