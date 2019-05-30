<template>
  <div>

    <transition name="fade">
      <div class="ego-overlay">
        <div class="ego-dialog">
          <div class="ego-dialog__header" v-if="title">{{title}}</div>
          <div class="ego-dialog__content">{{content}}</div>
          <div class="ego-dialog__footer">
            <button class="ego-dialog__cancel" v-if="dialogType == 'confirm'">{{cancelButtonText}}</button>
            <button class="ego-dialog__confirm">{{confirmButtonText}}</button>
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
    title: String,
    content: String,
    confirmButtonText: {
      default: '确认'
    },
    cancelButtonText: {
      default: '取消'
    }
  },
  data () {
    return {
      dialogType: '',
      showDialog: false
    }
  },
  methods: {
    toggleDialog () {
      this.showDialog = !this.showDialog
    }
  },
  mounted () {
    console.log(this.vvv)
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
    font-weight: 500;
  }
  &__content{
    padding: 15px;
  }
  &__footer{
    display: flex;
    button,
    button:visited,
    button:active,
    button:hover{
      flex:1;
      height: 50px;
      line-height: 48px;
      border: 0.5px solid #ddd;
      background-color: #fff;
    }
  }
  &__cancel{
    color: #999;
  }
  &__confirm{
    color:#348ee5;
  }
}
</style>
