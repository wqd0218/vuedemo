<template>
  <div class="page">
    <div class="circle">
      <p>{{ author }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      author: 'wqd'
    }
  }
}
</script>

<style scoped lang="scss">
.page {
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
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
}
</style>
