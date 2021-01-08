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
   
    <h1>fontSize:</h1>
    <mc-btn class="btn-mg" :fontSize="'20px'">fontSize</mc-btn>
   
    <h1>bgColor:</h1>
    <mc-btn class="btn-mg" :bgColor="'#f60'">bgColor</mc-btn>
   

    <h1>disabled:</h1>
    <mc-btn class="btn-mg" :isdisabled="true" disabled>primary</mc-btn>

    <h1>2D Transitions</h1>

    <mc-btn class="btn-mg" :hover="'grow'">Grow</mc-btn>

    <mc-btn class="btn-mg" :hover="'shrink'">Shrink</mc-btn>

    <mc-btn class="btn-mg" :hover="'pulse'">Pulse</mc-btn>

    <mc-btn class="btn-mg" :hover="'pulse-grow'">Pulse Grow</mc-btn>

    <mc-btn class="btn-mg" :hover="'pulse-shrink'">Pulse Shrink</mc-btn>

    <mc-btn class="btn-mg" :hover="'push'">Push</mc-btn>

    <mc-btn class="btn-mg" :hover="'pop'">Pop</mc-btn>

    <mc-btn class="btn-mg" :hover="'bounce-in'">Bounce In</mc-btn>

    <mc-btn class="btn-mg" :hover="'bounce-out'">Bounce Out</mc-btn>

    <mc-btn class="btn-mg" :hover="'rotate'">Rotate</mc-btn>

    <mc-btn class="btn-mg" :hover="'grow-rotate'">Grow Rotate</mc-btn>

    <mc-btn class="btn-mg" :hover="'float'">Float</mc-btn>

    <mc-btn class="btn-mg" :hover="'sink'">Sink</mc-btn>

    <mc-btn class="btn-mg" :hover="'bob'">Bob</mc-btn>

    <mc-btn class="btn-mg" :hover="'hang'">Hang</mc-btn>

    <mc-btn class="btn-mg" :hover="'skew'">Skew</mc-btn>

    <mc-btn class="btn-mg" :hover="'skew-forward'">Skew Forward</mc-btn>

    <mc-btn class="btn-mg" :hover="'skew-backward'">Skew Backward</mc-btn>

    <mc-btn class="btn-mg" :hover="'wobble-horizontal'">Wobble Horizontal</mc-btn>

    <mc-btn class="btn-mg" :hover="'wobble-vertical'">Wobble Vertical</mc-btn>

    <mc-btn class="btn-mg" :hover="'wobble-to-bottom-right'"
      >Wobble To Bottom Right</mc-btn
    >

    <mc-btn class="btn-mg" :hover="'wobble-to-top-right'"
      >Wobble To Top Right</mc-btn
    >

    <mc-btn class="btn-mg" :hover="'wobble-top'">Wobble Top</mc-btn>

    <mc-btn class="btn-mg" :hover="'wobble-bottom'">Wobble Bottom</mc-btn>

    <mc-btn class="btn-mg" :hover="'wobble-skew'">Wobble Skew</mc-btn>

    <mc-btn class="btn-mg" :hover="'buzz'">Buzz</mc-btn>

    <mc-btn class="btn-mg" :hover="'buzz-out'">Buzz Out</mc-btn>

    <h1>Background Transitions</h1>

    <mc-btn class="btn-mg" :hover="'fade'">Fade</mc-btn>

    <mc-btn class="btn-mg" :hover="'sweep-to-right'">Sweep To Right</mc-btn>

    <mc-btn class="btn-mg" :hover="'sweep-to-left'">Sweep To Left</mc-btn>

    <mc-btn class="btn-mg" :hover="'sweep-to-bottom'">Sweep To Bottom</mc-btn>

    <mc-btn class="btn-mg" :hover="'sweep-to-top'">Sweep To Top</mc-btn>

    <mc-btn class="btn-mg" :hover="'bounce-to-right'">Bounce To Right</mc-btn>

    <mc-btn class="btn-mg" :hover="'bounce-to-left'">Bounce To Left</mc-btn>

    <mc-btn class="btn-mg" :hover="'bounce-to-bottom'">Bounce To Bottom</mc-btn>

    <mc-btn class="btn-mg" :hover="'bounce-to-top'">Bounce To Top</mc-btn>

    <mc-btn class="btn-mg" :hover="'radial-out'">Radial Out</mc-btn>

    <mc-btn class="btn-mg" :hover="'radial-in'">Radial In</mc-btn>

    <mc-btn class="btn-mg" :hover="'rectangle-in'">Rectangle In</mc-btn>

    <mc-btn class="btn-mg" :hover="'rectangle-out'">Rectangle Out</mc-btn>

    <mc-btn class="btn-mg" :hover="'shutter-in-horizontal'"
      >Shutter In Horizontal</mc-btn
    >

    <mc-btn class="btn-mg" :hover="'shutter-out-horizontal'"
      >Shutter Out Horizontal</mc-btn
    >

    <mc-btn class="btn-mg" :hover="'shutter-in-vertical'"
      >Shutter In Vertical</mc-btn
    >

    <mc-btn class="btn-mg" :hover="'shutter-out-vertical'"
      >Shutter Out Vertical</mc-btn
    >

    <h1>Border Transitions</h1>

    <mc-btn class="btn-mg" :hover="'border-fade'">Border Fade</mc-btn>

    <mc-btn class="btn-mg" :hover="'hollow'">Hollow</mc-btn>

    <mc-btn class="btn-mg" :hover="'trim'">Trim</mc-btn>

    <mc-btn class="btn-mg" :hover="'ripple-out'">Ripple Out</mc-btn>

    <mc-btn class="btn-mg" :hover="'ripple-in'">Ripple In</mc-btn>

    <mc-btn class="btn-mg" :hover="'outline-out'">Outline Out</mc-btn>

    <mc-btn class="btn-mg" :hover="'outline-in'">Outline In</mc-btn>

    <mc-btn class="btn-mg" :hover="'round-corners'">Round Corners</mc-btn>

    <mc-btn class="btn-mg" :hover="'underline-from-left'"
      >Underline From Left</mc-btn
    >

    <mc-btn class="btn-mg" :hover="'underline-from-center'"
      >Underline From Center</mc-btn
    >

    <mc-btn class="btn-mg" :hover="'underline-from-right'"
      >Underline From Right</mc-btn
    >

    <mc-btn class="btn-mg" :hover="'reveal'">Reveal</mc-btn>

    <mc-btn class="btn-mg" :hover="'underline-reveal'">Underline Reveal</mc-btn>

    <mc-btn class="btn-mg" :hover="'overline-reveal'">Overline Reveal</mc-btn>

    <mc-btn class="btn-mg" :hover="'overline-from-left'">Overline From Left</mc-btn>

    <mc-btn class="btn-mg" :hover="'overline-from-center'"
      >Overline From Center</mc-btn
    >

    <mc-btn class="btn-mg" :hover="'overline-from-right'"
      >Overline From Right</mc-btn
    >

    <h1>Shadow and Glow Transitions</h1>

    <mc-btn class="btn-mg" :hover="'shadow'">Shadow</mc-btn>

    <mc-btn class="btn-mg" :hover="'grow-shadow'">Grow Shadow</mc-btn>

    <mc-btn class="btn-mg" :hover="'float-shadow'">Float Shadow</mc-btn>

    <mc-btn class="btn-mg" :hover="'glow'">Glow</mc-btn>

    <mc-btn class="btn-mg" :hover="'shadow-radial'">Shadow Radial</mc-btn>

    <mc-btn class="btn-mg" :hover="'box-shadow-outset'">Box Shadow Outset</mc-btn>

    <mc-btn class="btn-mg" :hover="'box-shadow-inset'">Box Shadow Inset</mc-btn>

    <h1>Curls</h1>

    <mc-btn class="btn-mg" :hover="'curl-top-left'">Curl Top Left</mc-btn>

    <mc-btn class="btn-mg" :hover="'curl-top-right'">Curl Top Right</mc-btn>

    <mc-btn class="btn-mg" :hover="'curl-bottom-right'">Curl Bottom Right</mc-btn>

    <mc-btn class="btn-mg" :hover="'curl-bottom-left'">Curl Bottom Left</mc-btn>
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