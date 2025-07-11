<template>
  <div class="wrapper">
    <div class="boxWrap">
      <div class="editArea">
        <el-form ref="form" :model="form" label-width="90px">
          <el-form-item label="方向：">
            <el-radio-group v-model="form.direction" @change="directionChange">
              <el-radio label="上" name="direction" />
              <el-radio label="下" name="direction" />
              <el-radio label="左" name="direction" />
              <el-radio label="右" name="direction" />
            </el-radio-group>
          </el-form-item>
          <el-form-item label="宽度：">
            <el-slider v-model="form.width" :format-tooltip="formatLength" @change="resetChange" />
          </el-form-item>
          <el-form-item label="高度：">
            <el-slider v-model="form.height" :format-tooltip="formatLength" @change="resetChange" />
          </el-form-item>
          <el-form-item label="旋转角度：">
            <el-slider v-model="form.angle" :format-tooltip="formatAngle" @change="angleChange" />
          </el-form-item>
          <el-form-item label="背景色：">
            <el-color-picker v-model="form.color" @change="resetChange" />
          </el-form-item>
        </el-form>
      </div>
      <div class="previewBg">
        <div class="triangle" :style="triangleCss" />
      </div>
    </div>
    <div class="codeWrap">
      <div class="title">CSS 代码：</div>
      <div class="code">
        <el-input v-model="code" type="textarea" :rows="10" placeholder="请输入内容" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      form: {
        direction: '右',
        width: 30,
        height: 30,
        angle: 0,
        // color: '#409EFF'
        color: '#FFF'
      },
      triangleCss: {
        transform: 'rotate(0deg)',
        borderWidth: '30px 0px 30px 60px',
        borderColor: 'transparent transparent transparent #409EFF'
      },
      code: '{\n' +
        '\xa0\xa0display: inline-block;\n' +
        '\xa0\xa0width: 0;\n' +
        '\xa0\xa0height: 0;\n' +
        '\xa0\xa0borderStyle: solid;\n' +
        '\xa0\xa0transform: rotate(0deg);\n' +
        '\xa0\xa0borderWidth: 30px 0 30px 60px;\n' +
        '\xa0\xa0borderColor: transparent transparent transparent #409EFF;\n' +
      '}'
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    formatLength(val) {
      return val * 2
    },
    formatAngle(val) {
      return (val * 3.6).toFixed(0)
    },
    directionChange(val) {
      const w = this.form.width
      const h = this.form.height
      // console.log(w, h)
      switch (val) {
        case '上':
          this.triangleCss.borderWidth = `0 ${w}px ${h * 2}px ${w}px`
          this.triangleCss.borderColor = `transparent transparent ${this.form.color} transparent`
          break
        case '下':
          this.triangleCss.borderWidth = `${h * 2}px ${w}px 0 ${w}px`
          this.triangleCss.borderColor = `${this.form.color} transparent transparent transparent`
          break
        case '左':
          this.triangleCss.borderWidth = `${h}px ${w * 2}px ${h}px 0`
          this.triangleCss.borderColor = `transparent ${this.form.color} transparent transparent`
          break
        case '右':
          this.triangleCss.borderWidth = `${h}px 0 ${h}px ${w * 2}px`
          this.triangleCss.borderColor = `transparent transparent transparent ${this.form.color}`
          break
      }
      this.resetCode()
    },
    angleChange(val) {
      this.triangleCss.transform = `rotate(${val * 3.6}deg)`
      this.resetCode()
    },
    resetChange(val) {
      console.log(val)
      this.directionChange(this.form.direction)
      this.resetCode()
    },
    resetCode() {
      this.code = '{\n' +
        '\xa0\xa0display: inline-block;\n' +
        '\xa0\xa0width: 0;\n' +
        '\xa0\xa0height: 0;\n' +
        '\xa0\xa0borderStyle: solid;\n' +
        '\xa0\xa0transform: rotate(' + this.form.angle + 'deg);\n' +
        '\xa0\xa0borderWidth: ' + this.triangleCss.borderWidth + ';\n' +
        '\xa0\xa0borderColor: ' + this.triangleCss.borderColor + ';\n' +
      '}'
    }
  }
}
</script>
<style lang="scss" scoped>
.wrapper {
  padding: 1rem;
  background-color: #f0f0f0;
  .boxWrap {
    display: flex;
    .editArea {
      display: inline-block;
      width: 420px;
      margin-left: 20px;
      margin-right: 60px;
      padding: 20px;
      border-radius: 5px;
      background-color: #fff;
    }
    .previewBg {
      display: inline-block;
      width: 360px;
      height: 360px;
      text-align: center;
      line-height: 360px;
      background: #eee;
      background-image: linear-gradient(45deg,rgba(0,0,0,.2) 25%,transparent 0,transparent 75%,rgba(0,0,0,.2) 0),linear-gradient(45deg,rgba(0,0,0,.2) 25%,transparent 0,transparent 75%,rgba(0,0,0,.2) 0);
      background-size: 30px 30px;
      background-position: 0 0,15px 15px;
      .triangle {
        transition: all .6s;
        display: inline-block;
        width: 0px;
        height: 0px;
        border-style: solid;
        // border-width: 0 60px 60px 100px;
        // border-color: transparent transparent #409EFF transparent;
      }
    }
  }
  .codeWrap {
    margin: 20px;
    .title {
      margin-bottom: 10px;
    }
    .code {
      width: 520px;
    }
  }
}
</style>
