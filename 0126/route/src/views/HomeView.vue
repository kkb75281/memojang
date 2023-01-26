<template>
  <div style="background-color:aqua">
    <h1>HomeVue.vue</h1>
    <myName :myname="name" :lastname="lastname" />
  </div>
</template>
<script setup>
import myName from '../components/myName.vue';
import { name, lastname } from './extraData';
</script>
