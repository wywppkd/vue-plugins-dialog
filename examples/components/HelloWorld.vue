<template>
  <div>
    <button @click="myConfirm">确认订单</button>
    <br>
    <button @click="myAlert">支付</button>
  </div>
</template>

<script>
export default {
  name:'HelloWorld',
  data () {
    return {
    }
  },
  methods: {
    // 调用alert弹框
    myAlert () {
      this.$dialog.alert({
        title: '支付失败',
        content: '请重试',
        confirmButtonText: '我知道了',
        confirmButtonColor: 'red'
      }).then(() => {
        console.log('您点击了确定')
      })
    },
    // 调用confirm弹框
    myConfirm () {
      this.$dialog.confirm({
        title: '你确定吗？你确定吗？你确定吗？',
        content: '再好好想想哦!',
        confirmButtonText: '我确定',   // 默认'确定'
        confirmButtonColor: '#333',    //默认'#2886d7'
        cancelButtonColor: '我取消',   // 默认'取消'
        cancelButtonColor: 'red'       //默认'#999'
      }).then(() => {
        console.log('确定')
      }).catch(() => {
        console.log('取消')
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
