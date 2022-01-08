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
export default {
  name: "Login",
};
</script>

<style lang="scss">
/* All styles for Login, Registration and ForgotPassword components will be here */
</style>
