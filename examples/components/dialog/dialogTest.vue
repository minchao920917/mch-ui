<template>
  <div>
     <h3>dialog弹框</h3>
    <div class="box">
      <mc-btn type="primary" @click="dislogChange">dialog弹框</mc-btn>
    </div>
      <mc-dialog
        title="这是一个弹窗"
        :visible="showDialog"
        width="60%"
        @close="showDialog = false"
      >
        <template v-slot:title>
          <h3>这是一个标题</h3>
        </template>
        <div>这是内容部分</div>
        <template v-slot:footer>
          <mc-btn @click="showDialog = false" plain type="none"
            >取消</mc-btn
          >
          <mc-btn plain type="primary" @click="showDialog = false" >确认</mc-btn>
        </template>
      </mc-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showDialog: false
    }
  },
  methods: {
    dislogChange() {
      this.showDialog = true;
    }
  },
}
</script>

<style>

</style>