<template>
    <div class="index">
        <h1 class="top">{{ text }}</h1>

        <div class="index-hd">
            <div class="index-desc">目录</div>
        </div>
        <div class="index-bd">
            <div class="kind" v-for="(list, i) in menu" :key="i">
                <p>{{ list.name }}</p>
                <router-link class="kind-item" v-for="(item, j) in list.children" :key="j" :to="list.path + '/' + item.path">
                    {{ item.name }}
                </router-link>
            </div>
        </div>

        <div class="time" v-datefomat="time"></div>

        <div class='solar-syst'>
            <div class='sun'></div>
            <div class='mercury'></div>
            <div class='venus'></div>
            <div class='earth'></div>
            <div class='mars'></div>
            <div class='jupiter'></div>
            <div class='saturn'></div>
            <div class='uranus'></div>
            <div class='neptune'></div>
            <div class='pluto'></div>
            <div class='asteroids-belt'></div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'home',
    data () {
        return {
            menu: [],
            text: 'vue demo',
            nowIndex: 0,
            time: new Date()
        }
    },
    methods: {
        
    },
    created() {
        console.log(this.$router.options.routes)
        this.$router.options.routes.forEach((item, i) => {
            // console.log(item)
            if(item.name!='home') {
                this.menu.push(item)
            }
        })
    }
}
</script>

