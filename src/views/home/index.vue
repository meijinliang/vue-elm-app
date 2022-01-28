<template>
  <div>
    <header class="header">
      <div class="header-left">
        <svg-icon icon-class="position" />
        <span class="header-left-loaction">{{ loaction }}</span>
      </div>
      <div class="header-right">
        <svg-icon icon-class="shop-cart" />
        <svg-icon icon-class="message" />
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: '',
  props: {

  },
  data() {
    return {
      loaction: '定位中...'
    }
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
      margin-left: 10px;
    }
  }
  &-right {
    .svg-icon {
      font-size: 24px;
      margin-right: 10px;
    }
  }
}
</style>
