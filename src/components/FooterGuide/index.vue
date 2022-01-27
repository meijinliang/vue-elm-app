<template>
  <div class="footer">
    <a
      v-for="(item, index) in footerItem"
      :key="index"
      href="javascript:;"
      @click="handleClick(item.route)"
    >
      <span>
        <svg-icon :iconClass="item.icon" />
      </span>
      <span>{{ item.title }}</span>
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
          title: '真香',
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

    }
  }
}
</script>

<style lang="scss" scoped>
</style>
