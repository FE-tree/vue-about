<template>
    <div id="app">
        <v-header key="header" v-if="$route.path!='/'" :title="$route.name"></v-header>
        <router-view key="views" />
    </div>
</template>
<script>
    import vHeader from './components/vue-header'
    export default {
        name: "home",
        components:{
            vHeader
        },
        data() {
            return {

            };
        },
        created() {
            // console.log(this)
        }
    }
</script>
<style lang="scss">
    @import './assets/css/reset.css';
    @import './assets/css/font/iconfont.css';
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        width: 100%;
        height: calc(100% - 2rem);
        margin-top: 2rem;
    }
</style>