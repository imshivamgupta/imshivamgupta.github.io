<template>
  <form @submit.prevent="createData">
    <input type="text" v-model="name" placeholder="name" />
    <button>submit</button>
  </form>
</template>

<script>
import firebaseApp from "../FirebaseInit";
export default {
  data() {
    return {
      name: null,
    };
  },
  methods: {
    createData() {
      const db = firebaseApp.firestore();
      let docRef = db.collection("track");
      docRef.get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          console.log(doc.data());
        });
      });
    },
  },
};
</script>

<style>
</style>