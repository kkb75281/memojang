<template>
  <div>
    <h1>Hello</h1>
    <h2 style="color:white" :style="{ 'background-color': myColor }">{{ name }}</h2>
    <button @click="() => name = 'Baksa'">Change Name</button>
    <br>
    <br>
    <button @click="() => myColor = 'red'">Change Color</button>
    <br>
    <br>
    <input id='text' placeholder="Text" :value="textValue" @input="(e)=>{ textValue = e.target.value; }">
    <p id="hello">{{ name }} says: {{ textValue }}</p>
  </div>
</template>
<script setup>
import { ref } from 'vue';
let name = ref('Gyu');
let myColor = ref('blue');
let textValue = ref('Hello');

</script>

<style scoped>
div {
  max-width: 1000px;
  margin: auto;
  text-align: center;
}
</style>
