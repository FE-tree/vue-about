<template>
    <div id="app">
        <transition name="slide-left">
            <router-view />
        </transition>
    </div>
</template>

<script>
    export default {
        name: "App2"
    }
</script>

<style lang="scss">
    @import './assets/css/reset.css';
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }

    .slide-fade {
        position: fixed;
        left: 0;
        right: 0;
        width: 100%;
        background-color: white;
    }

    .slide-fade-enter,
    .slide-fade-leave-to {
        left: 0;
        top: 0;
        right: 0;
        position: absolute;
        transform: translateX(-500px) translateY(-500px) rotate(-150deg) scale(0.5);
        opacity: 1;
    }

    .slide-fade-enter-active {
        background-color: white;
        transition: all 0.6s ease;
    }

    .slide-fade-leave-active {
        transition: all 0.7s ease;
        background-color: white;
        transform: translateX(500px) translateY(500px) rotate(150deg) scale(1);
        z-index: 100;
    }

    .slide-right-enter-active,
    .slide-right-leave-active,
    .slide-left-enter-active,
    .slide-left-leave-active {
        will-change: transform;
        transition: all 350ms;
        left: 0;
        right: 0;
        width: 100%;
        position: fixed;
    }

    .slide-right-enter {
        opacity: 0;
        transform: translate3d(-100%, 0, 0);
    }

    .slide-right-leave-active {
        opacity: 0;
        transform: translate3d(100%, 0, 0);
    }

    .slide-left-enter {
        opacity: 0;
        transform: translate3d(100%, 0, 0);
    }

    .slide-left-leave-active {
        opacity: 0;
        transform: translate3d(-100%, 0, 0);
    }
</style>