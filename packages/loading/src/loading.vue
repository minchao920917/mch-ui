<template>
  <div class="mc-loading">
    <div class="stretchdelay" v-if="type == 'stretchdelay'">
      <div class="rect1"></div>
      <div class="rect2"></div>
      <div class="rect3"></div>
      <div class="rect4"></div>
      <div class="rect5"></div>
    </div>

    <div class="rotateplane" v-if="type == 'rotateplane'"></div>


    <!-- 第六种特效,三个圆放大缩小 -->
    <div class="bouncedelay" v-if="type == 'bouncedelay'">
      <div class="bounce1"></div>
      <div class="bounce2"></div>
      <div class="bounce3"></div>
    </div>

    <!-- 第八种特效,旋转放大缩小 -->
    <div class="load8" v-if="type == 'circlydely'">
      <div class="load8-container container1">
        <div class="circle1"></div>
        <div class="circle2"></div>
        <div class="circle3"></div>
        <div class="circle4"></div>
      </div>

      <div class="load8-container container2">
        <div class="circle1"></div>
        <div class="circle2"></div>
        <div class="circle3"></div>
        <div class="circle4"></div>
      </div>

      <div class="load8-container container3">
        <div class="circle1"></div>
        <div class="circle2"></div>
        <div class="circle3"></div>
        <div class="circle4"></div>
      </div>
    </div>

    <div class="circle-loader">
      <div class="circle-line">
        <div class="circle circle-blue"></div>
        <div class="circle circle-blue"></div>
        <div class="circle circle-blue"></div>
      </div>
      <div class="circle-line">
        <div class="circle circle-yellow"></div>
        <div class="circle circle-yellow"></div>
        <div class="circle circle-yellow"></div>
      </div>
      <div class="circle-line">
        <div class="circle circle-red"></div>
        <div class="circle circle-red"></div>
        <div class="circle circle-red"></div>
      </div>
      <div class="circle-line">
        <div class="circle circle-green"></div>
        <div class="circle circle-green"></div>
        <div class="circle circle-green"></div>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "McLoading",
  data() {
    return {};
  },
  props: {
    props: {
      size: {
        type: String,
        default: "stretchdelay",
      },
    },
  },
};
</script>

<style lang="scss" scoped>
/*第一种特效  stretchdelay*/
.stretchdelay {
  margin: 100px auto;
  width: 60px;
  height: 60px;
  text-align: center;
  font-size: 10px;

  div {
    background-color: #37b2c3;
    height: 100%;
    width: 6px;
    margin-left: 4px;
    display: inline-block;
    -webkit-animation: stretchdelay 1.4s infinite ease-in-out;
    animation: stretchdelay 1.4s infinite ease-in-out;
  }
  .rect2 {
    -webkit-animation-delay: -1.2s;
    animation-delay: -1.2s;
  }
  .rect3 {
    -webkit-animation-delay: -1s;
    animation-delay: -1s;
  }
  .rect4 {
    -webkit-animation-delay: -0.8s;
    animation-delay: -0.8s;
  }
  .rect5 {
    -webkit-animation-delay: -0.6s;
    animation-delay: -0.6s;
  }
}

@-webkit-keyframes stretchdelay {
  0%,
  40%,
  100% {
    -webkit-transform: scaleY(0.4);
  }
  20% {
    -webkit-transform: scaleY(1);
  }
}
@keyframes stretchdelay {
  0%,
  40%,
  100% {
    transform: scaleY(0.4);
    -webkit-transform: scaleY(0.4);
  }
  20% {
    transform: scaleY(1);
    -webkit-transform: scaleY(1);
  }
}
/*第二种loading特效  rotateplane*/
.rotateplane {
  width: 60px;
  height: 60px;
  background-color: #37b2c3;
  margin: 100px auto;
  -webkit-animation: rotateplane 1.2s infinite ease-in-out;
  animation: rotateplane 1.2s infinite ease-in-out;
}
@-webkit-keyframes rotateplane {
  0% {
    -webkit-transform: perspective(120px);
  }
  50% {
    -webkit-transform: perspective(120px) rotateY(180deg);
  }
  100% {
    -webkit-transform: perspective(120px) rotateY(180deg) rotateX(180deg);
  }
}
@keyframes rotateplane {
  0% {
    transform: perspective(120px) rotateX(0deg) rotateY(0deg);
    -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg);
  }
  50% {
    transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
    -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
  }
  100% {
    transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
    -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
  }
}

/* load6 */
.bouncedelay {
  margin: 100px auto 0;
  width: 150px;
  text-align: center;
  div {
    width: 30px;
    height: 30px;
    background-color: #37b2c3;
    border-radius: 100%;
    display: inline-block;
    -webkit-animation: bouncedelay 1.4s infinite ease-in-out;
    animation: bouncedelay 1.4s infinite ease-in-out;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }
  .bounce1 {
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }
  .bounce2 {
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;
  }
}
@-webkit-keyframes bouncedelay {
  0%,
  80%,
  100% {
    -webkit-transform: scale(0);
  }
  40% {
    -webkit-transform: scale(1);
  }
}
@keyframes bouncedelay {
  0%,
  80%,
  100% {
    transform: scale(0);
    -webkit-transform: scale(0);
  }
  40% {
    transform: scale(1);
    -webkit-transform: scale(1);
  }
}


/* load8 */
.load8 {
  margin: 100px auto;
  width: 20px;
  height: 20px;
  position: relative;
}
.container1 > div,
.container2 > div,
.container3 > div {
  width: 6px;
  height: 6px;
  background-color: #333;
  border-radius: 100%;
  position: absolute;
  -webkit-animation: bouncedelay 1.2s infinite ease-in-out;
  animation: bouncedelay 1.2s infinite ease-in-out;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}
