<template>
  <div class="btns">
    <h1>size:</h1>
    <mc-btn class="btn-mg" :type="'primary'" :size="'giant'">giant</mc-btn>
    <mc-btn class="btn-mg" :type="'primary'" :size="'jumbo'">jumbo</mc-btn>
    <mc-btn class="btn-mg" :type="'primary'" :size="'large'">large</mc-btn>
    <mc-btn class="btn-mg" :type="'primary'" :size="'normal'">normal</mc-btn>
    <mc-btn class="btn-mg" :type="'primary'" :size="'small'">small</mc-btn>
    <mc-btn class="btn-mg" :type="'primary'" :size="'small'">tiny</mc-btn>

    <h1>type:</h1>
    <mc-btn class="btn-mg" >none</mc-btn>
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

    <h1>2D Transitions</h1>

    <mc-btn class="btn-mg mc-hvr-grow">Grow</mc-btn>

    <mc-btn class="btn-mg mc-hvr-shrink">Shrink</mc-btn>

    <mc-btn class="btn-mg mc-hvr-pulse">Pulse</mc-btn>

    <mc-btn class="btn-mg mc-hvr-pulse-grow">Pulse Grow</mc-btn>

    <mc-btn class="btn-mg mc-hvr-pulse-shrink">Pulse Shrink</mc-btn>

    <mc-btn class="btn-mg mc-hvr-push">Push</mc-btn>

    <mc-btn class="btn-mg mc-hvr-pop">Pop</mc-btn>

    <mc-btn class="btn-mg mc-hvr-bounce-in">Bounce In</mc-btn>

    <mc-btn class="btn-mg mc-hvr-bounce-out">Bounce Out</mc-btn>

    <mc-btn class="btn-mg mc-hvr-rotate">Rotate</mc-btn>

    <mc-btn class="btn-mg mc-hvr-grow-rotate">Grow Rotate</mc-btn>

    <mc-btn class="btn-mg mc-hvr-float">Float</mc-btn>

    <mc-btn class="btn-mg mc-hvr-sink">Sink</mc-btn>

    <mc-btn class="btn-mg mc-hvr-bob">Bob</mc-btn>

    <mc-btn class="btn-mg mc-hvr-hang">Hang</mc-btn>

    <mc-btn class="btn-mg mc-hvr-skew">Skew</mc-btn>

    <mc-btn class="btn-mg mc-hvr-skew-forward">Skew Forward</mc-btn>

    <mc-btn class="btn-mg mc-hvr-skew-backward">Skew Backward</mc-btn>

    <mc-btn class="btn-mg mc-hvr-wobble-horizontal">Wobble Horizontal</mc-btn>

    <mc-btn class="btn-mg mc-hvr-wobble-vertical">Wobble Vertical</mc-btn>

    <mc-btn class="btn-mg mc-hvr-wobble-to-bottom-right"
      >Wobble To Bottom Right</mc-btn
    >

    <mc-btn class="btn-mg mc-hvr-wobble-to-top-right"
      >Wobble To Top Right</mc-btn
    >

    <mc-btn class="btn-mg mc-hvr-wobble-top">Wobble Top</mc-btn>

    <mc-btn class="btn-mg mc-hvr-wobble-bottom">Wobble Bottom</mc-btn>

    <mc-btn class="btn-mg mc-hvr-wobble-skew">Wobble Skew</mc-btn>

    <mc-btn class="btn-mg mc-hvr-buzz">Buzz</mc-btn>

    <mc-btn class="btn-mg mc-hvr-buzz-out">Buzz Out</mc-btn>

    <h1>Background Transitions</h1>

    <mc-btn class="btn-mg mc-hvr-fade">Fade</mc-btn>

    <mc-btn class="btn-mg mc-hvr-sweep-to-right">Sweep To Right</mc-btn>

    <mc-btn class="btn-mg mc-hvr-sweep-to-left">Sweep To Left</mc-btn>

    <mc-btn class="btn-mg mc-hvr-sweep-to-bottom">Sweep To Bottom</mc-btn>

    <mc-btn class="btn-mg mc-hvr-sweep-to-top">Sweep To Top</mc-btn>

    <mc-btn class="btn-mg mc-hvr-bounce-to-right">Bounce To Right</mc-btn>

    <mc-btn class="btn-mg mc-hvr-bounce-to-left">Bounce To Left</mc-btn>

    <mc-btn class="btn-mg mc-hvr-bounce-to-bottom">Bounce To Bottom</mc-btn>

    <mc-btn class="btn-mg mc-hvr-bounce-to-top">Bounce To Top</mc-btn>

    <mc-btn class="btn-mg mc-hvr-radial-out">Radial Out</mc-btn>

    <mc-btn class="btn-mg mc-hvr-radial-in">Radial In</mc-btn>

    <mc-btn class="btn-mg mc-hvr-rectangle-in">Rectangle In</mc-btn>

    <mc-btn class="btn-mg mc-hvr-rectangle-out">Rectangle Out</mc-btn>

    <mc-btn class="btn-mg mc-hvr-shutter-in-horizontal"
      >Shutter In Horizontal</mc-btn
    >

    <mc-btn class="btn-mg mc-hvr-shutter-out-horizontal"
      >Shutter Out Horizontal</mc-btn
    >

    <mc-btn class="btn-mg mc-hvr-shutter-in-vertical"
      >Shutter In Vertical</mc-btn
    >

    <mc-btn class="btn-mg mc-hvr-shutter-out-vertical"
      >Shutter Out Vertical</mc-btn
    >

    <h1>Border Transitions</h1>

    <mc-btn class="btn-mg mc-hvr-border-fade">Border Fade</mc-btn>

    <mc-btn class="btn-mg mc-hvr-hollow">Hollow</mc-btn>

    <mc-btn class="btn-mg mc-hvr-trim">Trim</mc-btn>

    <mc-btn class="btn-mg mc-hvr-ripple-out">Ripple Out</mc-btn>

    <mc-btn class="btn-mg mc-hvr-ripple-in">Ripple In</mc-btn>

    <mc-btn class="btn-mg mc-hvr-outline-out">Outline Out</mc-btn>

    <mc-btn class="btn-mg mc-hvr-outline-in">Outline In</mc-btn>

    <mc-btn class="btn-mg mc-hvr-round-corners">Round Corners</mc-btn>

    <mc-btn class="btn-mg mc-hvr-underline-from-left"
      >Underline From Left</mc-btn
    >

    <mc-btn class="btn-mg mc-hvr-underline-from-center"
      >Underline From Center</mc-btn
    >

    <mc-btn class="btn-mg mc-hvr-underline-from-right"
      >Underline From Right</mc-btn
    >

    <mc-btn class="btn-mg mc-hvr-reveal">Reveal</mc-btn>

    <mc-btn class="btn-mg mc-hvr-underline-reveal">Underline Reveal</mc-btn>

    <mc-btn class="btn-mg mc-hvr-overline-reveal">Overline Reveal</mc-btn>

    <mc-btn class="btn-mg mc-hvr-overline-from-left">Overline From Left</mc-btn>

    <mc-btn class="btn-mg mc-hvr-overline-from-center"
      >Overline From Center</mc-btn
    >

    <mc-btn class="btn-mg mc-hvr-overline-from-right"
      >Overline From Right</mc-btn
    >

    <h1>Shadow and Glow Transitions</h1>

    <mc-btn class="btn-mg mc-hvr-shadow">Shadow</mc-btn>

    <mc-btn class="btn-mg mc-hvr-grow-shadow">Grow Shadow</mc-btn>

    <mc-btn class="btn-mg mc-hvr-float-shadow">Float Shadow</mc-btn>

    <mc-btn class="btn-mg mc-hvr-glow">Glow</mc-btn>

    <mc-btn class="btn-mg mc-hvr-shadow-radial">Shadow Radial</mc-btn>

    <mc-btn class="btn-mg mc-hvr-box-shadow-outset">Box Shadow Outset</mc-btn>

    <mc-btn class="btn-mg mc-hvr-box-shadow-inset">Box Shadow Inset</mc-btn>

    <h1>Curls</h1>

    <mc-btn class="btn-mg mc-hvr-curl-top-left">Curl Top Left</mc-btn>

    <mc-btn class="btn-mg mc-hvr-curl-top-right">Curl Top Right</mc-btn>

    <mc-btn class="btn-mg mc-hvr-curl-bottom-right">Curl Bottom Right</mc-btn>

    <mc-btn class="btn-mg mc-hvr-curl-bottom-left">Curl Bottom Left</mc-btn>
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