<template>
  <div id="app">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <dia-log></dia-log> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import Dialog from './components/Dialog.vue'

export default {
  name: 'app',
  components: {
    // HelloWorld,
    // 'dia-log': Dialog
  },
  mounted(){
    this.$dialog.alert()
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
