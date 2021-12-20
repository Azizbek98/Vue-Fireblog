<template>
  <footer>
    <div class="container">
      <div class="left">
        <div class="col-1">
          <router-link :to="{ name: 'Home' }"
            ><logoIcon class="logo-icon"
          /></router-link>
          <router-link class="logo" :to="{ name: 'Home' }"
            >FireBlogs</router-link
          >
          <!-- Socials -->
          <li>
            <a href="#"><youtube class="svg-icon" /></a>
          </li>
          <li>
            <a href="#"><twitter class="svg-icon" /></a>
          </li>
          <li>
            <a href="#"><instagram class="svg-icon" /></a>
          </li>
          <li>
            <a href="#"><linkedin class="svg-icon" /></a>
          </li>
        </div>
        <div class="col-2">
          <ul>
            <router-link class="link" :to="{ name: 'Home' }">Home</router-link>
            <router-link class="link" :to="{ name: 'Blogs' }"
              >Blogs</router-link
            >
            <router-link v-if="user" class="link" :to="{ name: 'Newpost' }"
              >Create Post</router-link
            >
            <router-link v-if="!user" class="link" :to="{ name: 'Login' }"
              >Login / Register</router-link
            >
          </ul>
        </div>
      </div>
      <div class="right">
        <p>Copyright 2021. All Rights Reserved</p>
      </div>
    </div>
  </footer>
</template>

<script>
import youtube from "../assets/Icons/youtube-brands.svg";
import twitter from "../assets/Icons/twitter-brands.svg";
import instagram from "../assets/Icons/instagram-brands.svg";
import linkedin from "../assets/Icons/linkedin-brands.svg";

export default {
  name: "Footer",
  components: {
    youtube,
    twitter,
    instagram,
    linkedin,
  },
};
</script>

<style lang="scss" scoped></style>
