HelloWorld.vue<script setup>

  import {useRoute} from "vue-router";
  import {ref} from "vue";

  let languageID = ref(0);
  let languageName = ref("");

  let route = useRoute();
  languageID = route.params.id;
  languageName = route.params.language;

</script>



<template>
  <h1>showDetail 路由传参</h1>
  <h3>{{languageID+languageName}}</h3>

</template>

<style scoped>

</style>
