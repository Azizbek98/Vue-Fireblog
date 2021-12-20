<template>
  <header>
    <nav class="container">
      <div class="branding">
        <router-link class="logo" :to="{ name: 'Home' }">FireBlogs</router-link>
      </div>
      <div class="nav-links">
        <router-link class="link" to="#">Home</router-link>
        <router-link class="link" to="#">Blogs</router-link>
        <router-link class="link" to="#">Create Post</router-link>
        <router-link class="link" to="#">Login / Register</router-link>
      </div>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
