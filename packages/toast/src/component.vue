<template>
  <div class="ego-toast" v-show="show">
    <div>{{content}}</div>
  </div>
</template>
<script>
export default {
  props: {
    content: String
  },
  data () {
    return {
      show: false
    }
  }
}
</script>
<style lang="scss" scoped>
.ego-toast {
  position: fixed;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: content-box;
  width: fit-content;
  max-width: 70%;
  color: #fff;
  font-size: 14px;
  line-height: 20px;
  white-space: pre-wrap;
  text-align: center;
  word-break: break-all;
  background-color: rgba(50, 50, 51, 0.88);
  border-radius: 4px;
  transform: translate3d(-50%, -50%, 0);
  min-width: 96px;
  padding: 8px 12px;
}
</style>
