<template></template>

<script>
import axios from "axios";

export default {
  data() {
    return { code: "" };
  },
  mounted() {
    axios
      .get(`http://localhost:3000/oauth?code=${this.$route.query.code}`)
      .then((res) => {
        if (res.data.success) {
          localStorage.setItem("cryptedKey", res.data.cryptedKey);
          console.log("ok");

          this.$router.push({
            name: "Profile",
          });
        } else {
          console.log("keq");
          this.$router.push({
            name: "Home",
            params: { reLogin: true },
          });
        }
      })
      .catch((err) => {
        this.$router.push({
          name: "Home",
          params: { reLogin: true },
        });
      });
  },
};
</script>