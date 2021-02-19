<template>
  <Navbar />
  <div class="card-wrapper">
    <Spinner v-if="!success"></Spinner>
    <div v-if="success" class="user-ca">
      <div
        class="user-avatar"
        :style="{ backgroundImage: 'url(' + userdata.avatarUrl + ')' }"
      ></div>
      <div class="user-details">
        <h1>{{ userdata.fullname }}</h1>
        <div class="row">
          <p>
            <span class="row-title">Username:</span>
            <span class="row-value">{{ userdata.username }}</span>
          </p>
        </div>
        <div class="row">
          <p>
            <span class="row-title">Email:</span
            ><span class="row-value">{{ userdata.email }}</span>
          </p>
        </div>
      </div>
      <div class="btn-wrapper">
        <button class="repos-button" @click="ctoReposBtn">
          My starred repos
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Spinner from "../components/Spinner.vue";
import Navbar from "../components/Navbar.vue";

export default {
  name: "Profile",
  data() {
    return {
      success: false,
      userdata: null,
    };
  },
  components: {
    Spinner,
    Navbar,
  },
  methods: {
    ctoReposBtn: function () {
      this.$router.push({ name: "LikedRepos" });
    },
  },
  mounted() {
    axios
      .put("http://localhost:3000/oauth/authenticate", {
        cryptedKey: localStorage.getItem("cryptedKey"),
      })
      .then((res) => {
        this.userdata = res.data.userdata;
        this.success = true;
        localStorage.setItem("username", res.data.userdata.username);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style>
.card-wrapper {
  height: 100vh;
  display: grid;
  place-items: center;
  background-color: whitesmoke;
}

.user-ca {
  height: 600px;
  width: 600px;
  border-radius: 10px;
  background-color: white;
  box-shadow: 1rem 1rem 1rem -0.75rem rgba(0, 0, 0, 0.125);
  text-align: center;
  position: relative;
}

.user-ca .user-avatar {
  box-sizing: content-box;
  height: 110px;
  width: 110px;
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  margin: -50px auto 0 auto;
  left: 50%;
  border: 5px solid white;
}

.user-ca .user-details {
  margin-top: 1rem;
  text-align: center;
}

.user-ca .user-details h1 {
  color: rgba(36, 41, 46, 0.8);
}

.row {
  text-align: left;
  font-size: 1.2rem;
  padding: 2.5rem 5rem;
}

.row .row-title {
  display: inline-block;
  width: 30%;
}

.row .row-value {
  display: inline-block;
  margin-left: 2rem;
}

.btn-wrapper {
  position: absolute;
  width: 100%;
  bottom: 0;
  padding: 2rem;
}

.repos-button {
  background-color: rgb(36, 41, 46);
  color: #fff;
  border-radius: 5px;
  padding: 10px 15px;
  text-transform: uppercase;
}

.repos-button:hover,
.repos-button:focus {
  background-color: rgba(36, 41, 46, 0.9);
  box-shadow: 0 0.5em 0.5em -0.4em lightslategray;
}
</style>