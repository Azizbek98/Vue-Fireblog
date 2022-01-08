<template>
  <div class="form-wrap">
    <form class="login">
      <p class="login-register">
        Don't have an account?
        <router-link
          class="router-link"
          :to="{ name: 'Register' }"
        ></router-link>
      </p>
      <h2>Login to FireBlogs</h2>
      <div class="inputs">
        <div class="input">
          <input type="text" placeholder="Email" v-model="email" />
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import Email from "../assets/Icons/envelope-regular.svg";
import Password from "../assets/Icons/lock-alt-solid.svg";

export default {
  name: "Login",
  components: {
    Email,
    Password,
  },
};
</script>

<style lang="scss">
/* All styles for Login, Registration and ForgotPassword components will be here */
</style>
