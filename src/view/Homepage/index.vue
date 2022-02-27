<template>
  <div class="homepage">
    <CircleGradient :style="circleVars" :threejs="threejs" />
    <CircleGradient :style="circleVarsSM1" />
    <div class="featured">
      <div class="emoji">✋</div>
      <div class="info">
        <span>Namaste, World! Looking for </span>
        <vue-typed-js
          :strings="[
            'Web Developer',
            'App Developer',
            'API Developer',
            'Graphic Designer',
            'Video Editor'
          ]"
          loop
        >
          <h1><span class="typing"></span></h1>
        </vue-typed-js>
      </div>
    </div>
    <div
      class="highlight first"
      @mouseenter="tweenAnimation($event)"
      @mouseleave="reverseTweenAnimtion"
    >
      <img
        :src="`${publicPath}assets/animation.jpg`"
        alt="animation"
        class="service-img service--animation"
      />
      <span>animation</span>
    </div>
    <div
      class="highlight second"
      @mouseenter="tweenAnimation($event)"
      @mouseleave="reverseTweenAnimtion"
    >
      <img
        :src="`${publicPath}assets/interaction.jpg`"
        alt="interaction"
        class="service-img service--interaction"
      />
      <span>interaction</span>
    </div>
    <div
      class="highlight third"
      @mouseenter="tweenAnimation($event)"
      @mouseleave="reverseTweenAnimtion"
    >
      <img
        :src="`${publicPath}assets/illustration.png`"
        alt="illustration"
        class="service-img service--illustration"
      />
      <span>illustration</span>
    </div>
    <img src="@/assets/abstract/rotated-dots.svg" alt="" class="rotated-dots" />
    <img src="@/assets/abstract/cross.svg" alt="" class="cross" />
    <img src="@/assets/abstract/cross.svg" alt="" class="cross c2" />
    <img src="@/assets/abstract/wavy.svg" alt="" class="wavy" />
    <img src="@/assets/abstract/wavy.svg" alt="" class="wavy w2" />
    <img src="@/assets/abstract/dots.svg" alt="" class="dots" />
  </div>
</template>

<script>
import Vue from 'vue'
import VueTypedJs from 'vue-typed-js'
Vue.use(VueTypedJs)
import CircleGradient from '@/components/Utilities/CircleGradient'
import { gsap, Power3, Expo } from 'gsap'
export default {
  name: 'Home',
  components: {
    CircleGradient
  },
  props: {
    darkMode: {
      type: Boolean
    }
  },
  data() {
    return {
      publicPath: process.env.BASE_URL,
      threejs: true,
      animation: false,
      interaction: false,
      illustration: false,
      insAnimation: null
    }
  },
  computed: {
    circleVars() {
      return {
        '--width': '500px'
      }
    },
    circleVarsSM1() {
      return {
        '--width': '80px'
      }
    }
  },
  created() {
    window.addEventListener('load', this.onWindowLoad)
  },
  mounted() {
    gsap.set('.highlight>span', {
      opacity: 0
    })
  },
  methods: {
    onWindowLoad() {
      this.$emit('loaded')
      this.imageAnim()
    },
    imageAnim() {
      gsap.from('.highlight,.circle', {
        alpha: 0,
        duration: 1,
        delay: 1,
        stagger: 0.1,
        ease: Power3.easeInOut
      })
    },
    tweenAnimation(e) {
      const el = e.target
      const img = el.querySelector('img'),
        text = el.querySelector('span')
      this.insAnimation = gsap.timeline()
      this.insAnimation
        .to(img, {
          borderRadius: 4,
          x: -10,
          duration: 0.5,
          ease: Expo.easeInOut
        })
        .to(
          text,
          {
            opacity: 1,
            x: 50,
            duration: 0.5,
            ease: Expo.easeInOut
          },
          0
        )
    },
    reverseTweenAnimtion() {
      this.insAnimation.reverse()
      this.insAnimation = null
    }
  }
}
</script>

