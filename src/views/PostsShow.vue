<template>
  <div class="home">
    <!-- <p>{{ post }}</p> -->
    <h1>{{ post.title }}</h1>
    <p>Author: {{ post.user.name }}</p>
    <img v-bind:src ='post.image'>
    <p>{{ post.body }}</p>
    <button v-on:click="goToEdit()">Edit</button>
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
      post: {
        user: {
          name: null,
        },
      },
    };
  },
  created: function () {
    this.postsShow();
  },
  methods: {
    postsShow: function () {
      axios.get(`/posts/${this.$route.params.id}`).then((response) => {
        this.post = response.data;
      });
    },
    goToEdit: function () {
      this.$router.push(`/posts/${this.$route.params.id}/edit`);
    },
  },
};
</script>
