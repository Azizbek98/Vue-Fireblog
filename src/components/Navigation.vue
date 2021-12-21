<template>
  <header>
    <nav class="container">
      <div class="branding">
        <router-link :to="{ name: 'Home' }"
          ><logoIcon class="logo-icon"
        /></router-link>
        <router-link class="logo" :to="{ name: 'Home' }">FireBlogs</router-link>
      </div>
      <div class="nav-links" v-show="!mobile">
        <ul>
          <router-link class="link" to="#">Home</router-link>
          <router-link class="link" to="#">Blogs</router-link>
          <router-link class="link" to="#">Create Post</router-link>
          <router-link class="link" to="#">Login / Register</router-link>
        </ul>
      </div>
    </nav>
    <menuIcon @click="toggleMobileNav" v-show="mobile" class="menu-icon" />
    <transition name="mobile-nav">
      <ul class="mobile-nav" v-show="mobileNav">
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
import logoIcon from "../assets/firebase.svg";

export default {
  name: "Navigation",
  components: {
    menuIcon,
    logoIcon,
  },
  // Data function for returning models
  data() {
    return {
      mobile: null,
      mobileNav: null,
      windowWidth: null,
    };
  },
  // Lifecycle hooks
  created() {
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
  },

  // Functions
  methods: {
    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth < 750) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
      return;
    },

    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },
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

      .logo-icon {
        height: 35px;
        width: 28px;
        padding-right: 5px;
      }
    }

    .nav-links {
      position: relative;
      display: flex;
      flex: 1;
      align-items: center;
      justify-content: flex-end;

      ul {
        margin-right: 32px;

        .link {
          margin-right: 32px;

          &:last-child {
            margin-right: 0;
          }
        }
      }
    }
  }

  .menu-icon {
    position: absolute;
    height: 25px;
    width: auto;
    top: 32px;
    right: 25px;
    cursor: pointer;
  }

  .mobile-nav {
    padding: 20px;
    width: 70%;
    max-width: 250px;
    display: flex;
    flex-direction: column;
    position: fixed;
    height: 100%;
    background-color: #303030;
    top: 0;
    left: 0;
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
      rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;

    .link {
      padding: 15px 0;
      color: #fff;

      &:hover {
        color: #1eb8b8;
      }
    }
  }

  // Special classes of transitions in vuejs
  .mobile-nav-enter-active,
  .mobile-nav-leave-active {
    transition: all 1s ease;
  }

  .mobile-nav-enter {
    transform: translateX(-250px);
  }

  .mobile-nav-enter-to {
    transform: translateX(0);
  }

  .mobile-nav-leave-to {
    transform: translateX(-250px);
  }
}
</style>