<style lang="scss" scoped>
.homepage {
  position: relative;
  padding: 1.5rem;
  height: calc(100vh - 112px);
  display: flex;
  align-items: center;
  @include respond-below(sm) {
    padding: 0;
    justify-content: center;
    height: calc(100vh - 134px - 16px);
    align-items: center;
    flex-direction: column-reverse;
    justify-content: space-between;
  }
  .circle {
    position: absolute;
    left: calc(50% - (var(--width)) / 2);
    @include respond-below(sm) {
      position: unset;
      margin-left: 2rem;
    }
    &:nth-child(2) {
      top: 40%;
      left: 10%;
      @include respond-below(sm) {
        display: none;
      }
    }
  }

  .featured {
    @include respond-below(sm) {
      align-self: center;
    }
    align-self: flex-start;
    padding: 1.5rem;
    border-radius: 15px;
    background: #edf2f8;
    box-shadow: 30px 30px 60px #c9ced3, -30px -30px 60px #ffffff;
    @include flex-center;
    display: inline-flex;
    h1 {
      font-size: 28px;
    }
    span {
      font-weight: 600;
    }

    .emoji {
      font-size: 3rem;
      margin-right: 1rem;
      transform: rotate(-35deg);
      transform-origin: bottom;
      animation: slow-motion-hi 1s ease-in-out infinite none alternate running;
    }
  }

  // Right side Bubbles
  .highlight {
    @include respond-below(sm) {
      /* display: none; */
    }
    position: absolute;
    @include flex-center();
    flex-direction: column;
    span {
      position: absolute;
      font-size: 20px;
      font-weight: 900;
      padding-inline: 4px;

      color: rgba($color: black, $alpha: 0.8);
      &::after {
        content: '';
        display: block;
        width: 100%;
        height: 60%;
        position: absolute;
        bottom: 0;
        z-index: -1;
        background: #fff;
      }
    }
    &.first {
      top: 0;
      right: 200px;
      @include respond-below(sm) {
        top: 40%;
        right: 70%;
      }
    }
    &.second {
      right: 0;
      top: 45%;
      transform: translateY(-50%);
      @include respond-below(sm) {
        top: 30%;
        right: 45%;
        /* transform: translateY(-50%); */
      }
    }
    &.third {
      bottom: 10%;
      right: 200px;
      @include respond-below(sm) {
        top: 40%;
        right: 20%;
        bottom: unset;
      }
    }
    .service-img {
      border-radius: 500px;
      object-fit: cover;
      box-shadow: 15px 15px 30px #c9ced3a6, -15px -15px 30px #ffffff;
      &.service--animation {
        width: 120px;
        height: 120px;
        @include respond-below(sm) {
          width: 60px;
          height: 60px;
        }
      }
      &.service--interaction {
        width: 250px;
        height: 250px;
        @include respond-below(sm) {
          width: 60px;
          height: 60px;
        }
      }
      &.service--illustration {
        width: 120px;
        height: 120px;
        @include respond-below(sm) {
          width: 60px;
          height: 60px;
        }
      }
    }
  }

  .rotated-dots {
    @include respond-below(sm) {
      display: none;
    }
    position: absolute;
    top: 0;
    z-index: -1;
    left: 150px;
  }
  .dots {
    @include respond-below(sm) {
      display: none;
    }
    position: absolute;
    right: 0;
    top: 0;
    z-index: -1;
  }
  .wavy {
    @include respond-below(sm) {
      display: none;
    }
    position: absolute;
    z-index: -1;
    right: 350px;
    &.w2 {
      bottom: 50px;
      left: 150px;
    }
  }
  .cross {
    @include respond-below(sm) {
      display: none;
    }
    position: absolute;
    z-index: -1;
    left: 500px;
    opacity: 0.4;
    &.c2 {
      bottom: 50px;
      left: 120px;
    }
  }
}
</style>
