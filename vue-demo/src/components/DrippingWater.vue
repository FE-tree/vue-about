<template>
    <div class="DrippingWater">
        <div class="drip">DrippingWater</div>
    </div>
</template>

<script>
    export default {
        name: 'dripping-water',
        data () {
            return {
                msg: 'Welcome!',
                name: ''
            }
        }
    }
</script>

<style scoped lang="scss">
    .DrippingWater {
        width: 100%;
        height: 50vh;
        padding: 25vh 0;
        background-color: #000;
    }
    .drip {
        position: relative;
        width: 300px;
        height: 50px;
        color: #fff;
        font-size: 3rem;
        text-align: center;
        margin: 100px auto;
        border-bottom: 10px solid #fff;
        transform: skewY(5deg);
        
        &::before {
            position: absolute;
            content: "";
            bottom : -20px;
            width: 10px;
            height: 20px;
            border-radius: 50%;
            background: #fff;
            transform: translate(0, 0);
            animation: move 7.5s ease-in-out infinite;
        }
        
        &::after {
            position: absolute;
            content: "";
            left: 0;
            bottom : -20px;
            width: 10px;
            height: 20px;
            border-radius: 50%;
            background: #fff;
            transform: translate(0, 0);
            animation: move 7.5s ease-in-out 1s infinite;
        }
    }

    @keyframes move {
        80% {        
            bottom : -30px;
            transform: translate(623px, 0);
        } 93% {
            transform: translate(623px, 3px);
            opacity: 1;
        }100% {
            transform: translate(623px, 150px);
            opacity: 0;
        }
    }
</style>