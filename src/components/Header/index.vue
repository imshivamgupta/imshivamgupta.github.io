<template>
  <div class="header">
    <div class="header--logo">
      <router-link tag="h3" to="/">ShivamGupta</router-link>
    </div>
    <ul class="header--menu">
      <router-link tag="li" to="/">home</router-link>
      <router-link tag="li" to="/case">cases study</router-link>
      <router-link tag="li" to="/work">work</router-link>
      <router-link tag="li" to="/about">about</router-link>
    </ul>
    <div class="header--sidemenu">
      <!-- <button @click="$store.dispatch('toggleDarkMode')">DarkMode</button> -->
      <label>
        <input
          type="checkbox"
          @change="$store.dispatch('user/toggleDarkMode')"
        />
        <div class="planet"></div>
        <div class="elements">
          <svg
            version="1.1"
            viewBox="0 0 500 500"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="250" cy="250" r="200" />
          </svg>
          <svg
            version="1.1"
            viewBox="0 0 500 500"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="250" cy="250" r="200" />
          </svg>
          <svg
            version="1.1"
            viewBox="0 0 500 500"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="250" cy="250" r="200" />
          </svg>
          <svg
            version="1.1"
            viewBox="0 0 500 500"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="250" cy="250" r="200" />
          </svg>
          <svg
            version="1.1"
            viewBox="0 0 500 500"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="250" cy="250" r="200" />
          </svg>
          <svg
            version="1.1"
            viewBox="0 0 500 500"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="250" cy="250" r="200" />
          </svg>
          <svg
            version="1.1"
            viewBox="0 0 500 500"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="250" cy="250" r="200" />
          </svg>
          <svg
            version="1.1"
            viewBox="0 0 500 500"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="250" cy="250" r="200" />
          </svg>
        </div>
      </label>
      <!-- <span>☰</span> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss" scoped>
