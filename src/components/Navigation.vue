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

<style lang="scss" scoped>
header {
  background-color: #fff;
  padding: 0 25px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  z-index: 99;

  .link {
    font-weight: 500;
    padding: 0 8px;
    transition: 0.3s color ease;

    &:hover {
      color: #1eb8b8;
    }
  }

  nav {
    display: flex;
    padding: 25px 0;

    .branding {
      display: flex;
      align-items: center;

      .logo {
        font-weight: 600;
        font-size: 24px;
        color: #000;
        text-decoration: none;
      }
    }
  }
}
</style>
