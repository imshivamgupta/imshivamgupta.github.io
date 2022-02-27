<template>
  <div class="about">
    <h3 class="heading">
      UI Engineer <br />
      focused on Growth
    </h3>
    <div class="pic-wrapper">
      <img src="@/assets/abstract/dots.svg" alt="" class="dots" />
      <img src="@/assets/about.png" alt="about me" class="pic" />
    </div>
    <div class="content">
      <p>
        My name is Shivam. Currently, Front-end Developer at
        <a target="_blank" href="//www.travvir.com/explore">Travvir</a> building
        the next generation of 360deg virtual tour software.
      </p>
      <p>
        If you imagine a Venn diagram of business, design, and development,
        you'll find me right in the middle. Using my skills in design,
        development, and growth, I help companies build great products and grow
        their business.
      </p>
      <p>
        I have also built multiple successful side-projects and occasionally
        write; on my blog and for publications like CSS Tricks, Smashing
        Magazine, and UX Collective.
      </p>
      <div class="group">
        <router-link to="/work" tag="a">View my work →</router-link>
        <router-link to="/work" tag="a">Let's work together →</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { removeOverflow } from '@/helpers'
export default {
  mounted() {
    removeOverflow()
    // console.log(removeOverflow)
  },
  beforeDestroy() {
    removeOverflow()
  }
}
</script>

<style lang="scss" scoped>
.about {
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;

  h3 {
    font-size: 3.2rem;
    line-height: 1;
    text-align: center;
  }

  .pic-wrapper {
    margin-top: 1.5rem;
    position: relative;
    width: 300px;
    .dots {
      position: absolute;
      z-index: -1;
      right: -40px;
      height: 80%;
      opacity: 0.6;
    }
    .pic {
      margin-top: 1rem;
    }
  }
  .content {
    margin-block: 2rem;
    width: 60%;
    text-align: center;
    p {
      font-size: 1.125rem;
      line-height: 1.75rem;
      color: rgb(107, 114, 128);
      &:not(:first-child) {
        margin-top: 1rem;
      }
    }
    .group {
      margin-top: 2rem;
      display: flex;
      justify-content: space-around;
      a {
        text-decoration: none;
      }
    }
  }
}
</style>
