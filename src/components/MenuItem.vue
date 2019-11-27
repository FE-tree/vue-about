<template>
    <li class="item">
        <slot />
    </li>
</template>

<script>
    export default {
        name: "menu-item"
    }
</script>

<style scoped>
    .item {
        margin: 10px 0;
        padding: 5px 10px;
        border-radius: 4px;
        background: skyblue;
        color: #fff;
        list-style-type: circle;
    }
</style>
