<template>
  <div class="home">
    <BlogPost />
  </div>
</template>

<script>
import BlogPost from "../components/BlogPost";

export default {
  name: "Home",
  components: {
    BlogPost,
  },
  data() {
    return {
      welcomeScreen: {
        title: "Welcome !",
        blogPost:
          "Weekly blog articles with all things programming including HTML, CSS, JS and more. Register today to never miss a post.",
        welcomeScreen: true,
        photo: "coding",
      },
      sampleBlogPost: [
        {
          title: "This is a Filter Title !",
          blogHTML: "This is blog post title",
          blogCoverPhoto: "beautiful-stories",
        },
        {
          title: "This is a Filter Title !",
          blogHTML: "This is blog post title",
          blogCoverPhoto: "beautiful-stories",
        },
      ],
    };
  },
};
</script>
