<template>
  <div class="container">
    <div class="form">
      <div class="welcome">
        <h1>Welome to git<span class="y-letter">Y</span>repos</h1>
        <p>Here you will find your github profile info and liked repos...</p>
        <p v-bind:class="reLogin ? 'relogin' : 'hide-relogin'">
          An error was occurred, please login again!
        </p>
        <p v-bind:class="isNotLoggedIn ? 'relogin' : 'hide-relogin'">
          Please login to continue!
        </p>
      </div>
      <LoginButton />
    </div>
  </div>
</template>

<script>
import LoginButton from "../components/LoginButton.vue";

export default {
  name: "Home",
  props: {
    reLogin: {
      type: Boolean,
      required: false,
    },
    isNotLoggedIn: {
      type: Boolean,
      required: false,
    },
  },
  components: {
    LoginButton,
  },
};
</script>

<style>
.container {
  height: 100vh;
}

.container,
.form {
  display: grid;
  place-items: center;
}

.form {
  min-height: 300px;
  border: 2px solid lightgray;
  padding: 50px;
  box-shadow: 0 1rem 1rem -0.75rem rgba(0, 0, 0, 0.125);
  border-radius: 0.5em;
  text-align: center;
}

.form p {
  margin: 50px 0;
}

p.relogin {
  display: block;
  color: firebrick;
}

p.hide-relogin {
  display: none;
}

.welcome {
  margin-bottom: 50px;
}

.y-letter {
  color: rgb(27, 151, 247);
}
</style>