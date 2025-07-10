<template>
    <ul>
        <li v-for="item in propTreeData" :key="item.menuCode">
            {{item.menuName}}
            <!--要有一个结束条件-->
            <recursion-item v-if="item.children && item.children.length" :propTreeData="item.children"></recursion-item>
        </li>
    </ul>
</template>

<script>
    export default {
        name: "recursion-item",
        props: {
            propTreeData:Array,
            default:() => ([])
        },
        data() {
            return {}
        },
    }
</script>

<style scoped>

</style>
