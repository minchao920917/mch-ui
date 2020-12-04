<template>
  <div class="btns">
    <h1>size:</h1>
    <mc-btn class="btn-mg" :size="'giant'">giant</mc-btn>
    <mc-btn class="btn-mg" :size="'jumbo'">jumbo</mc-btn>
    <mc-btn class="btn-mg" :size="'large'">large</mc-btn>
    <mc-btn class="btn-mg" :size="'normal'">normal</mc-btn>
    <mc-btn class="btn-mg" :size="'small'">small</mc-btn>
    <mc-btn class="btn-mg" :size="'small'">tiny</mc-btn>

    <h1>type:</h1>
    <mc-btn class="btn-mg" :type="'primary'">primary</mc-btn>
    <mc-btn class="btn-mg" :type="'success'">success</mc-btn>
    <mc-btn class="btn-mg" :type="'info'">info</mc-btn>
    <mc-btn class="btn-mg" :type="'warning'">warning</mc-btn>
    <mc-btn class="btn-mg" :type="'danger'">danger</mc-btn>

    <h1>shape:</h1>
    <mc-btn class="btn-mg" :sharpe="'square'">primary</mc-btn>
    <mc-btn class="btn-mg" :sharpe="'rounded'">rounded</mc-btn>
    <mc-btn class="btn-mg" :sharpe="'box'">box</mc-btn>
    <mc-btn class="btn-mg" :sharpe="'pill'">pill</mc-btn>
    <mc-btn class="btn-mg" :sharpe="'circle'">circle</mc-btn>


    <h1>disabled:</h1>
    <mc-btn class="btn-mg" :isdisabled="true" disabled>primary</mc-btn>

  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.btns {
  .btn-mg {
    margin: 10px;
  }
}
</style>