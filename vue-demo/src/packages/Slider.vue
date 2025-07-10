<template>
    <div id="slider">
        <div class="slider-input">
            <span>百分比:</span>
            <input type="range" name="range_bar" :style="{backgroundSize: val + '% 100%'}" v-model="val" @input="changeSlider" />
            <span>{{ val }}</span>%
        </div>
        <div class="map" :style="{opacity: val/100}"></div>
        <div class="slider-wrp" ref="slideWrp" @touchmove="move">
            <div class="slider-color" :style="{width: num*w/100 + 'px'}"></div>
            <div class="slider" ref="slide" id="slider" :style="{left: num*w/100 + 'px'}" @touchstart="down" @touchend="up"></div>
            <div class="number">{{ num }}%</div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            val: 30,
            drag: 0,
            w: 0,
            num: 0,
            disL: 0
        };
    },
    methods: {
        changeSlider(e) {
            console.log(e.target.value)
        },
        down(e) {
            console.log(e.touches[0])
            this.drag = 1
            this.disL = e.touches[0].clientX - this.$refs.slide.offsetLeft
        },
        up(e) {
            this.drag = 0
        },
        move(e) {
            if(this.drag) {
              console.log(e.touches[0].clientX, this.disL)
              var n = e.touches[0].clientX - this.disL
              console.log(n)
              if(n<=0) {
                this.num = 0
              } else if(n>=490) {
                this.num = 100
              } else {
                this.num = (n / 490 * 100).toFixed(0)
              }
              
            }
        }
    },
    mounted() {
        this.w = this.$refs.slideWrp.clientWidth - this.$refs.slide.offsetWidth
    }
}
</script>

<style type="text/css" scoped>
    input[type=range] {
        margin-top: 8px;
        outline: none; 
        -webkit-appearance: none;/*清除系统默认样式*/  
        width: 56% !important;  
        background: -webkit-linear-gradient(#61bd12, #61bd12) no-repeat, #ddd;  
        background-size: 30% 100%;/*设置左右宽度比例*/  
        height: 3px;/*横条的高度*/  
    } 
     /*拖动块的样式*/  
    input[type=range]::-webkit-slider-thumb {  
        -webkit-appearance: none;/*清除系统默认样式*/  
        height: 16px;/*拖动块高度*/  
        width: 16px;/*拖动块宽度*/  
        background: #fff;/*拖动块背景*/  
        border-radius: 50%; /*外观设置为圆形*/  
        border: solid 1px #ddd; /*设置边框*/  
    }

    .slider-wrp {
        width: 500px;
        height: 10px;
        border: 1px solid #ccc;
        position: relative;
        top: 100px;
        left: 10px;
    }
    .slider {
        width: 10px;
        height: 10px;
        background: rgba(0, 0, 0, .5);
        position: relative;
        left: -5px;
        top: 0px;
    }
    .number {
       
    }
    .slider-color {
        /*width: 100%;*/
        height: 10px;
        position: absolute;
        top: 0;
        left: 0;
        background: #09f;
    }
    .map {
        width: 100px;
        height: 100px;
        background-color: #000;
    }
</style>