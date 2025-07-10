
<template>
  <div class="hand_paint" @touchmove.prevent>
    <div class="hand_content">
      <div class="sign_box" id="signBox">
        <canvas id="signCanvas"></canvas>
      </div>
 
      <div class="btn_boxs">
        <div @click="clear()">重签</div>
        <div @click="save()">确定</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Signature',
data() {
    return {
      mousePressed: false, // 是否触碰画板
      c: "",
      ctx: "",
      
      arrX: [],
      arrY: [],
      arrZ: [],
      isPaint: false, // 是否绘画
            
      type: ''
    }
},
onReady() {
    this.mousePressed = false;
    
        
    this.ctx = uni.createCanvasContext('signCanvas');
    this.ctx.lineWidth = 3; // 线宽
    this.ctx.lineCap = 'round'; // 线条端点类型
    this.ctx.lineJoin = 'round'; // 线条拐角类型
    this.ctx.globalAlpha = 1; // 透明度
    console.log('ctx',this.ctx)
},
methods: {
    handlerTouchstart(event){
        this.arrX = []
        this.arrY = []
        this.arrZ = []
        if (event.changedTouches.length == 1) {
             var touch = event.changedTouches[0];
             // console.log('touchstart',event)
             this.mousePressed = true;
            
             this.arrZ.push(0);
             this.arrX.push(Math.floor(touch.x));
             this.arrY.push(Math.floor(touch.y));
        }
    },
    handlerTouchmove(event){
        if (event.changedTouches.length == 1) {
             var touch = event.changedTouches[0];
             if (this.mousePressed) {
               this.arrZ.push(1);
               this.arrX.push(Math.floor(touch.x));
               this.arrY.push(Math.floor(touch.y));
                    
                // 绘画
                for (var i = 0; i < this.arrZ.length; i++) {
                    if (this.arrZ[i] == 0) {
                        this.ctx.moveTo(this.arrX[i], this.arrY[i])
                    } else {
                        this.ctx.lineTo(this.arrX[i], this.arrY[i])
                    };
                };
                this.ctx.stroke();
                this.ctx.draw(true);
                this.isPaint = true
             }
        }
            
            
    },
    handlerTouchend(event){
        if (event.changedTouches.length == 1) {
             this.mousePressed = false;
        }
    },
    // 清空画板
    clearArea() {
            let canvasw, canvash;
            const res = uni.getSystemInfoSync();
 
            canvasw = res.windowWidth * 1.2; //设备宽度
            canvash = res.windowHeight * 1.2; //设备高度
            console.log('canvasw',canvasw)
            console.log('canvash',canvash)
 
            this.arrX = []
            this.arrY = []
            this.arrZ = []
            this.isPaint = false
            this.ctx.clearRect(0, 0, canvasw, canvash);
            this.ctx.draw(true);
    },
    // 提交签名
    saveSign() {
            let _this = this
            if (!this.isPaint) { // 画布为空
                return false;
            };
            //生成图片
            const fileManager = wx.getFileSystemManager();
            uni.showLoading({title: '加载中', mask: true})
            uni.canvasToTempFilePath({
                x: 0,
                y: 0,
                canvasId: 'signCanvas',
                success: function (res) {
                    //将图片转换为base64 的格式
                    uni.hideLoading()
                    let base64 = 'data:image/jpg;base64,' + fileManager.readFileSync(res.tempFilePath, 'base64');
                    // console.log(base64)
                    //图片路径
                    // console.log('tempFilePath', res.tempFilePath)
                    _this.uploadImg(res.tempFilePath, base64)
                }
            })
    },
    // 上传图片文件
    uploadImg(tempFilePath, base64){
        uni.showLoading({
             title: '上传中'
        });
        let _this = this
        return new Promise((resolve, reject) => {
            uni.uploadFile({
                method: "post",
                header: {
                    "token": userinfo.token,
                    "Content-Type": "multipart/form-data"
                },
                url: '接口地址',
                filePath: tempFilePath, // 生成的文件路径
                name: 'file',
                formData: '请求参数',
                success: (res) => {
                    uni.hideLoading()
                    console.log('res', res)
                },
                fail(err) {
                    uni.hideLoading()
                    console.log('err', err)
                }
            })
        })
    },
 
},        
}
</script>

<style scoped>
    @media screen and (orientation: portrait) { // 当屏幕处于纵向时
  .hand_paint {
    position: absolute;
    width: 100vh;
    height: 100vw;
    top: 0;
    left: 100vw;
    -webkit-transform: rotate(90deg);
    -moz-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    transform: rotate(90deg);
    transform-origin: 0% 0%;
  }
}
</style>