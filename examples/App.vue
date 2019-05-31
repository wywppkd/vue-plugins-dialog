<template>
  <div id="app">
    <h1>App</h1>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <button @click="pay">支付</button>
    <button @click="myAlert">提醒我</button>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    // HelloWorld,
  },

  methods: {
    pay () {
      this.$dialog.confirm({
        title: '你确定吗？',
        content: '好好考虑一下'
      }).then(() => {
        console.log('确定')
      }).catch(() => {
        console.log('取消')
      })
    },
    myAlert () {
      this.$dialog.alert({
        title: 'nih',
        content: 'neir'
      }).then(() => {
        console.log('点击了确定按钮')
      })
    }
  },
  mounted () {
    this.myAlert()
    setTimeout(() => {
      this.pay()
    }, 2000)
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
