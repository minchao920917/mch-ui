<template>
  <div class="layout">

      <h1>栅格布局</h1>
      <mc-container>
           <mc-row class="row">
              <mc-col :span="24" class="cont">span=24</mc-col>
          </mc-row>
          <mc-row class="row"> 
              <mc-col :span="12" class="cont"> span=12</mc-col>
              <mc-col :span="12" class="cont">span=12</mc-col>
          </mc-row>
          <mc-row class="row">
              <mc-col :span="8" class="cont">span=8</mc-col>
              <mc-col :span="8" class="cont">span=8</mc-col>
              <mc-col :span="8" class="cont">span=8</mc-col>
          </mc-row>
          <mc-row class="row">
              <mc-col :span="6" class="cont">span=6</mc-col>
              <mc-col :span="6" class="cont">span=6</mc-col>
              <mc-col :span="6" class="cont">span=6</mc-col>
              <mc-col :span="6" class="cont">span=6</mc-col>
          </mc-row>
          <mc-row class="row">
              <mc-col :span="4" class="cont">span=4</mc-col>
              <mc-col :span="4" class="cont">span=4</mc-col>
              <mc-col :span="4" class="cont">span=4</mc-col>
              <mc-col :span="4" class="cont">span=4</mc-col>
              <mc-col :span="4" class="cont">span=4</mc-col>
              <mc-col :span="4" class="cont">span=4</mc-col>
          </mc-row>
          <mc-row class="row">
              <mc-col :span="3" class="cont">span=3</mc-col>
              <mc-col :span="3" class="cont">span=3</mc-col>
              <mc-col :span="3" class="cont">span=3</mc-col>
              <mc-col :span="3" class="cont">span=3</mc-col>
              <mc-col :span="3" class="cont">span=3</mc-col>
              <mc-col :span="3" class="cont">span=3</mc-col>
              <mc-col :span="3" class="cont">span=3</mc-col>
              <mc-col :span="3" class="cont">span=3</mc-col>
          </mc-row>
      </mc-container>

      <h1>flex布局</h1>

      <mc-flex class="row" :direction="'row'">
          <mc-item class="cont" :order="3" :grow="1">3</mc-item>
          <mc-item class="cont" :order="2" :grow="2">2</mc-item>
          <mc-item class="cont" :order="1" :grow="1">1</mc-item>
      </mc-flex>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

.row{
    margin:10px auto;
    .cont{
         color:#fff;
         height:40px;
         line-height: 40px;
    }
    .cont:nth-child(odd){
       
        background: #09aeaf;
    }
    .cont:nth-child(even){
       
        background: #5cb85c;
    }
}
</style>