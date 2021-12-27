<template>
  <div class="blog-card">
    <div class="icons">
      <div class="icon">
        <Edit class="icon" />
      </div>
      <div class="icon">
        <Delete class="icon" />
      </div>
    </div>
    <img
      :src="require(`../assets/blogCards/${post.blogCoverPhoto}.jpg`)"
      alt=""
    />
    <div class="info">
      <h4>{{ post.blogTitle }}</h4>
      <h6>Posted on: {{ post.blogDate }}</h6>
      <router-link class="link" to="#"
        >View The Post <Arrow class="arrow"
      /></router-link>
    </div>
  </div>
</template>

<script>
import Arrow from "../assets/Icons/arrow-right-light.svg";
import Edit from "../assets/Icons/edit-regular.svg";
import Delete from "../assets/Icons/trash-regular.svg";

export default {
  name: "BlogCard",
  props: ["post"],
  components: {
    Arrow,
    Edit,
    Delete,
  },
};
</script>

<style></style>
