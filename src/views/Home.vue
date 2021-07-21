<template>
  <div class="home">
    <h1>Simple Blog App</h1>
    <div>
      
    </div>
  </div>
</template>

<style></style>

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
