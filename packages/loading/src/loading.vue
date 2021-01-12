<template>
  <div class="mc-loading">
    <!-- 第一种loading特效 依次拉伸-->
    <h3>第一种特效:从左到右依次拉伸</h3>
    <div class="load1">
      <div class="rect1"></div>
      <div class="rect2"></div>
      <div class="rect3"></div>
      <div class="rect4"></div>
      <div class="rect5"></div>
    </div>

    <!-- 第二种特效,两次翻转 -->
    <h3>第二种特效:先上下翻转，再左右翻转</h3>
    <div class="load2"></div>

    <!-- 第三种特效,两个圆轮流放大缩小 -->
    <h3>第三种特效:两个圆轮流放大缩小</h3>
    <div class="load3">
      <div class="double-bounce1"></div>
      <div class="double-bounce2"></div>
    </div>

    <!-- 第四种特效,两个方块旋转换位 -->
    <h3>第四种特效,两个方块旋转换位</h3>
    <div class="load4">
      <div class="cube1"></div>
      <div class="cube2"></div>
    </div>

    <!-- 第五种特效,两个圆旋转换位 -->
    <h3>第五种特效,两个圆旋转换位</h3>
    <div class="load5">
      <div class="dot1"></div>
      <div class="dot2"></div>
    </div>

    <!-- 第六种特效,三个圆放大缩小 -->
    <h3>第六种特效,三个圆依次放大缩小</h3>
    <div class="load6">
      <div class="bounce1"></div>
      <div class="bounce2"></div>
      <div class="bounce3"></div>
    </div>

    <!-- 第七种特效,放大特效  -->
    <h3>第七种特效,放大特效</h3>
    <div class="load7"></div>

    <!-- 第八种特效,旋转放大缩小 -->
    <h3>第八种特效,小圆旋转依次放大缩小</h3>
    <div class="load8">
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

    <!-- 第九种3D波浪特效wave -->
    <h3>第九种3D wave 波浪特效</h3>
    <div class="base">
      <div class="cube"></div>
      <div class="cube"></div>
      <div class="cube"></div>
      <div class="cube"></div>
      <div class="cube"></div>
      <div class="cube"></div>
      <div class="cube"></div>
      <div class="cube"></div>
      <div class="cube"></div>
    </div>

    <br />
    <br />
    <br />
    <!--  -->

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
    <h3 style="position: relative; margin: 0">第十种,贪吃蛇状旋转拉伸变换</h3>
    <br />
    <br /><br /><br />
   
  </div>
</template>

<script>
export default {
  name: "McLoading",
};
</script>

