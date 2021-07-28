<template>
  <div class="home">
    <h1>Posts</h1>
    <p>Search <input type="text" v-model="filterTerm"></p>
    <p>Sort By: <button v-on:click="sortByName">Name</button><button v-on:click="sortById">ID</button></p>
    <div v-for="post in filterBy(posts, filterTerm)">
      <p>{{ post.id }}</p>
      <p>{{ post.title }}</strong></p>
      <p v-if="post.user.id == $parent.getUserId()">Author: YOU</p>
      <p v-if="!(post.user.id == $parent.getUserId())">Author: {{ post.user.name }}</p>
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
import Vue2Filters from "vue2-filters";
export default {
  mixins: [Vue2Filters.mixin],
  data: function () {
    return {
      posts: [],
      filterTerm: "",
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
