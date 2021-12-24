<template>
  <div class="blog-wrapper">
    <div class="blog-content">
      <div>
        <h2 v-if="post.welcomeScreen">{{ post.title }}</h2>
        <h2 v-else>{{ post.titlePost }}</h2>

        <p v-if="post.welcomeScreen">{{ post.blogPost }}</p>
        <p class="content-preview" v-else>{{ post.blogHTML }}</p>

        <router-link
          class="link link-light"
          v-if="post.welcomeScreen"
          to="#"
        ></router-link>
        <router-link v-else></router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Arrow from "../assets/Icons/arrow-right-light.svg";

export default {
  name: "BlogPost",
  props: ["post"],
  components: {
    Arrow,
  },
};
</script>

<style></style>
