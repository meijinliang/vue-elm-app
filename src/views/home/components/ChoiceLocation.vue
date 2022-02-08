<template>
  <van-popup v-model="show" position="right">
    <div class="choice-location-header">
      <van-icon class="arrow-left" name="arrow-left" @click="clickReturen" />
      <span class="title">{{ flag ? '请选择收货地址' : '请选择城市' }}</span>
    </div>
    <!-- 选择收货地址 -->
    <div v-if="flag" class="choice-location-content">
      <div class="search">
        <div class="text" @click="flag = false">
          <span>{{ city.name }}</span>
          <van-icon class="play" name="play" />
        </div>
        <van-search v-model="address" placeholder="请输入地址" @input="onInput" />
      </div>
      <div class="search-value">
        <van-cell v-for="(item, index) in addressList" :key="index" :title="item.name" :label="item.address" />
      </div>
    </div>
    <!-- 选择城市 -->
    <div v-else>

    </div>
</van-popup>
</template>

<script>
import { CurrentLocation, getAddress } from '@/api/location'
export default {
  name: '',
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      city: {
        name: '请选择城市'
      },
      address: '',
      flag: true, // 用于选择收货地址 城市切换的标识
      addressList: []
    }
  },
  computed: {
    show: {
      get() {
        return this.visible
      },
      set(val) {
        return this.$emit('update:visible', val)
      }
    }
  },
  mounted() {
    this.getCurrentLocation()
    const dom = document.getElementsByClassName('choice-location-content')[0]
    let roll = 0 // 滚动的值
    let stop = 0 // 对比时间的值
    let timer = null
    console.log(dom.style)
    dom.addEventListener('scroll', (e) => {
      // 每次滑动前都清除一遍我们定义的定时器
      clearTimeout(timer)
      // 每次滚动的时候，都让box回到原来的宽度
      // dom.style.paddingRight = '0px'
      timer = setTimeout(() => {
        stop = dom.scrollTop
        if (stop === roll) {
          // console.log('滚动停止');
          // 判断如果相等，就把box宽度增加18px，达到隐藏滚动条的效果
          // dom.style.paddingRight = '12px'
        }
      }, 1000)
      roll = e.target.scrollTop
    })
  },
  methods: {
    clickReturen() {
      if (!this.flag) {
        this.flag = true
      } else {
        this.show = false
      }
    },
    // 获取定位城市
    getCurrentLocation() {
      const params = {
        type: 'guess' // guess定位城市 hot热门城市 group 所有城市
      }
      CurrentLocation(params).then(res => {
        this.city = res
      })
    },
    onInput(value) { // 输入框输入内容调用接口需要节流 防止多次触发
      const params = {
        city_id: this.city.id,
        keyword: value,
        type: 'serach'
      }
      getAddress(params).then(res => {
        this.addressList = [...res, ...res]
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.van-popup {
  width: 100%;
  height: 100%;
  background: #f4f4f4;
  .choice-location-header {
    height: 44px;
    line-height: 44px;
    background: #409eff;
    color: #fff;
    .arrow-left {
      padding: 10px;
    }
    .title {
      display: inline-block;
      width: calc(100% - 36px);
      text-align: center;
    }
  }
  .choice-location-content {
    width: 100%;
    max-height: calc(100vh - 44px);
    overflow-y: scroll;
    .search {
      height: 56px;
      line-height: 56px;
      background: #fff;
      display: flex;
      .text {
        padding-left: 10px;
         font-size: 14px;
        .play {
          transform: rotate(90deg);
        }
      }
      .van-search {
        flex: 1;
      }
    }
  }
  // ::-webkit-scrollbar // 滚动条整体部分，可以设置宽度啥的
  // ::-webkit-scrollbar-button // 滚动条两端的按钮
  // ::-webkit-scrollbar-track // 外层轨道
  // ::-webkit-scrollbar-track-piece // 内层滚动槽
  // ::-webkit-scrollbar-thumb // 滚动的滑块
  // ::-webkit-scrollbar-corner // 边角
  // ::-webkit-resizer // 定义右下角拖动块的样式
  // 隐藏滚动条
  .choice-location-content::-webkit-scrollbar {
    // width: 0px;
  }
  .choice-location-content::-webkit-scrollbar-track-piece {
    background-color: #fff;
  }
}
</style>
