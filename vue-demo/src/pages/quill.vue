<!--
 * @Author: your name
 * @Date: 2021-05-11 10:16:32
 * @LastEditTime: 2021-05-11 10:43:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-demo\src\pages\quill.vue
-->
<template>
  <div class="edit_container">
    <quill-editor 
        v-model="content" 
        ref="myQuillEditor" 
        :options="editorOption" 
        @blur="onEditorBlur($event)" @focus="onEditorFocus($event)"
        @change="onEditorChange($event)">
    </quill-editor>
    <!-- 从数据库读取展示 -->
        <div v-html="str" class="ql-editor">
            {{str}}
        </div>
  </div>
</template>

<script>
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import { quillEditor } from 'vue-quill-editor'
export default {
  components: {
    quillEditor
  },
  data() {
        return {
            content: `<p></p><p><br></p><ol><li><strong><em>Or drag/paste an image here.</em></strong></li><li><strong><em>rerew</em></strong></li><li><strong><em>rtrete</em></strong></li><li><strong><em>tytrytr</em></strong></li><li><strong><em>uytu</em></strong></li></ol>`,
            editorOption: {
              placeholder: "请在这里输入******",
              modules:{
                toolbar:[
                  ['bold', 'italic', 'underline', 'strike'],    //加粗，斜体，下划线，删除线
                  ['blockquote', 'code-block'],     //引用，代码块
                  [{ 'header': 1 }, { 'header': 2 }],        // 标题，键值对的形式；1、2表示字体大小
                  [{ 'list': 'ordered'}, { 'list': 'bullet' }],     //列表
                  [{ 'script': 'sub'}, { 'script': 'super' }],   // 上下标
                  [{ 'indent': '-1'}, { 'indent': '+1' }],     // 缩进
                  [{ 'direction': 'rtl' }],             // 文本方向
                  [{ 'size': ['small', false, 'large', 'huge'] }], // 字体大小
                  [{ 'header': [1, 2, 3, 4, 5, 6, false] }],     //几级标题
                  [{ 'color': [] }, { 'background': [] }],     // 字体颜色，字体背景颜色
                  [{ 'font': [] }],     //字体
                  [{ 'align': [] }],    //对齐方式
                  ['clean'],    //清除字体样式
                  ['image','video']    //上传图片、上传视频
                ]
              }
            }
        }
    },
    methods: {
        onEditorReady(editor) { // 准备编辑器
 
        },
        onEditorBlur(){}, // 失去焦点事件
        onEditorFocus(){}, // 获得焦点事件
        onEditorChange(){}, // 内容改变事件
        // 转码
        escapeStringHTML(str) {
            str = str.replace(/&lt;/g,'<');
            str = str.replace(/&gt;/g,'>');
            return str;
        }
    },
    computed: {
        editor() {
            return this.$refs.myQuillEditor.quill;
        },
    },
    mounted() {
        // let content = '';  // 请求后台返回的内容字符串
        // this.str = this.escapeStringHTML(content);
    }
}
</script>

<style lang="scss" scoped>
.edit_container {
  padding: 20px;
}
</style>>