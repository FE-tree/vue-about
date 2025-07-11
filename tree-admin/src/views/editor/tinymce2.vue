<template>
    <div class="app-container">
        <code>
            创建和编辑页面是不能被 keep-alive 缓存的，因为keep-alive 的 include 目前不支持根据路由来缓存，所以目前都是基于 component name 来进行缓存的。如果你想类似的实现缓存效果，可以使用 localStorage 等浏览器缓存方案。或者不要使用 keep-alive 的 include，直接缓存所有页面。详情见
            <a target="_blank" class="link-type" href="https://panjiachen.github.io/vue-element-admin-site/component/rich-editor.html">Document</a>
        </code>
        <el-form-item prop="content" style="margin-bottom: 30px;">
            <Tinymce ref="editor" v-model="content" :height="400" />
        </el-form-item>
        <div class="editor-content" v-html="content"/>
    </div>
</template>

<script>
    import Tinymce from '@/components/Tinymce'

    export default {
        name: 'Tinymce',
        components: { Tinymce },
        data() {
            return {
                content:
                    `<h1 style="text-align: center;">Welcome to the TinyMCE demo!</h1><p style="text-align: center; font-size: 15px;"><img title="TinyMCE Logo" src="//www.tinymce.com/images/glyph-tinymce@2x.png" alt="TinyMCE Logo" width="110" height="97" /><ul>
                        <li>Our <a href="//www.tinymce.com/docs/">documentation</a> is a great resource for learning how to configure TinyMCE.</li><li>Have a specific question? Visit the <a href="https://community.tinymce.com/forum/">Community Forum</a>.</li><li>We also offer enterprise grade support as part of <a href="https://tinymce.com/pricing">TinyMCE premium subscriptions</a>.</li>
                    </ul>`
            }
        }
    }
</script>

<style scoped>
    .editor-content{
        margin-top: 20px;
    }
</style>

