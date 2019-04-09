<template>
  <div class="">
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
.circle {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background-color: #41b883;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 60px;
  margin: 100px auto 0 auto;
  transition: background-color 1s;
}
.circle:hover {
  background-color: #35495e;
}
.message {
  width: 200px;
  height: 75px;
  border-radius: 50px;
  margin: 50px auto 0 auto;
  background-color: #41b883;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 30px;
  transition: background-color 1s;
}
.message:hover {
  background-color: #35495e;
}
</style>
