<template>
  <div style="background-color:burlywood">
    <h1>Hello.vue</h1>
    <input :value="name" @input="e => name = e.target.value" />
    <br>
    <input v-model="lastname" />
    <br>
    <DisplayName :myname="name" :lastname="lastname" />
  </div>
</template>

<script setup>
import DisplayName from '../components/myName.vue';
import { name, lastname } from './extraData';
</script>

<style scoped>
h1 {
  font-size: 3vw;
}

input {
  width: 30%;
  height: 3vw;
  margin: 1vw 0;
  font-size: 2.5vw;
}

input:last-child {
  margin-bottom: 0;
}
</style>