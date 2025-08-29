<script setup>

import {useRouter} from "vue-router";
import {ref} from "vue";

const router = useRouter()
let myPath = ref("")

function showAdd() {
  router.push('/list');
}

function GoPath() {
  router.push(myPath.value);
}

</script>

<template>
  <div>
<!--  声明式路由  -->
    <router-link to="/home">home</router-link> <br>
    <router-link to="/list">list</router-link> <br>
    <router-link to="/add">add</router-link> <br>

<!--  编程式路由  -->
    <button @click="GoPath()">go</button><input type="text" v-model="myPath">

    <hr>
    <router-view></router-view>
  </div>

</template>

<style scoped>

</style>
