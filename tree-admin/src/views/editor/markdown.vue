<template>
    <div class="app-container">
        <div class="setting-container">
            <span>设备类型：</span>
            <el-select v-model="theme" size="small" placeholder="请选择" class="filter-item">
                <el-option v-for="item in themeOpts" :key="item.value" :label="item.label" :value="item.value"/>
            </el-select>
        </div>
        <div class="editor-container">
            <markdown-editor id="mdEditor" ref="mdEditor" :value="content" :theme="theme" />
        </div>
    </div>
</template>

<script>
const text = `
**this is test**

* vue
* element
* webpack

## vue-meditor
`
    import MarkdownEditor from '@/components/markdown'
    export default {
        name: "markdown",
        components:{
            MarkdownEditor
        },
        data() {
            return {
                content: text,
                theme: 'Light',
                themeOpts: [
                    { label: 'Light', value: 'Light'},
                    { label: 'Dark', value: 'Dark'},
                    { label: 'OneDark', value: 'OneDark'},
                    { label: 'GitHub', value: 'GitHub'}
                ],
            }
        }
    }
</script>

<style scoped>

</style>
