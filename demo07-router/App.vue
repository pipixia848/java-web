<script setup>

import {useRouter} from "vue-router";
import {ref} from "vue";



</script>

<template>
  <div>
    <router-link to="/showDetail/1/java">声明式路由</router-link>

    <hr>
    <router-view></router-view>
  </div>

</template>

<style scoped>

</style>
