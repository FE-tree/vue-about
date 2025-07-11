<template>
  <div class="wrapper">
    <div class="container">
      <div ref="box" class="box">
        <img style="width:100%" :src="image" alt="记仇">
        <div contenteditable="true" class="write">
          <span id="date">2018年5月18日</span> 没人给我点赞，这个仇我先记下来了
        </div>
      </div>
      <div class="row">
        <a class="generate" @click="generate">生成</a>
        <a class="upload">上传</a>
        <input ref="file" class="input" type="file" @change="imageChange">
      </div>
      <div ref="screen" class="screen" />
    </div>
  </div>
</template>

<script>
import html2canvas from './html2canvas'
export default {
  components: {},
  props: {},
  data() {
    return {
      image: require('./jichou.png')
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    generate(e) {
      const box = this.$refs['box']
      const screen = this.$refs['screen']
      html2canvas(box, {
        allowTain: true,
        taintTest: true,
        onrendered(canvas) {
          const newImg = document.createElement('img')
          newImg.src = canvas.toDataURL('image/jpeg')
          // 先清空子元素
          screen.innerHTML = ''
          screen.appendChild(newImg)
        }
      })
    },
    imageChange(e) {
      const files = this.$refs['file'].files
      if (files && files[0]) {
        var reader = new FileReader()
        reader.onload = (e) => {
          this.image = e.target.result
        }
        reader.readAsDataURL(files[0])
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.wrapper {
  width: 100%;
  .container {
    margin: 0 auto;
    width: 250px;
  }
  .box {
    margin: 50px auto 20px auto;
    width: 250px;
    background-color: #fff;
    border: 1px solid #fff;
  }
  .row {
    position: relative;
  }
  .generate {
    border: 0;
    width: 100px;
    border-radius: 5px;
    color: #fff;
    background-color: #000;
    cursor: pointer;
    padding: 10px 30px;
    text-align: center;
    box-sizing: border-box;
    float: left;
  }
  .upload {
    border: 0;
    width: 100px;
    border-radius: 5px;
    color: #fff;
    background-color: #000;
    cursor: pointer;
    padding: 10px 30px;
    text-align: center;
    box-sizing: border-box;
    float: right;
    cursor: pointer;
  }
  .input {
    position: absolute;
    right: 0;
    top: 0;
    width: 100px;
    height: 42px;
    opacity: 0;
    z-index: 233;
    cursor: pointer;
  }
}
</style>
