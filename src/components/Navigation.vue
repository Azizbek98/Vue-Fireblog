<template>
  <header>
    <nav class="container">
      <div class="branding">
        <router-link class="logo" :to="{ name: 'Home' }">FireBlogs</router-link>
      </div>
      <div class="nav-links">
        <ul>
          <router-link class="link" to="#">Home</router-link>
          <router-link class="link" to="#">Blogs</router-link>
          <router-link class="link" to="#">Create Post</router-link>
          <router-link class="link" to="#">Login / Register</router-link>
        </ul>
      </div>
    </nav>
    <menuIcon />
    <transition>
      <ul>
        <router-link class="link" to="#">Home</router-link>
        <router-link class="link" to="#">Blogs</router-link>
        <router-link class="link" to="#">Create Post</router-link>
        <router-link class="link" to="#">Login / Register</router-link>
      </ul>
    </transition>
  </header>
</template>

<script>
import menuIcon from "../assets/Icons/bars-regular.svg";

export default {
  name: "Navigation",
  components: {
    menuIcon,
  },
};
</script>

<style lang="scss" scoped></style>
