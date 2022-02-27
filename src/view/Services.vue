<template>
  <div class="services">
    <canvas ref="el" :style="{ width: '600px', height: '600px' }"></canvas>
  </div>
</template>

<script>
import createGlobe from 'cobe'
export default {
  name: 'Services',
  data() {
    return {
      phi: 0
    }
  },
  created() {
    this.$emit('loaded')
  },
  mounted() {
    const globe = createGlobe(this.$refs.el, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: this.phi,
      theta: 0,
      dark: 1,
      diffuse: 0,
      mapSamples: 16000,
      mapBrightness: 12,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [0, 0, 0],
      markers: [
        // longitude latitude
        { location: [37.7595, -122.4367], size: 0.03 },
        { location: [40.7128, -74.006], size: 0.1 }
      ],
      onRender: (state) => {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.
        state.phi = this.phi
        this.phi += 0.005
      }
    })
  }
}
</script>

<style scoped>
.services {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100vh;
}
</style>
