<template>
  <div
    ref="div"
    class="circle"
    :class="{ threejs }"
    @mouseenter="hoverImage = true && !isMobile"
    @mouseleave="hoverImage = false && !isMobile"
  >
    <template v-if="threejs">
      <transition-group name="fade" mode="out-in" appear>
        <img v-show="!hoverImage" key="1" src="@/assets/3d.png" alt="" />
        <img
          v-show="hoverImage"
          key="2"
          src="@/assets/stand.png"
          alt=""
          class="hovered"
        />
      </transition-group>
    </template>
  </div>
</template>

<script>
import hoverEffect from 'hover-effect'
import image1 from '@/assets/normal.svg'
import image2 from '@/assets/hire.svg'
import Effect from '@/assets/heightMap.png'
import { isMobile } from '@/helpers'
export default {
  name: 'CircleGradient',
  props: ['threejs'],
  data() {
    return {
      hoverImage: false
    }
  },
  computed: {
    isMobile() {
      return isMobile()
    }
  },
  mounted() {
    if (this.threejs) {
      new hoverEffect({
        parent: this.$refs.div,
        intensity: 0.3,
        image1: image1,
        image2: image2,
        displacementImage: Effect
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.circle {
  $width: var(--width);
  width: $width;
  height: $width;
  @include respond-below(sm) {
    width: 300px;
    height: 300px;
  }
  background: linear-gradient(
    115deg,
    rgba(254, 254, 254, 0.2) 7%,
    rgba(217, 225, 234, 1) 100%
  );
  border-radius: 50%;
  &.threejs {
    position: relative;
    cursor: pointer;
  }
  img {
    position: absolute;
    right: 50%;
    bottom: 10%;
    width: 90%;
    height: 90%;
    pointer-events: none;
  }
  animation: slow-motion 4s ease-in-out infinite none alternate running;
  ::v-deep canvas {
    border-radius: 500px;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease-in-out;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