.load8 .load8-container {
  position: absolute;
  width: 100%;
  height: 100%;
}
.container2 {
  -webkit-transform: rotateZ(45deg);
  transform: rotateZ(45deg);
}
.container3 {
  -webkit-transform: rotateZ(90deg);
  transform: rotateZ(90deg);
}
.circle1 {
  top: 0;
  left: 0;
}
.circle2 {
  top: 0;
  right: 0;
}
.circle3 {
  right: 0;
  bottom: 0;
}
.circle4 {
  left: 0;
  bottom: 0;
}
.container2 .circle1 {
  -webkit-animation-delay: -1.1s;
  animation-delay: -1.1s;
}
.container3 .circle1 {
  -webkit-animation-delay: -1s;
  animation-delay: -1s;
}
.container1 .circle2 {
  -webkit-animation-delay: -0.9s;
  animation-delay: -0.9s;
}
.container2 .circle2 {
  -webkit-animation-delay: -0.8s;
  animation-delay: -0.8s;
}
.container3 .circle2 {
  -webkit-animation-delay: -0.7s;
  animation-delay: -0.7s;
}
.container1 .circle3 {
  -webkit-animation-delay: -0.6s;
  animation-delay: -0.6s;
}
.container2 .circle3 {
  -webkit-animation-delay: -0.5s;
  animation-delay: -0.5s;
}
.container3 .circle3 {
  -webkit-animation-delay: -0.4s;
  animation-delay: -0.4s;
}
.container1 .circle4 {
  -webkit-animation-delay: -0.3s;
  animation-delay: -0.3s;
}
.container2 .circle4 {
  -webkit-animation-delay: -0.2s;
  animation-delay: -0.2s;
}
.container3 .circle4 {
  -webkit-animation-delay: -0.1s;
  animation-delay: -0.1s;
}
@-webkit-keyframes bouncedelay {
  0%,
  80%,
  100% {
    -webkit-transform: scale(0);
  }
  40% {
    -webkit-transform: scale(1);
  }
}
@keyframes bouncedelay {
  0%,
  80%,
  100% {
    transform: scale(0);
    -webkit-transform: scale(0);
  }
  40% {
    transform: scale(1);
    -webkit-transform: scale(1);
  }
}

.circle-loader {
  display: block;
  width: 64px;
  height: 64px;
  margin-left: -32px;
  margin-top: 300px;
  position: relative;
  left: 50%;
  top: 50%;
  -webkit-transform-origin: 16px 16px;
  transform-origin: 16px 16px;
  -webkit-animation: rotate-animation 5s infinite;
  animation: rotate-animation 5s infinite;
  -webkit-animation-timing-function: linear;
  animation-timing-function: linear;
}
.circle-loader .circle {
  -webkit-animation: move-animation 2.5s infinite;
  animation: move-animation 2.5s infinite;
  -webkit-animation-timing-function: linear;
  animation-timing-function: linear;
  position: absolute;
  left: 50%;
  top: 50%;
}
.circle-loader .circle-line {
  width: 64px;
  height: 24px;
  position: absolute;
  top: 4px;
  left: 0;
  -webkit-transform-origin: 4px 4px;
  transform-origin: 4px 4px;
}
.circle-loader .circle-line:nth-child(0) {
  -webkit-transform: rotate(0deg);
  transform: rotate(0deg);
}
.circle-loader .circle-line:nth-child(1) {
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
}
.circle-loader .circle-line:nth-child(2) {
  -webkit-transform: rotate(180deg);
  transform: rotate(180deg);
}
.circle-loader .circle-line:nth-child(3) {
  -webkit-transform: rotate(270deg);
  transform: rotate(270deg);
}
.circle-loader .circle-line .circle:nth-child(1) {
  width: 8px;
  height: 8px;
  top: 50%;
  left: 50%;
  margin-top: -4px;
  margin-left: -4px;
  border-radius: 4px;
  -webkit-animation-delay: -0.3s;
  animation-delay: -0.3s;
}
.circle-loader .circle-line .circle:nth-child(2) {
  width: 16px;
  height: 16px;
  top: 50%;
  left: 50%;
  margin-top: -8px;
  margin-left: -8px;
  border-radius: 8px;
  -webkit-animation-delay: -0.6s;
  animation-delay: -0.6s;
}
.circle-loader .circle-line .circle:nth-child(3) {
  width: 24px;
  height: 24px;
  top: 50%;
  left: 50%;
  margin-top: -12px;
  margin-left: -12px;
  border-radius: 12px;
  -webkit-animation-delay: -0.9s;
  animation-delay: -0.9s;
}
.circle-loader .circle-blue {
  background-color: #1f4e5a;
}
.circle-loader .circle-red {
  background-color: #ff5955;
}
.circle-loader .circle-yellow {
  background-color: #ffb265;
}
.circle-loader .circle-green {
  background-color: #00a691;
}
/*第十种特效*/
@-webkit-keyframes rotate-animation {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes rotate-animation {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@-webkit-keyframes move-animation {
  0% {
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
  }
  25% {
    -webkit-transform: translate(-64px, 0);
    transform: translate(-64px, 0);
  }
  75% {
    -webkit-transform: translate(32px, 0);
    transform: translate(32px, 0);
  }
  100% {
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
  }
}
@-webkit-keyframes move-animation {
  0% {
    -webkit-transform: translate(0, 0);
  }
}
@keyframes move-animation {
  0% {
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
  }
  25% {
    -webkit-transform: translate(-64px, 0);
    transform: translate(-64px, 0);
  }
  75% {
    -webkit-transform: translate(32px, 0);
    transform: translate(32px, 0);
  }
  100% {
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
  }
}
</style>