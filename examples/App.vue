<template>
  <div id="app">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <ego-dialog></ego-dialog>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Dialog from './components/Dialog.vue'

export default {
  name: 'app',
  components: {
    // HelloWorld,
    'ego-dialog': Dialog
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
