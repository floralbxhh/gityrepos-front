<template>
  <div class="navbar">
    <nav class="stroke">
      <ul>
        <li>
          <router-link :to="{ name: 'Profile' }">Profile</router-link>
        </li>
        <li>
          <router-link @click="logout" :to="{ name: 'Home' }"
            >Logout <i class="fas fa-sign-out-alt"></i
          ></router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    logout: function () {
      localStorage.removeItem("cryptedKey");
      localStorage.removeItem("username");
    },
  },
};
</script>

<style>
nav {
  width: 100%;
  margin: 0 auto;
  background: rgb(36, 41, 46);
}
nav ul {
  list-style: none;
  text-align: right;
}
nav ul li {
  display: inline-block;
}
nav ul li a {
  display: block;
  font-size: 0.8rem;
  padding: 0.8rem;
  text-decoration: none;
  color: #aaa;
  font-weight: 800;
  text-transform: uppercase;
  margin: 0 10px;
}

nav ul li a > i {
  margin-left: 5px;
}

nav ul li a,
nav ul li a:after,
nav ul li a:before {
  transition: all 0.5s;
}
nav ul li a:hover {
  color: #fff;
}
</style>