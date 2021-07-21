<template>
  <div class="home">
    <h1>Posts</h1>
    <div v-for="post in posts">
      <!-- <p>{{ post }}</p> -->
      <p>{{ post.title }}</strong></p>
      <p>Author: {{ post.user.name }}</p>
      <img v-bind:src="post.image">
      <p>{{ post.body }}</p>
      <hr />
    </div>
  </div>
</template>

<style>
img {
  height: 250px;
}
</style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      posts: [],
    };
  },
  created: function () {
    this.postsIndex();
  },
  methods: {
    postsIndex: function () {
      axios.get("/posts").then((response) => {
        this.posts = response.data;
      });
    },
  },
};
</script>
