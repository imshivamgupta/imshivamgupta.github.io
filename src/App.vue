<template>
  <div id="app">
    <Container>
      <Header :status="loaded" />
      <transition name="slither">
        <router-view
          :dark-mode="darkMode === undefined ? false : true"
          @loaded="windowLoaded"
        />
      </transition>
      <SocialMedia />
    </Container>
    <Loader :status="loaded"></Loader>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Header from '@/components/Header'
import Container from '@/components/Utilities/Container'
import SocialMedia from '@/components/Utilities/SocialMedia'
import Loader from '@/components/Loader/Fullscreen'
export default {
  name: 'App',
  components: {
    Header,
    Container,
    SocialMedia,
    Loader
  },
  data() {
    return {
      bgColor: '#00ff00',
      height: '60',
      loaded: false
    }
  },
  computed: {
    ...mapGetters({
      darkMode: 'user/getDarkMode'
    }),
    headerVars() {
      return {
        '--bg-color': this.bgColor,
        '--height': this.height + 'px'
      }
    }
  },
  created() {
    this.unsubscribe = this.$store.subscribe((mutation, { user }) => {
      if (mutation.type === 'user/darkMode') {
        const htmlDOM = window.document.querySelector('html')
        htmlDOM.setAttribute('theme', user.darkMode ? 'dark' : 'lite')
      }
    })
  },
  beforeDestroy() {
    this.unsubscribe()
  },
  mounted() {
    this.init()
  },
  methods: {
    ...mapActions({
      init: 'user/init'
    }),
    windowLoaded() {
      this.loaded = true
      console.log('window loaded app.vue')
    }
  }
}
</script>

<style lang="scss">
.slither-enter-active,
.slither-leave-active {
  transition: transform 0.4s linear;
}

.slither-enter,
.slither-leave-to {
  transform: translateY(100%);
}

.slither-enter-to,
.slither-leave {
  transform: translateY(0);
}
</style>
