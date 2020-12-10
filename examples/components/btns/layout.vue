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

    <h2>mc-flex 的属性：</h2>
    <h3>:direction="row"</h3>
    <mc-flex class="row" :direction="'row'">
      <mc-item class="cont" :grow="1">1</mc-item>
      <mc-item class="cont" :grow="1">2</mc-item>
      <mc-item class="cont" :grow="1">3</mc-item>
    </mc-flex>
    <h3>:direction="row-reverse"</h3>
    <mc-flex class="row" :direction="'row-reverse'">
      <mc-item class="cont" :grow="1">1</mc-item>
      <mc-item class="cont" :grow="1">2</mc-item>
      <mc-item class="cont" :grow="1">3</mc-item>
    </mc-flex>
    <h3>:direction="column"</h3>
    <mc-flex class="row" :direction="'column'">
      <mc-item class="cont cont-column" >1</mc-item>
      <mc-item class="cont cont-column" >2</mc-item>
      <mc-item class="cont cont-column" >3</mc-item>
    </mc-flex>
    <h3>:direction="column-reverse"</h3>
    <mc-flex class="row" :direction="'column-reverse'">
      <mc-item class="cont cont-column" >1</mc-item>
      <mc-item class="cont cont-column" >2</mc-item>
      <mc-item class="cont cont-column" >3</mc-item>
    </mc-flex>
    <h3>:wrap="wrap"</h3>
    <mc-flex class="row" :wrap="'wrap'">
      <mc-item class="cont" :basis="'400px'">1</mc-item>
      <mc-item class="cont" :basis="'400px'">2</mc-item>
      <mc-item class="cont" :basis="'400px'">3</mc-item>
      <mc-item class="cont" :basis="'400px'">4</mc-item>
      <mc-item class="cont" :basis="'400px'">5</mc-item>
    </mc-flex>
    <h3>:wrap="nowrap"</h3>
    <mc-flex class="row" :wrap="'nowrap'">
      <mc-item class="cont" :basis="'400px'">1</mc-item>
      <mc-item class="cont" :basis="'400px'">2</mc-item>
      <mc-item class="cont" :basis="'400px'">3</mc-item>
      <mc-item class="cont" :basis="'400px'">4</mc-item>
      <mc-item class="cont" :basis="'400px'">5</mc-item>
    </mc-flex>
    <h3>:wrap="wrap-reverse"</h3>
    <mc-flex class="row" :wrap="'wrap-reverse'">
      <mc-item class="cont" :basis="'400px'">1</mc-item>
      <mc-item class="cont" :basis="'400px'">2</mc-item>
      <mc-item class="cont" :basis="'400px'">3</mc-item>
      <mc-item class="cont" :basis="'400px'">4</mc-item>
      <mc-item class="cont" :basis="'400px'">5</mc-item>
    </mc-flex>
    <h3>:wrap="wrap-reverse"</h3>
    <mc-flex class="row" :wrap="'wrap-reverse'">
      <mc-item class="cont" :basis="'400px'">1</mc-item>
      <mc-item class="cont" :basis="'400px'">2</mc-item>
      <mc-item class="cont" :basis="'400px'">3</mc-item>
      <mc-item class="cont" :basis="'400px'">4</mc-item>
      <mc-item class="cont" :basis="'400px'">5</mc-item>
    </mc-flex>
    <h3>:justify="flex-start"</h3>
    <mc-flex class="row" :justify="'flex-start'">
      <mc-item class="cont" :basis="'100px'">1</mc-item>
      <mc-item class="cont" :basis="'100px'">2</mc-item>
      <mc-item class="cont" :basis="'100px'">3</mc-item>
      <mc-item class="cont" :basis="'100px'">4</mc-item>
      <mc-item class="cont" :basis="'100px'">5</mc-item>
    </mc-flex>
    <h3>:justify="flex-end"</h3>
    <mc-flex class="row" :justify="'flex-end'">
      <mc-item class="cont" :basis="'100px'">1</mc-item>
      <mc-item class="cont" :basis="'100px'">2</mc-item>
      <mc-item class="cont" :basis="'100px'">3</mc-item>
      <mc-item class="cont" :basis="'100px'">4</mc-item>
      <mc-item class="cont" :basis="'100px'">5</mc-item>
    </mc-flex>
    <h3>:justify="center"</h3>
    <mc-flex class="row" :justify="'center'">
      <mc-item class="cont" :basis="'100px'">1</mc-item>
      <mc-item class="cont" :basis="'100px'">2</mc-item>
      <mc-item class="cont" :basis="'100px'">3</mc-item>
      <mc-item class="cont" :basis="'100px'">4</mc-item>
      <mc-item class="cont" :basis="'100px'">5</mc-item>
    </mc-flex>
    <h3>:justify="space-between"</h3>
    <mc-flex class="row" :justify="'space-between'">
      <mc-item class="cont" :basis="'100px'">1</mc-item>
      <mc-item class="cont" :basis="'100px'">2</mc-item>
      <mc-item class="cont" :basis="'100px'">3</mc-item>
      <mc-item class="cont" :basis="'100px'">4</mc-item>
      <mc-item class="cont" :basis="'100px'">5</mc-item>
    </mc-flex>
    <h3>:justify="space-around"</h3>
    <mc-flex class="row" :justify="'space-around'">
      <mc-item class="cont" :basis="'100px'">1</mc-item>
      <mc-item class="cont" :basis="'100px'">2</mc-item>
      <mc-item class="cont" :basis="'100px'">3</mc-item>
      <mc-item class="cont" :basis="'100px'">4</mc-item>
      <mc-item class="cont" :basis="'100px'">5</mc-item>
    </mc-flex>
    <h3>:alignItems="flex-start"</h3>
    <mc-flex class="row row-align" :alignItems="'flex-start'">
      <mc-item class="cont" :basis="'400px'">1</mc-item>
      <mc-item class="cont" :basis="'400px'">2</mc-item>
      <mc-item class="cont" :basis="'400px'">3</mc-item>
      <mc-item class="cont" :basis="'400px'">4</mc-item>
      <mc-item class="cont" :basis="'400px'">5</mc-item>
    </mc-flex>
    <h3>:alignItems="flex-end"</h3>
    <mc-flex class="row row-align" :alignItems="'flex-end'">
      <mc-item class="cont" :basis="'400px'">1</mc-item>
      <mc-item class="cont" :basis="'400px'">2</mc-item>
      <mc-item class="cont" :basis="'400px'">3</mc-item>
      <mc-item class="cont" :basis="'400px'">4</mc-item>
      <mc-item class="cont" :basis="'400px'">5</mc-item>
    </mc-flex>
    <h3>:alignItems="center"</h3>
    <mc-flex class="row row-align" :alignItems="'center'">
      <mc-item class="cont" :basis="'400px'">1</mc-item>
      <mc-item class="cont" :basis="'400px'">2</mc-item>
      <mc-item class="cont" :basis="'400px'">3</mc-item>
      <mc-item class="cont" :basis="'400px'">4</mc-item>
      <mc-item class="cont" :basis="'400px'">5</mc-item>
    </mc-flex>
    <h3>:alignItems="baseline"</h3>
    <mc-flex class="row row-align" :alignItems="'baseline'">
      <mc-item class="cont" :basis="'400px'">1</mc-item>
      <mc-item class="cont" :basis="'400px'">2</mc-item>
      <mc-item class="cont" :basis="'400px'">3</mc-item>
      <mc-item class="cont" :basis="'400px'">4</mc-item>
      <mc-item class="cont" :basis="'400px'">5</mc-item>
    </mc-flex>
    <h3>:alignItems="stretch"</h3>
    <mc-flex class="row row-align" :alignItems="'stretch'">
      <mc-item class="cont" :basis="'400px'">1</mc-item>
      <mc-item class="cont" :basis="'400px'">2</mc-item>
      <mc-item class="cont" :basis="'400px'">3</mc-item>
      <mc-item class="cont" :basis="'400px'">4</mc-item>
      <mc-item class="cont" :basis="'400px'">5</mc-item>
    </mc-flex>
    <h3>:alignContent="flex-start "</h3>
    <mc-flex class="row row-align" :alignContent="'flex-start'" :wrap="'wrap'">
      <mc-item class="cont" :basis="'400px'">1</mc-item>
      <mc-item class="cont" :basis="'400px'">2</mc-item>
      <mc-item class="cont" :basis="'400px'">3</mc-item>
      <mc-item class="cont" :basis="'400px'">4</mc-item>
      <mc-item class="cont" :basis="'400px'">5</mc-item>
    </mc-flex>
    <h3>:alignContent="flex-end "</h3>
    <mc-flex class="row row-align" :alignContent="'flex-end'" :wrap="'wrap'">
      <mc-item class="cont" :basis="'400px'">1</mc-item>
      <mc-item class="cont" :basis="'400px'">2</mc-item>
      <mc-item class="cont" :basis="'400px'">3</mc-item>
      <mc-item class="cont" :basis="'400px'">4</mc-item>
      <mc-item class="cont" :basis="'400px'">5</mc-item>
    </mc-flex>
    <h3>:alignContent="space-between"</h3>
    <mc-flex
      class="row row-align"
      :alignContent="'space-between'"
      :wrap="'wrap'"
    >
      <mc-item class="cont" :basis="'400px'">1</mc-item>
      <mc-item class="cont" :basis="'400px'">2</mc-item>
      <mc-item class="cont" :basis="'400px'">3</mc-item>
      <mc-item class="cont" :basis="'400px'">4</mc-item>
      <mc-item class="cont" :basis="'400px'">5</mc-item>
    </mc-flex>
    <h3>:alignContent="space-around"</h3>
    <mc-flex
      class="row row-align"
      :alignContent="'space-around'"
      :wrap="'wrap'"
    >
      <mc-item class="cont" :basis="'400px'">1</mc-item>
      <mc-item class="cont" :basis="'400px'">2</mc-item>
      <mc-item class="cont" :basis="'400px'">3</mc-item>
      <mc-item class="cont" :basis="'400px'">4</mc-item>
      <mc-item class="cont" :basis="'400px'">5</mc-item>
    </mc-flex>
    <h3>:alignContent="stretch"</h3>
    <mc-flex class="row row-align" :alignContent="'stretch'" :wrap="'wrap'">
      <mc-item class="cont" :basis="'400px'">1</mc-item>
      <mc-item class="cont" :basis="'400px'">2</mc-item>
      <mc-item class="cont" :basis="'400px'">3</mc-item>
      <mc-item class="cont" :basis="'400px'">4</mc-item>
      <mc-item class="cont" :basis="'400px'">5</mc-item>
    </mc-flex>


    <h2>mc-item 的属性：</h2>
    <h3>:order="Number"</h3>
    <mc-flex class="row" >
      <mc-item class="cont" :order="3" :grow="1">1</mc-item>
      <mc-item class="cont" :order="2" :grow="1">2</mc-item>
      <mc-item class="cont" :order="1" :grow="1">3</mc-item>
    </mc-flex>
    <h3>:grow="Number"</h3>
    <mc-flex class="row" >
      <mc-item class="cont" :grow="1">1</mc-item>
      <mc-item class="cont" :grow="1">2</mc-item>
      <mc-item class="cont" :grow="1">3</mc-item>
    </mc-flex>
    <h3>:shrink="Number"</h3>
    <mc-flex class="row" >
      <mc-item class="cont" :shrink="1" :basis="'400px'">1</mc-item>
      <mc-item class="cont" :shrink="2" :basis="'400px'">2</mc-item>
      <mc-item class="cont" :shrink="3" :basis="'400px'">3</mc-item>
    </mc-flex>
     <h3>:basis="String"</h3>
    <mc-flex class="row" >
      <mc-item class="cont" :shrink="1" :basis="'100px'">1</mc-item>
      <mc-item class="cont" :shrink="2" :basis="'200px'">2</mc-item>
      <mc-item class="cont" :shrink="3" :basis="'300px'">3</mc-item>
    </mc-flex>
     <h3>:alignSelf="auto"</h3>
    <mc-flex class="row" :alignItems="'flex-start'">
      <mc-item class="cont" :alignSelf="'flex-end'" :basis="'100px'">1</mc-item>
      <mc-item class="cont" :alignSelf="'center'" :basis="'200px'">2</mc-item>
      <mc-item class="cont" :basis="'300px'">3</mc-item>
    </mc-flex>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.row {
  margin: 10px auto;
  .cont {
    color: #fff;
    height: 40px;
    line-height: 40px;
  }
  .cont-column{
      width: 400px;
  }
  .cont:nth-child(odd) {
    background: #09aeaf;
  }
  .cont:nth-child(even) {
    background: #5cb85c;
  }
}
.row-align {
  background: #eee;
  height: 200px;
}
h3 {
  background: #fff;
  text-align: left;
  padding-left: 50px;
}
</style>