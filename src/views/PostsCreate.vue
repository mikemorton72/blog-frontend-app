<template>
  <div class="home">
    <h1>Create a Post</h1>
    <ul>
      <li v-for="error in errors"> {{ error }} </li>
    </ul>
    <p>
      Title: <input type="text" v-model="newPost.title">
      <small v-if="newPost.title.length < 2 && newPost.title.length> 0">  Title is too short</small>
      <small v-if="newPost.title.length > 30">  Title is too long</small>
    </p>
    <p>
      Body: <input type="text" v-model="newPost.body">
      <small v-if="newPost.body.length < 10 && newPost.body.length> 0">  Body is too short</small>
      <small v-if="newPost.body.length > 240">  Body is too long</small>
    </p>
    
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
      newPost: {
        title: "",
        body: "",
        image: "",
      },
      errors: {},
    };
  },
  created: function () {},
  methods: {
    postsCreate: function () {
      if (!this.newPost.image) {
        this.newPost.image =
          "https://socialmedia4us.files.wordpress.com/2018/01/blog.jpg";
      }
      axios
        .post("/posts", this.newPost)
        .then((response) => {
          // console.log(response.data);
          this.newPost = {};
          this.$router.push("/");
        })
        .catch((errors) => {
          // console.log(errors.response.data.errors);
          this.errors = errors.response.data.errors;
        });
    },
  },
};
</script>
