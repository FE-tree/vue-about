<template>
    <div id="tinymce">
        {{ msg }}
        <tinymce-editor ref="editor"
                        v-model="msg"
                        :disabled="disabled"
                        @onClick="onClick">
        </tinymce-editor>
        <button @click="clear">清空内容</button>
        <button @click="disabled = true">禁用</button>
    </div>
</template>

<script>
    import TinymceEditor from '@/components/Tinymce'
    export default {
        name: "tinymce",
        components: {
            TinymceEditor
        },
        data () {
            return {
                msg: 'Welcome to Use Tinymce Editor',
                disabled: false
            }
        },
        methods: {
            // 鼠标单击的事件
            onClick (e, editor) {
                console.log('Element clicked')
                console.log(e)
                console.log(editor)
            },
            // 清空内容
            clear () {
                this.$refs.editor.clear()
            }
        }
    }
</script>

<style scoped>
    #tinymce {
        padding: 20px;
    }
</style>
