<template>
  <div class="home">
    <h1>Posts</h1>
    <p>Sort By: <button v-on:click="sortByName">Name</button><button v-on:click="sortById">ID</button></p>
    <div v-for="post in posts">
      <p>{{ post.id }}</p>
      <p>{{ post.title }}</strong></p>
      <p>Author: {{ post.user.name }}</p>
      <a v-bind:href="`/posts/${post.id}`"> 
      <img v-bind:src="post.image">
      </a>
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
    sortByName: function () {
      this.posts = this.posts.sort((a, b) => a.title.localeCompare(b.title));
    },
    sortById: function () {
      this.posts = this.posts.sort((a, b) => a.id - b.id);
    },
  },
};
</script>