<style lang="scss" scoped>
/*第一种特效*/
/* load1 */
.load1 {
  margin: 100px auto;
  width: 60px;
  height: 60px;
  text-align: center;
  font-size: 10px;
}
.load1 > div {
  background-color: #37b2c3;
  height: 100%;
  width: 6px;
  display: inline-block;
  -webkit-animation: stretchdelay 1.2s infinite ease-in-out;
  animation: stretchdelay 1.2s infinite ease-in-out;
}
.load1 .rect2 {
  -webkit-animation-delay: -1.1s;
  animation-delay: -1.1s;
}
.load1 .rect3 {
  -webkit-animation-delay: -1s;
  animation-delay: -1s;
}
.load1 .rect4 {
  -webkit-animation-delay: -0.9s;
  animation-delay: -0.9s;
}
.load1 .rect5 {
  -webkit-animation-delay: -0.8s;
  animation-delay: -0.8s;
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
/*第二种loading特效*/
.load2 {
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

/*第三种特效*/
.load3 {
  width: 60px;
  height: 60px;
  position: relative;
  margin: 100px auto;
}
.double-bounce1,
.double-bounce2 {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #37b2c3;
  opacity: 0.6;
  position: absolute;
  top: 0;
  left: 0;

  -webkit-animation: bounce 2s infinite ease-in-out;
  animation: bounce 2s infinite ease-in-out;
}
.double-bounce2 {
  -webkit-animation-delay: -1s;
  animation-delay: -1s;
}
@-webkit-keyframes bounce {
  0%,
  100% {
    -webkit-transform: scale(0);
  }
  50% {
    -webkit-transform: scale(1);
  }
}
@keyframes bounce {
  0%,
  100% {
    transform: scale(0);
    -webkit-transform: scale(0);
  }
  50% {
    transform: scale(1);
    -webkit-transform: scale(1);
  }
}
/* load3 */
.load3 {
  width: 60px;
  height: 60px;
  position: relative;
  margin: 100px auto;
}
.double-bounce1,
.double-bounce2 {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #37b2c3;
  opacity: 0.6;
  position: absolute;
  top: 0;
  left: 0;

  -webkit-animation: bounce 2s infinite ease-in-out;
  animation: bounce 2s infinite ease-in-out;
}
.double-bounce2 {
  -webkit-animation-delay: -1s;
  animation-delay: -1s;
}
@-webkit-keyframes bounce {
  0%,
  100% {
    -webkit-transform: scale(0);
  }
  50% {
    -webkit-transform: scale(1);
  }
}
@keyframes bounce {
  0%,
  100% {
    transform: scale(0);
    -webkit-transform: scale(0);
  }
  50% {
    transform: scale(1);
    -webkit-transform: scale(1);
  }
}

/* load4 */
.load4 {
  margin: 100px auto;
  width: 32px;
  height: 32px;
  position: relative;
}
.cube1,
.cube2 {
  background-color: #37b2c3;
  width: 30px;
  height: 30px;
  position: absolute;
  top: 0;
  left: 0;
  -webkit-animation: cubemove 1.8s infinite ease-in-out;
  animation: cubemove 1.8s infinite ease-in-out;
}
.cube2 {
  -webkit-animation-delay: -0.9s;
  animation-delay: -0.9s;
}
@-webkit-keyframes cubemove {
  25% {
    -webkit-transform: translateX(42px) rotate(-90deg) scale(0.5);
  }
  50% {
    -webkit-transform: translateX(42px) translateY(42px) rotate(-180deg);
  }
  75% {
    -webkit-transform: translateX(0px) translateY(42px) rotate(-270deg)
      scale(0.5);
  }
  100% {
    -webkit-transform: rotate(-360deg);
  }
}
@keyframes cubemove {
  25% {
    transform: translateX(42px) rotate(-90deg) scale(0.5);
    -webkit-transform: translateX(42px) rotate(-90deg) scale(0.5);
  }
  50% {
    transform: translateX(42px) translateY(42px) rotate(-179deg);
    -webkit-transform: translateX(42px) translateY(42px) rotate(-179deg);
  }
  50.1% {
    transform: translateX(42px) translateY(42px) rotate(-180deg);
    -webkit-transform: translateX(42px) translateY(42px) rotate(-180deg);
  }
  75% {
    transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5);
    -webkit-transform: translateX(0px) translateY(42px) rotate(-270deg)
      scale(0.5);
  }
  100% {
    transform: rotate(-360deg);
    -webkit-transform: rotate(-360deg);
  }
}

/* load5 */
.load5 {
  margin: 100px auto;
  width: 90px;
  height: 90px;
  position: relative;
  text-align: center;
  -webkit-animation: rotate 2s infinite linear;
  animation: rotate 2s infinite linear;
}
.dot1,
.dot2 {
  width: 60%;
  height: 60%;
  display: inline-block;
  position: absolute;
  top: 0;
  background-color: #37b2c3;
  border-radius: 100%;
  -webkit-animation: bounce 2s infinite ease-in-out;
  animation: bounce 2s infinite ease-in-out;
}
.dot2 {
  top: auto;
  bottom: 0px;
  -webkit-animation-delay: -1s;
  animation-delay: -1s;
}
@-webkit-keyframes rotate {
  100% {
    -webkit-transform: rotate(360deg);
  }
}
@keyframes rotate {
  100% {
    transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
  }
}
@-webkit-keyframes bounce {
  0%,
  100% {
    -webkit-transform: scale(0);
  }
  50% {
    -webkit-transform: scale(1);
  }
}
@keyframes bounce {
  0%,
  100% {
    transform: scale(0);
    -webkit-transform: scale(0);
  }
  50% {
    transform: scale(1);
    -webkit-transform: scale(1);
  }
}

/* load6 */
.load6 {
  margin: 100px auto 0;
  width: 150px;
  text-align: center;
}
.load6 > div {
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
.load6 .bounce1 {
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
}
.load6 .bounce2 {
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
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

/* load7 */
.load7 {
  width: 40px;
  height: 40px;
  margin: 100px auto;
  background-color: #333;
  border-radius: 100%;
  -webkit-animation: scaleout 1s infinite ease-in-out;
  animation: scaleout 1s infinite ease-in-out;
}
@-webkit-keyframes scaleout {
  0% {
    -webkit-transform: scale(0);
  }
  100% {
    -webkit-transform: scale(1);
    opacity: 0;
  }
}
@keyframes scaleout {
  0% {
    transform: scale(0);
    -webkit-transform: scale(0);
  }
  100% {
    transform: scale(1);
    -webkit-transform: scale(1);
    opacity: 0;
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

/*第九种3D 波浪*/

.base {
  height: 9em;
  left: 50%;
  margin: 2em -7.5em -7.5em -7.5em;
  padding: 3em;
  position: relative;
  /*top: 50%;*/
  width: 9em;
  transform: rotateX(45deg) rotateZ(45deg);
  transform-style: preserve-3d;
}

.cube,
.cube:after,
.cube:before {
  content: "";
  float: left;
  height: 3em;
  position: absolute;
  width: 3em;
}

/* Top */
.cube {
  background-color: #05afd1;
  position: relative;
  transform: translateZ(3em);
  transform-style: preserve-3d;
  transition: 0.25s;
  box-shadow: 13em 13em 1.5em rgba(0, 0, 0, 0.1);
  animation: anim 1s infinite;
}
.cube:after {
  background-color: #049dbc;
  transform: rotateX(-90deg) translateY(3em);
  transform-origin: 100% 100%;
}
.cube:before {
  background-color: #048ca7;
  transform: rotateY(90deg) translateX(3em);
  transform-origin: 100% 0;
}
.cube:nth-child(1) {
  animation-delay: 0.05s;
}
.cube:nth-child(2) {
  animation-delay: 0.1s;
}
.cube:nth-child(3) {
  animation-delay: 0.15s;
}
.cube:nth-child(4) {
  animation-delay: 0.2s;
}
.cube:nth-child(5) {
  animation-delay: 0.25s;
}
.cube:nth-child(6) {
  animation-delay: 0.3s;
}
.cube:nth-child(7) {
  animation-delay: 0.35s;
}
.cube:nth-child(8) {
  animation-delay: 0.4s;
}
.cube:nth-child(9) {
  animation-delay: 0.45s;
}

@keyframes anim {
  50% {
    transform: translateZ(0.5em);
  }
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
body {
  background-color: #f5f5f5;
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
}ß
</style>