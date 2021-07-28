import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Test from '../views/Test.vue';
import Signup from '../views/Signup.vue';
import Login from '../views/Login.vue';
import Logout from '../views/Logout.vue';
import PostsIndex from '../views/PostsIndex.vue';
import PostsCreate from '../views/PostsCreate.vue';
import PostsShow from '../views/PostsShow.vue';
import PostsEdit from '../views/PostsEdit.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/test',
    name: 'Test',
    component: Test
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/logout',
    name: 'Logout',
    component: Logout
  },
  {
    path: '/',
    name: 'Posts',
    component: PostsIndex
  },
  {
    path: '/posts/new',
    name: 'Post Create',
    component: PostsCreate
  },
  {
    path: '/posts/:id',
    name: 'Post Show',
    component: PostsShow
  },
  {
    path: '/posts/:id/edit',
    name: 'Post Edit',
    component: PostsEdit
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
