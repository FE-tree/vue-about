<!--
 * @Author: your name
 * @Date: 2019-11-27 14:08:02
 * @LastEditTime: 2021-05-11 10:25:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-demo\src\components\vue-header.vue
-->
<template>
    <div id="vheader">
        <router-link to="/" class="left">
            <i class="iconfont icon-back"></i>返回
        </router-link>
        <div class="title">{{ title }}</div>
    </div>
</template>

<script>
export default {
    name: 'vheader',
    props: {
        title: String
    },
    data () {
        return {
              
        }
    },
    methods: {
        
    }
}
</script>

<style scoped lang="scss">
    #vheader {
        width: 100%;
        height: 2.6rem;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        background-color: #09f;
        z-index: 20;
        .left {
            display: flex;
            align-items: center;
            line-height: 2.6rem;
            position: absolute;
            left: 10px;
            &:active {
                opacity: .8;
                color: #fff;
            }
        }
        .title {
            line-height: 2.6rem;
            font-size: 1.2rem;
            text-align: center;
        }
    }
</style>