.header {
  padding: 1.5rem 0;
  @include flex-between;
  @include respond-below(sm) {
    flex-direction: column;
    position: relative;
    padding-inline: 1rem;
  }
  &--logo {
    font-family: $brandFont;
    h3 {
      letter-spacing: 2px;
      cursor: pointer;
    }
    @include respond-below(sm) {
      order: 1;
      align-self: flex-start;
    }
  }
  &--menu {
    @include flex-center;
    @include respond-below(sm) {
      margin-top: 2rem;
      order: 3;
      width: 100%;
      justify-content: space-around;
    }
    li {
      cursor: pointer;
      &:not(:last-child) {
        margin-right: 1rem;
      }
      &::before {
        content: '';
        display: block;
        margin: auto;
        margin-bottom: -1rem;
        width: 5px;
        height: 5px;
        border-radius: 100px;
        transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
      }

      &.router-link-exact-active::before {
        background: royalblue;
        margin-bottom: 0;
      }
      &.router-link-exact-active {
        color: royalblue;
      }
    }
  }
  &--sidemenu {
    @include flex-center;
    @include respond-below(sm) {
      order: 1;
      position: absolute;
      right: 0;
      top: 0;
      transform: scale(0.6);
    }
    span {
      font-size: 1.2rem;
      color: #fff;
      background-color: #313bac;
      width: 30px;
      height: 30px;
      border-radius: 100px;
      @include flex-center;
      cursor: pointer;
    }
    label {
      cursor: pointer;
      padding: 1rem;
      position: relative;

      /* To make outline on mobile invisible */
      -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
    }

    label input[type='checkbox'] {
      height: 0;
      width: 0;
      visibility: hidden;
      position: absolute;
    }

    label .planet {
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
      overflow: hidden;
      background: radial-gradient(3.75em, 99%, transparent 100%);
      background-color: var(--bg-planet-bright);
      background-repeat: no-repeat;
      position: relative;
      will-change: background;
      -webkit-transition: all 400ms ease;
      transition: all 400ms ease;

      /* Safari transition issue */
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }

    label .planet::after {
      content: '';
      background-color: var(--bg-planet-shadow);
      width: 2rem;
      height: 2rem;
      position: absolute;
      border-radius: 50%;
      will-change: opacity, transform, background-color;
      opacity: 0;
      -webkit-transform: translate(2em, -2em);
      transform: translate(2em, -2em);
      -webkit-transition: opacity 400ms ease, background-color 400ms ease,
        -webkit-transform 400ms ease;
      transition: opacity 400ms ease, background-color 400ms ease,
        -webkit-transform 400ms ease;
      transition: opacity 400ms ease, transform 400ms ease,
        background-color 400ms ease;
      transition: opacity 400ms ease, transform 400ms ease,
        background-color 400ms ease, -webkit-transform 400ms ease;
    }

    label .elements {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      -webkit-transition: -webkit-transform 400ms ease;
      transition: -webkit-transform 400ms ease;
      transition: transform 400ms ease;
      transition: transform 400ms ease, -webkit-transform 400ms ease;
    }

    label .elements svg {
      position: absolute;
      width: 7px;
      height: 7px;
      opacity: 1;
      -webkit-transition: opacity 200ms ease, width 200ms ease,
        height 200ms ease, -webkit-transform 400ms ease;
      transition: opacity 200ms ease, width 200ms ease, height 200ms ease,
        -webkit-transform 400ms ease;
      transition: transform 400ms ease, opacity 200ms ease, width 200ms ease,
        height 200ms ease;
      transition: transform 400ms ease, opacity 200ms ease, width 200ms ease,
        height 200ms ease, -webkit-transform 400ms ease;
    }

    label .elements svg circle {
      fill: var(--bg-planet-bright);
      -webkit-transition: fill 400ms ease;
      transition: fill 400ms ease;
    }

    label .elements svg:first-child {
      -webkit-transform: translate(1.8em, 0.35em);
      transform: translate(1.8em, 0.35em);
    }

    label .elements svg:nth-child(2) {
      -webkit-transform: translate(2.8em, 0.7em);
      transform: translate(2.8em, 0.7em);
    }

    label .elements svg:nth-child(3) {
      -webkit-transform: translate(3.2em, 1.8em);
      transform: translate(3.2em, 1.8em);
    }

    label .elements svg:nth-child(4) {
      -webkit-transform: translate(2.8em, 2.8em);
      transform: translate(2.8em, 2.8em);
    }

    label .elements svg:nth-child(5) {
      -webkit-transform: translate(1.8em, 3.2em);
      transform: translate(1.8em, 3.2em);
    }

    label .elements svg:nth-child(6) {
      -webkit-transform: translate(0.7em, 2.8em);
      transform: translate(0.7em, 2.8em);
    }

    label .elements svg:nth-child(7) {
      -webkit-transform: translate(0.35em, 1.8em);
      transform: translate(0.35em, 1.8em);
    }

    label .elements svg:nth-child(8) {
      -webkit-transform: translate(0.7em, 0.7em);
      transform: translate(0.7em, 0.7em);
    }

    // html.bg-dark body {
    //   background-color: var(--bg-color);
    // }

    label input:checked + .planet {
      --bg-planet-bright: black;
    }

    label input:checked + .planet::after {
      opacity: 1;
      -webkit-transform: translate(0.6em, -0.5em);
      transform: translate(0.6em, -0.5em);
    }

    label input:checked ~ .elements {
      -webkit-transform: rotate(180deg);
      transform: rotate(180deg);
    }

    label input:checked ~ .elements svg:first-child {
      -webkit-transform: translate(2em, 1em);
      transform: translate(2em, 1em);
      opacity: 0;
    }

    label input:checked ~ .elements svg:nth-child(2) {
      -webkit-transform: translate(3em, 1.5em);
      transform: translate(3em, 1.5em);
      opacity: 0;
    }

    label input:checked ~ .elements svg:nth-child(3) {
      -webkit-transform: translate(3em, 2em);
      transform: translate(3em, 2em);
      opacity: 0;
    }

    label input:checked ~ .elements svg:nth-child(4) {
      -webkit-transform: translate(3em, 2em);
      transform: translate(3em, 2em);
      opacity: 0;
    }

    label input:checked ~ .elements svg:nth-child(5) {
      -webkit-transform: translate(1.9em, 2.6em);
      transform: translate(1.9em, 2.6em);
      width: 0.3em;
      height: 0.3em;
    }

    label input:checked ~ .elements svg:nth-child(5) circle {
      fill: var(--bg-planet-lightshadow);
    }

    label input:checked ~ .elements svg:nth-child(6) {
      -webkit-transform: translate(1.4em, 2.5em);
      transform: translate(1.4em, 2.5em);
      width: 0.3em;
      height: 0.3em;
    }

    label input:checked ~ .elements svg:nth-child(6) circle {
      fill: var(--bg-planet-lightshadow);
    }

    label input:checked ~ .elements svg:nth-child(7) {
      -webkit-transform: translate(1.1em, 1.6em);
      transform: translate(1.1em, 1.6em);
      width: 0.7em;
      height: 0.7em;
    }

    label input:checked ~ .elements svg:nth-child(7) circle {
      fill: var(--bg-planet-lightshadow);
    }

    label input:checked ~ .elements svg:nth-child(8) {
      width: 0.45em;
      height: 0.45em;
      -webkit-transform: translate(1.7em, 2.1em);
      transform: translate(1.7em, 2.1em);
    }

    label input:checked ~ .elements svg:nth-child(8) circle {
      fill: var(--bg-planet-lightshadow);
    }
  }
}
</style>
