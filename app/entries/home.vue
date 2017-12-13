<template>
  <div class="root">
    <div class="wrapper">
      <p v-if="!originImg" class="tip"> 未上传头像</p>
    </div>
    <div class="tools">
      <div class="btn btn_upload">上传原图</div>
      <div class="btn btn_download">下载成果</div>
    </div>
  </div>
</template>

<script>
export default {
  data (){
    return {
      originImg:null,
    }
  }
}
</script>

<style lang="less" scoped>
p,div,span{
  font-family: "Avenir Next", Avenir, "Helvetica Neue", Helvetica, "Nimbus Sans L", Arial,
  "Liberation Sans", "PingFang SC", "Hiragino Sans GB", "Source Han Sans CN",
  "Source Han Sans SC", "Microsoft YaHei", "Wenquanyi Micro Hei", "WenQuanYi Zen Hei",
  "ST Heiti", SimHei, "WenQuanYi Zen Hei Sharp", sans-serif;
}
.root{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}
.wrapper{
  position: relative;
  width: 80vw;
  height: 80vw;
  background: #eeeeee;
  p.tip{
    margin-top: 40%;
    color: #444;
    text-align: center;
  }
}
.tools{
  display: flex;
  justify-content: space-between;
  padding: 10px;
  width: 80vw;
  display: flex;
  .btn{
    padding:5px;
    width:45%;
    color:white;
    text-align: center;
    background: #cccccc;
    border-radius: 4px;
  }
}
</style>
