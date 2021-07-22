<template>
  <div class="home">
    <h1>Update a Post</h1>
    <ul>
      <li v-for="error in errors"> {{ error }} </li>
    </ul>
    <p>Title: <input type="text" v-model="editPostParams.title"></p>
    <p>Body: <input type="text" v-model="editPostParams.body"></p>
    <p>Image URL: <input type="text" v-model="editPostParams.image"></p>
    <button v-on:click="postsUpdate()">Update</button>
    <br />
    <br />
    <button v-on:click="postsDestroy()">Delete</button> 
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      editPostParams: {},
      errors: {},
    };
  },
  created: function () {
    this.postsShow();
  },
  methods: {
    postsShow: function () {
      axios.get(`/posts/${this.$route.params.id}`).then((response) => {
        this.editPostParams = response.data;
      });
    },
    postsUpdate: function () {
      axios
        .patch(`/posts/${this.$route.params.id}`, this.editPostParams)
        .then((response) => {
          this.$router.push(`/posts/${this.$route.params.id}`);
        })
        .catch((errors) => {
          console.log(errors.response.data.errors);
          this.errors = errors.response.data.errors;
        });
    },
    postsDestroy: function () {
      axios.delete(`/posts/${this.$route.params.id}`);
      this.$router.push(`/posts`);
    },
  },
};
</script>
