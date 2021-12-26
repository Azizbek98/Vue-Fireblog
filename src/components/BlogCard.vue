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
