<template>
  <div class="reset-password">
    <Modal v-if="modalActive" v-on:close-modal="closeModal" />
    <div class="form-wrap">
      <form class="reset">
        <h2>Reset Password</h2>
        <p>Forgot your password? Enter your email to reset it.</p>
        <div class="inputs">
          <div class="input">
            <input type="text" placeholder="Email" v-model="email" />
            <Email class="icon" />
          </div>
        </div>
        <button>Reset</button>
        <div class="angle"></div>
      </form>
      <div class="background"></div>
    </div>
  </div>
</template>

<script>
import Modal from "../components/Modal";
import Email from "../assets/Icons/envelope-regular.svg";

export default {
  name: "ForgotPassword",
  components: {
    Modal,
    Email,
  },
  data() {
    return {
      email: null,
      modalActive: true,
      modalMessage: "",
    };
  },
  methods: {
    closeModal() {
      this.modalActive = !this.modalActive;
      this.email = "";
    },
  },
};
</script>

<style lang="scss" scoped>
.reset-password {
  position: relative;

  .form-wrap {
    h2 {
      margin-bottom: 8px;
    }
    p {
      text-align: center;
      margin-bottom: 32px;
    }
  }
}
</style>
