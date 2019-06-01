# vue插件(alert,confirm弹框)

## 功能

  - alert弹框
  - confirm弹框

## 引入

  ```js
    import EgoDialog from 'ego-dialog'
    Vue.use(EgoDialog)
  ```

## 代码演示

  ```js
  // 调用alert弹框
    this.$dialog.alert({
      title: '支付失败',
      content: '请重试',
      confirmButtonText: '我知道了',
      confirmButtonColor: 'red'
    }).then(() => {
      console.log('您点击了确定')
    })

  // 调用confirm弹框
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

    Vue.prototype.$dialog.setDefaultOptions(options) // 修改默认配置，对所有 Dialog 生效
    Vue.prototype.$dialog.resetDefaultOptions(options) // 	重置默认配置，对所有 Dialog 生效
  ```