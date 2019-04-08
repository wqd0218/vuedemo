<template>
  <div class="page">
    <div class="circle">{{ author }}</div>
    <div class="message" @click="toTest">{{ info }}</div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      author: 'wqd',
      info: 'go'
    }
  },
  methods: {
    toTest () {
      this.$router.push({ path: '/test' })
    }
  }
}
</script>

<style scoped lang="scss">
@import url(../../style/font.scss);
.circle {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: linear-gradient(to bottom, rgb(53,73,94), rgb(65,184,131));
  opacity: .75;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 60px;
  margin: 100px auto 0 auto;
}
.circle:hover {
  background: linear-gradient(to bottom, rgb(65,184,131), rgb(53,73,94));
}
.message {
  width: 200px;
  height: 75px;
  border-radius: 50px;
  margin: 50px auto 0 auto;
  background: linear-gradient(to right, rgb(53,73,94), rgb(65,184,131));
  opacity: .75;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 30px;
}
.message:hover {
  background: linear-gradient(to right, rgb(65,184,131), rgb(53,73,94));
}
</style>
