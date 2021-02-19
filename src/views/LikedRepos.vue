<template>
  <Navbar />
  <div class="liked-wrapper">
    <h1>My liked repos</h1>
    <div class="item-list">
      <div class="item-row" v-for="repo in likedRepos" :key="repo.githubRepoId">
        <a :href="repo.htmlUrl" target="_blank">{{ repo.fullname }}</a>
        <p>{{ repo.description }}</p>
        <p class="author">Created by: {{ repo.createdBy }}</p>
      </div>
    </div>
    <p class="error-msg" v-if="error">
      There was an error. Please try again later.
    </p>
  </div>
</template>

<script>
import axios from "axios";
import Navbar from "../components/Navbar.vue";

export default {
  data() {
    return {
      likedRepos: [],
      error: false,
    };
  },
  components: {
    Navbar,
  },
  mounted() {
    axios
      .get(
        `http://localhost:3000/starred?username=${localStorage.getItem(
          "username"
        )}`
      )
      .then((res) => {
        if (res.data.success) {
          this.likedRepos = res.data.data;
        } else {
          this.error = true;
        }
      })
      .catch((err) => {
        this.error = true;
      });
  },
};
</script>

<style>
.liked-wrapper {
  padding: 2rem 3rem;
  color: rgba(36, 41, 46, 0.8);
}

.liked-wrapper h1 {
  margin: 2rem 0;
}

.item-list {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-evenly;
}

.item-list .item-row {
  margin-bottom: 3rem;
  border-bottom: 2px solid lightskyblue;
}

.item-list .item-row .author {
  text-align: right;
  color: black;
  font-size: 0.8rem;
  margin-top: 1.1rem;
}

.item-row a {
  text-decoration: none;
  display: inline-block;
  margin-bottom: 1.3rem;
  font-size: 1.2rem;
  font-weight: bold;
  color: lightseagreen;
}

.item-row a:visited {
  color: lightseagreen;
}

.item-row a:hover {
  color: lightseagreen;
  opacity: 0.7;
  text-decoration: underline;
}

p.error-msg {
  color: firebrick;
}
</style>