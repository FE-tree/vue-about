<template>
    <div :style="{height:height+'px',zIndex:zIndex}" class="simplemde-container">
        <mark-down :id="id" :initialValue="value" theme="Dark" :toolbars="toolbar" />
    </div>
</template>

<script>
    import MarkDown from 'vue-meditor'
    import toolbar from './toolbar'
    export default {
        name: "VueMeditor",
        props: {
            value: {
                type: String,
                default: ''
            },
            id: {
                type: String,
                required: false,
                default: 'markdown-editor-' + +new Date()
            },
            theme: {
                type: String,
                required: false,
                default: 'OneDark'
            },
            /*autofocus: {
                type: Boolean,
                default: false
            },
            placeholder: {
                type: String,
                default: ''
            },*/
            height: {
                type: Number,
                default: 500
            },
            zIndex: {
                type: Number,
                default: 10
            }
        },
        components:{
            MarkDown
        },
        computed: {
            toolbar() {
                return toolbar
             }
        },
        data() {
            return {

            }
        }
    }
</script>

<style scoped>

</style>
