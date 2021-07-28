<template>
  <div class="home">
    <small><p><b>Selected Filter Categories: </b><span v-for="category in filterCategories">{{category}}, </span></p></small>  
    <p><small>Search Category Toggle: <button v-on:click="toggleFilterCategory('all')">All</button> <button v-on:click="toggleFilterCategory('title')">Title</button> <button v-on:click="toggleFilterCategory('body')">Body</button> <button v-on:click="toggleFilterCategory('user.name')">User</button></small></p>
    <p>Search: <input type="text" v-model="filterTerm"></p>
    <br />
    <p>Sort By: <button v-on:click="sortByName">Name</button><button v-on:click="sortById">ID</button></p>
    <div v-for="post in filterBy(posts, filterTerm, filterCategories)">
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
      filterCategories: ["title", "body", "user.name"],
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
    toggleFilterCategory: function (category) {
      if (category === "all") {
        this.filterCategories = ["title", "body", "user.name"];
      } else {
        if (this.filterCategories.includes(category)) {
          this.filterCategories.splice(
            this.filterCategories.indexOf(category),
            1
          );
        } else {
          this.filterCategories.push(category);
        }
      }
    },
    printAThing: function (thing) {
      console.log(thing);
    },
  },
};
</script>
