<template>
  <div class="home">
    <h1>Create a Post</h1>
    <p>Title: <input type="text" v-model="newPost.title"></p>
    <p>Body: <input type="text" v-model="newPost.body"></p>
    <p>Image URL: <input type="text" v-model="newPost.image"></p>
    <button v-on:click="postsCreate()">Create</button>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      newPost: {},
    };
  },
  created: function () {},
  methods: {
    postsCreate: function () {
      axios.post("/posts", this.newPost).then((response) => {
        console.log(response.data);
        this.newPost = {};
      });
    },
  },
};
</script>
