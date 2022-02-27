<template>
  <form @submit.prevent="login">
    <h1>Login</h1>
    <input type="email" placeholder="enter your email" />
    <input type="password" placeholder="enter your password" />
    <button type="submit">Login</button>
  </form>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      email: "shivamg8797@gmail.com",
      password: "shivamgupta",
    };
  },
  methods: {
    login() {
      this.$store.dispatch("signInWithFirebase");
      // var provider = new firebase.auth.GoogleAuthProvider();
      // firebase
      //   .auth()
      //   .signInWithPopup(provider)
      //   .then(function (result) {
      //     // This gives you a Google Access Token. You can use it to access the Google API.
      //     var token = result.credential.accessToken;
      //     // The signed-in user info.
      //     var user = result.user;
      //     // ...
      //     console.log(token, user);
      //   })
      //   .catch(function (error) {
      //     console.log("error", error);
      //   });
      console.log("this.$store.state", this.$store.state.firebase.token);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
