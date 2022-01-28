<template>
  <div class="footer">
    <a
      v-for="(item, index) in footerItem"
      :key="index"
      href="javascript:;"
      class="footer-item"
      :class="$route.path == item.route ? 'on' : ''"
      @click="handleClick(item.route)"
    >
      <span class="footer-item-icon">
        <svg-icon :icon-class="item.icon" />
      </span>
      <span class="footer-item-title">{{ item.title }}</span>
    </a>
  </div>
</template>

<script>
export default {
  name: 'FooterGuide',
  data() {
    return {
      footerItem: [
        {
          title: '首页',
          route: '/',
          icon: 'elm'
        },
        {
          title: '发现',
          route: '/search',
          icon: 'smill'
        },
        {
          title: '订单',
          route: '/order',
          icon: 'order'
        },
        {
          title: '我的',
          route: '/person',
          icon: 'user'
        }
      ]
    }
  },
  methods: {
    handleClick(route) {
      console.log(this.$route)
      this.$router.push({ path: route })
    }
  }
}
</script>

<style lang="scss" scoped>
.footer {
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  width: 100%;
  background: #fff;
  padding-top: 10px;
  // box-shadow: 0 -0.266667vw 0.533333vw rgb(0 0 0/10%);
  &-item {
    display: flex;
    flex-direction: column;
    width: 25%;
    span {
      text-align: center;
    }
    &-icon {
      font-size: 22px;
    }
    &-title {
      font-size: 12px;
    }
  }
}
.on {
  color: #409eff;
}
</style>
