<template>
  <div class="">
    <el-menu
      default-active="1"
      @open="handleOpen"
      @close="handleClose"
      background-color="#35495e"
      text-color="#fff"
      active-text-color="#41b883">
      <el-menu-item index="1" @click="go">
        <i class="el-icon-time"></i>
        <span slot="title">导航一</span>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-time"></i>
          <span>导航二</span>
        </template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <template slot="title">分组二</template>
          <el-menu-item index="1-3">选项3</el-menu-item>
          <el-menu-item index="1-4">选项4</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'wqdMenu',
  props: {
    myNumber: Number
  },
  methods: {
    handleOpen () {
      console.log('open')
    },
    handleClose () {
      console.log('close')
    },
    go () {
      this.$emit('go-back')
    }
  },
  mounted () {
  }
}
</script>

<style lang="scss" scoped>
.el-menu {
  width: 200px;
  height: 100vh;
  position: fixed;
  left: 0;
}
</style>
