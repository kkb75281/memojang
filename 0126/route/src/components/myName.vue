<template>
    <div style="padding:3vw; margin-top: 3vw; background-color:azure; color:blueviolet">
        <p>My Name component</p>
        <h1>{{ p.myname }}</h1>
        <h2>{{ p.lastname }}</h2>
    </div>
</template>
<script setup>

let p = defineProps([
    'myname',
    'lastname'
]);
</script>

<style scoped>
h1, h2 {
    display: inline-block;
}
h1 {
    margin-right: 0.5vw;
}
p {
    font-size: 2vw;
}
</style>