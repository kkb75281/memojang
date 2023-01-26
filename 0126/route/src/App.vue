<template>
  <h1>App.vue(최상위)</h1>
  <div style="margin-bottom: 50px;">
    <RouterView />
  </div>

  <!-- <a href="/hello">Go Page</a> -->
  <button @click="goPage">Go Hello</button>
  <RouterLink to="/">Go Home</RouterLink>
</template>

<script setup>
import { useRouter } from 'vue-router';
let router = useRouter();

function goPage() {
  router.push({ name: 'hello' });
}
</script>

<style scoped>
h1 {
  margin: 3vw;
  font-size: 3vw;
}

div {
  width: 100%;
  height: 100%;
  padding: 3vw;
  background-color: blueviolet;
  box-sizing: border-box;
}

button, a {
  font-size: 2vw;
  width: 120px;
}

button {
  margin-right: 3vw;
}
</style>