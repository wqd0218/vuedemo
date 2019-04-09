<template>
  <div class="">
    <wqd-menu @go="toHome"></wqd-menu>
    <div class="page">
      <el-button @click="show = !show">test</el-button>
      <div class="group">
        <transition name="el-fade-in-linear">
          <div v-if="show" class="transition">淡入淡出一</div>
        </transition>
        <transition name="el-fade-in">
          <div v-if="show" class="transition">淡入淡出二</div>
        </transition>
      </div>
      <div class="group">
        <transition name="el-zoom-in-center">
          <div v-if="show" class="transition">缩放一</div>
        </transition>
        <transition name="el-zoom-in-top">
          <div v-if="show" class="transition">缩放二</div>
        </transition>
        <transition name="el-zoom-in-bottom">
          <div v-if="show" class="transition">缩放三</div>
        </transition>
      </div>
      <div class="group">
        <el-collapse-transition>
          <div v-if="show">
            <div class="transition">展开折叠</div>
            <div class="transition">展开折叠</div>
          </div>
        </el-collapse-transition>
      </div>
    </div>
  </div>
</template>

<script>
import wqdMenu from '../wqd-menu/wqd-menu'

export default {
  name: 'test',
  data () {
    return {
      show: true
    }
  },
  components: {
    wqdMenu
  },
  methods: {
    toHome () {
      this.$router.push('/home')
    }
  }
}
</script>

<style scoped lang="scss">
.page {
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 220px;
  .group {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .transition {
    margin: 20px 20px 0 0;
    width: 200px;
    height: 100px;
    border-radius: 4px;
    background-color: #41b883;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    }
  }
}
</style>
