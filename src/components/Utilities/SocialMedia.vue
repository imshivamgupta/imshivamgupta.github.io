<template>
  <ul class="social-media">
    <li class="social-media__icon">
      <a href="#">
        <img src="@/assets/icons/001-linkedin.svg" alt="linkedin" />
      </a>
    </li>
    <li class="social-media__icon">
      <a href="">
        <img src="@/assets/icons/002-instagram.svg" alt="instagram" />
      </a>
    </li>
    <li class="social-media__icon">
      <a href="">
        <img src="@/assets/icons/003-twitter.svg" alt="twitter" />
      </a>
    </li>
  </ul>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.social-media {
  position: fixed;
  bottom: 20px;
  left: 100px;
  z-index: 1;
  @include respond-below(sm) {
    display: flex;
    width: 50%;
    justify-content: space-around;
    bottom: 10px;
  }
  &__icon {
    width: 25px;

    &:not(:last-child) {
      margin-bottom: 0.8rem;
    }
    img {
      box-shadow: 20px 20px 40px #cacaca, -20px -20px 40px #ffffff;
    }
  }
}
</style>
