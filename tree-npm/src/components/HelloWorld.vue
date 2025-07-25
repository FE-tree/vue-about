<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="btn-group">
      <color-button type="success" :disabled="false">按钮</color-button>
      <color-button :disabled="true">按钮</color-button>
      <tree-switch v-model="lightSwitch">开关:</tree-switch>
    </div>
    <toast></toast>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
      return {
        lightSwitch: false
      }
    }
}
</script>

<style scoped lang="scss">

</style>
