<template>
  <div>
    <header class="header">
      <div class="header-left" @click="visible = true">
        <svg-icon icon-class="position" />
        <span class="header-left-loaction">{{ loaction }}</span>
      </div>
      <div class="header-right">
        <svg-icon icon-class="shop-cart" />
        <svg-icon icon-class="message" />
      </div>
    </header>
    <div class="content">
      <div class="search"></div>
    </div>
    <choice-location :visible.sync="visible" />
  </div>
</template>

<script>
import ChoiceLocation from './components/ChoiceLocation'
export default {
  name: '',
  components: { ChoiceLocation },
  data() {
    return {
      loaction: '定位中...',
      visible: false
    }
  },
  created() {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  padding: 15px;
  background: #409eff;
  &-left {
    color: #fff;
    &-loaction {
      padding-left: 10px;
    }
  }
  &-right {
    .svg-icon {
      font-size: 24px;
    }
    .svg-icon:not(:last-child) {
      margin-right: 10px;
    }
  }
}
</style>
