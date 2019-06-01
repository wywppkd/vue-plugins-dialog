<template>
  <div>
    <transition name="fade">
      <div class="ego-overlay" v-if="show">
        <div class="ego-dialog">
          <div class="ego-dialog__header" v-if="title">{{title}}</div>
          <div class="ego-dialog__content">{{content}}</div>
          <div class="ego-dialog__footer">
            <button class="ego-dialog__cancel" v-if="showCancelButton" @click="handleAction('cancel')" :style="{color:cancelButtonColor}">{{cancelButtonText || '取消'}}</button>
            <button class="ego-dialog__confirm" @click="handleAction('confirm')" :style="{color:confirmButtonColor}">{{confirmButtonText || '确定'}}</button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  name: 'ego-dialog',
  props: {
    title: [String, Number],
    content: [String, Number],
    confirmButtonText: String,
    confirmButtonColor: String,
    cancelButtonText: String,
    cancelButtonColor: String,
    showCancelButton: Boolean,
    callback: Function
  },
  data () {
    return {
      show: false
    }
  },
  methods: {
    handleAction (action) {
      // 隐藏dom
      this.show = false
      // 移除dom
      this.$el.remove()
      // 销毁实例
      this.$destroy()
      // 回调函数
      this.callback(action)
    }
  }
}
</script>
<style lang="scss" scoped>
.fade-enter {
  opacity: 0;
  transform: translate3d(-50%, -50%, 0) scale(0.7);
}
.fade-leave-active {
  opacity: 0;
  transform: translate3d(-50%, -50%, 0) scale(0.9);
}

.ego-overlay{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
}
.ego-dialog{
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  background-color: #fff;
  width: 72%;
  border-radius: 4px;
  overflow: hidden;
  text-align: center;
  font-size: 16px;
  color: #323233;
  &__header{
    padding-top: 25px;
    font-weight: 700;
  }
  &__content{
    padding: 15px;
    font-size: 12px;
  }
  &__footer{
    display: flex;
    button,
    button:focus{
      flex:1;
      height: 50px;
      line-height: 48px;
      border: 0.5px solid #ddd;
      background-color: #fff;
      font-size: 16px;
      outline: none;
      user-select: none;
      overflow: hidden;
    }
    button:active{
      background-color: #e6e6e6;
    }
  }
  &__cancel{
    color: #999;
  }
  &__confirm{
    color:#2886d7;
  }
}
</style>
