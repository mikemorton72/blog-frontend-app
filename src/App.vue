<template>
  <div id="app">
    <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="/">Blog App</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link" href="/">Posts</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/posts/new">Create New Post</a>
                </li>

                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    User
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li v-if="!isLoggedIn()"><a class="dropdown-item" href="/login">Login</a></li>
                    <li v-if="!isLoggedIn()"><a class="dropdown-item" href="/signup">Signup</a></li>
                    <li v-if="isLoggedIn()"><a class="dropdown-item" href="/logout">Logout</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      <router-view/>
    </div>
  </div>
</template>

<style></style>

<script>
export default {
  methods: {
    isLoggedIn: function () {
      if (localStorage.jwt) {
        return true;
      } else {
        return false;
      }
    },
    getUserId: function () {
      return localStorage.getItem("user_id");
    },
  },
};
</script>
