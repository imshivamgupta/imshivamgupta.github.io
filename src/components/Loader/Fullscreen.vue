<template>
  <div class="fullscreen">
    <div class="loader"></div>
    <div class="loader"></div>
    <div class="loader"></div>
  </div>
</template>

<script>
import { gsap, Expo } from 'gsap'
export default {
  props: ['status'],
  watch: {
    status() {
      this.hideLoader()
    }
  },
  mounted() {},
  methods: {
    hideLoader() {
      gsap.to('.loader', {
        width: 0,
        duration: 1,
        stagger: 0.2,
        ease: Expo.easeInOut
      })
    }
  }
}
</script>

<style lang="scss">
.fullscreen {
  position: fixed;
  inset: 0;
  z-index: 9;
  display: flex;
  flex-direction: column;
  pointer-events: none;
  .loader {
    width: 100%;
    height: calc(100vh / 3);
    &:nth-child(1) {
      background: darken($color: royalblue, $amount: 0);
    }
    &:nth-child(2) {
      background: linear-gradient(180deg, royalblue, #1d44b8);
    }
    &:nth-child(3) {
      background: darken($color: royalblue, $amount: 15%);
    }
  }
}
</style>
