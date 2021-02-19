<template>
  <button class="login-button" @click="redirectToLogin">
    <img src="../assets/github-logo.png" alt="github-logo" />
    <span>Login with GitHub</span>
  </button>
</template>

<script>
export default {
  methods: {
    redirectToLogin() {
      window.location.href = `https://github.com/login/oauth/authorize?client_id=b761984e00c46b056530&scope=user&allow_signup=false`;
    },
  },
};
</script>


<style>
.login-button {
  background-color: rgb(36, 41, 46);
  color: #fff;
  border-radius: 5px;
  padding: 5px 10px;
}

.login-button span,
img {
  display: inline-block;
  vertical-align: middle;
}

.login-button span {
  text-transform: uppercase;
  margin-left: 5px;
}

.login-button:hover,
.login-button:focus {
  background-color: rgba(36, 41, 46, 0.9);
  box-shadow: 0 0.5em 0.5em -0.4em lightslategray;
}
</style>