<style scoped lang="scss">
    .index {
        width: 100vw;
        height: 100vh;
        background-color: rgba(0,0,0,.8);
        overflow-x: hidden;
        overflow-y: scroll;
        transform: translateY(-2rem);

        background: linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB);
        background-size: 400% 400%;
        -webkit-animation: Gradient 15s ease infinite;
        -moz-animation: Gradient 15s ease infinite;
        animation: Gradient 15s ease infinite;
        &-hd {
            padding: 1rem 40px;
            text-align: center;
            position: relative;
            z-index: 1000;
        }
        &-desc {
            color: #fff;
            font-size: 1.6rem;
        }
        &-bd {
            padding: 0 1rem;
        }
    }
    .kind {
        position: relative;
        z-index: 1000;
        &-item {
            display: block;
            font-size: 1rem;
            margin: .5rem 0;
            padding: .5rem;
            /*background-color: #B0C4DE;*/
            background-color: rgba(255,255,255,.3);
            border-radius: 5px;
            overflow: hidden;
            text-align: center;
            &:active {
                background-color: rgba(176,196,222, .8);
            }
            &:first-child {
                margin-top: 0;
            }
        }
    }

    .time {
        color: #fff;
        text-align: right;
        padding: 1rem;
    }

    .top {
        color: #fff;
        padding-top: 1rem;
        text-transform: uppercase;
        text-align: center;
        font-size: 1rem;
        line-height: 1;
        animation: letterspacing 1s infinite alternate ease-in-out;
        display: block;
        letter-spacing: .3rem;
    }

    @keyframes letterspacing {
        0% {
            letter-spacing: -72px;
            filter: blur(20px);
        }

        40% {
            filter: blur(6px);
        }

        80% {
            letter-spacing: 8px;
            filter: blur(0);
        }
    }

    /*渐变背景动画*/
    @import url(https://fonts.googleapis.com/css?family=Open+Sans:300);
    @-webkit-keyframes Gradient {
        0% { background-position: 0% 50% }
        50% { background-position: 100% 50% }
        100% { background-position: 0% 50% }
    }
    @-moz-keyframes Gradient {
        0% { background-position: 0% 50% }
        50% { background-position: 100% 50% }
        100% { background-position: 0% 50% }
    }
    @keyframes Gradient {
        0% { background-position: 0% 50% }
        50% { background-position: 100% 50% }
        100% { background-position: 0% 50% }
    }


    $year-in-second : 30; // 1 Earth year = 30 sec

    @function revolution($pl-year-in-days){
        @return $pl-year-in-days * $year-in-second / 365.2563 + s  //Earth reference
    }
    @function alphaRandom(){
        @return random(1000)*.001;
    }
    @function stars($s, $max-area, $min-area : 0, $star-size : 0){
        $stars : #{$min-area + random($max-area)}px #{$min-area + random($max-area)}px 0 #{$star-size}px rgba(255,255,255, alphaRandom());
        @for $i from 1 to $s{
            $stars: '#{$stars} , #{$min-area + random($max-area)}px #{$min-area + random($max-area)}px 0 #{$star-size}px rgba(255,255,255, #{alphaRandom()})'
        }
        @return unquote($stars);
    }

    /*太阳系*/
    $sun: 40px;
    $mercury-orb : 70px; $mercury-pl: 4px;
    $venus-orb : 100px; $venus-pl: 8px;
    $earth-orb : 145px; $earth-pl: 6px;
    $mars-orb : 190px; $mars-pl: 6px;
    $jupiter-orb : 340px; $jupiter-pl: 18px;
    $saturn-orb : 440px; $saturn-pl: 12px;
    $uranus-orb : 520px; $uranus-pl: 10px;
    $neptune-orb : 630px; $neptune-pl: 10px;
    $pluto-orb : 780px; $pluto-pl: 3px;

    $asteroids-belt-orb : 300px; $asteroids-belt-pl: 210px;

    .solar-syst {
        &:after {
            content:"";
            position:absolute;
            height:2px;
            width:2px;
            top:-2px;
            background:white;
            box-shadow: stars(500, 1800);
            border-radius:100px;
        }
        margin:0 auto;
        width:100%;
        height:100%;
        position:absolute;
        top: 0px;
        div{
            border-radius:1000px;
            top:50%;
            left:50%;
            position:absolute;
            z-index:999;
            &:not(.sun){
                border: 1px solid rgba(102, 166, 229, 0.12);
                &:before{
                    left:50%;
                    border-radius:100px;
                    content:"";
                    position:absolute;
                }
            }
            &:not(.asteroids-belt){
                &:before{
                    box-shadow: inset 0 6px 0 -2px rgba(0, 0, 0, 0.25);
                }
            }
        }
    }

    .sun{
        background:radial-gradient(ellipse at center, #ffd000 1%,#f9b700 39%,#f9b700 39%,#e06317 100%);
        height:$sun;
        width:$sun;
        margin-top: -$sun / 2;
        margin-left: -$sun / 2;
        background-clip: padding-box;
        border:0 !important;
        background-position: -28px -103px;
        background-size: 175%;
        box-shadow: 0 0 10px 2px rgba(255, 107, 0, 0.4), 0 0 22px 11px rgba(255, 203, 0, 0.13);
    }

    .mercury{
        height: $mercury-orb;
        width: $mercury-orb;
        margin-top: -$mercury-orb / 2;
        margin-left: -$mercury-orb / 2;
        animation: orb revolution(87.5) linear infinite;
        &:before{
            height:$mercury-pl;
            width:$mercury-pl;
            background: #9f5e26;
            margin-top: -$mercury-pl / 2;
            margin-left: -$mercury-pl / 2;
        }
    }

    .venus{
        height: $venus-orb;
        width: $venus-orb;
        margin-top: -$venus-orb / 2;
        margin-left: -$venus-orb / 2;
        animation: orb revolution(224.7) linear infinite;
        &:before{
            height:$venus-pl;
            width:$venus-pl;
            background:#BEB768;
            margin-top: -$venus-pl / 2;
            margin-left: -$venus-pl / 2;
        }
    }

    .earth{
        height: $earth-orb;
        width: $earth-orb;
        margin-top: -$earth-orb / 2;
        margin-left: -$earth-orb / 2;
        animation: orb revolution(365.2563) linear infinite;
        &:before{
            height:$earth-pl;
            width:$earth-pl;
            background:#11abe9;
            margin-top: -$earth-pl / 2;
            margin-left: -$earth-pl / 2;
        }
        &:after{
            position: absolute;
            content: "";
            height: 18px;
            width: 18px;
            left: 50%;
            top: 0px;
            margin-left: -9px;
            margin-top: -9px;
            border-radius: 100px;
            box-shadow: 0 -10px 0 -8px grey;
            animation: orb revolution(27.3216) linear infinite;
        }
    }
    .mars{
        height: $mars-orb;
        width: $mars-orb;
        margin-top: -$mars-orb / 2;
        margin-left: -$mars-orb / 2;
        animation: orb revolution(687) linear infinite;
        &:before{
            height:$mars-pl;
            width:$mars-pl;
            background:#cf3921;
            margin-top: -$mars-pl / 2;
            margin-left: -$mars-pl / 2;
        }
    }

    .jupiter{
        height: $jupiter-orb;
        width: $jupiter-orb;
        margin-top: -$jupiter-orb / 2;
        margin-left: -$jupiter-orb / 2;
        animation: orb revolution(4331) linear infinite;
        &:before{
            height:$jupiter-pl;
            width:$jupiter-pl;
            background:#c76e2a;
            margin-top: -$jupiter-pl / 2;
            margin-left: -$jupiter-pl / 2;
        }
    }
    .saturn{
        height: $saturn-orb;
        width: $saturn-orb;
        margin-top: -$saturn-orb / 2;
        margin-left: -$saturn-orb / 2;
        animation: orb revolution(10747) linear infinite;
        &:before{
            height:$saturn-pl;
            width:$saturn-pl;
            background:#e7c194;
            margin-top: -$saturn-pl / 2;
            margin-left: -$saturn-pl / 2;
        }
        &:after{
            position: absolute;
            content: "";
            height: 2.34%;
            width: 4.676%;
            left: 50%;
            top: 0px;
            transform: rotateZ(-52deg);
            margin-left: -2.3%;
            margin-top: -1.2%;
            border-radius: 50% 50% 50% 50%;
            box-shadow: 0 1px 0 1px #987641, 3px 1px 0 #987641, -3px 1px 0 #987641;
            animation: orb revolution(10747) linear infinite;
            animation-direction: reverse; // compensate to reverse main orbit animation
            transform-origin: 52% 60%;
        }
    }

    .uranus{
        height: $uranus-orb;
        width: $uranus-orb;
        margin-top: -$uranus-orb / 2;
        margin-left: -$uranus-orb / 2;
        animation: orb revolution(30589) linear infinite;
        &:before{
            height:$uranus-pl;
            width:$uranus-pl;
            background:#b5e3e3;
            margin-top: -$uranus-pl / 2;
            margin-left: -$uranus-pl / 2;
        }
    }

    .neptune{
        height: $neptune-orb;
        width: $neptune-orb;
        margin-top: -$neptune-orb / 2;
        margin-left: -$neptune-orb / 2;
        animation: orb revolution(59802) linear infinite;
        &:before{
            height:$neptune-pl;
            width:$neptune-pl;
            background:#175e9e;
            margin-top: -$neptune-pl / 2;
            margin-left: -$neptune-pl / 2;
        }
    }

    .asteroids-belt{
        opacity:.7;
        border-color: transparent !important;
        height: $asteroids-belt-orb;
        width: $asteroids-belt-orb;
        margin-top: -$asteroids-belt-orb / 2;
        margin-left: -$asteroids-belt-orb / 2;
        animation: orb revolution(2191) linear infinite;
        overflow:hidden;
        &:before{
            top:50%;
            height:$asteroids-belt-pl;
            width:$asteroids-belt-pl;
            margin-left: -$asteroids-belt-pl / 2;
            margin-top: -$asteroids-belt-pl / 2;
            background: transparent;
            border-radius:140px !important;
            box-shadow: stars(390, 290, -290/2, -104);
        }
    }

    .pluto{
        height: $pluto-orb;
        width: $pluto-orb;
        margin-top: -$pluto-orb / 2 + -60;
        margin-left: -$pluto-orb / 2 + 70;
        animation: orb revolution(90580) linear infinite;
        &:before{
            height:$pluto-pl;
            width:$pluto-pl;
            background:#fff;
            margin-top: -$pluto-pl / 2;
            margin-left: -$pluto-pl / 2;
        }
    }

    @keyframes orb{
        from {
            transform:rotate(0deg)
        }
        to{
            transform:rotate(-360deg)
        }
    }
</style>