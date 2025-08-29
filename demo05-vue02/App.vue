<script setup>
// 条件渲染

/*
    单项绑定 v-bind
    双向绑定 v-model 一般用于表单标签 收集表单信息的命令
 */

import { ref, computed, reactive } from 'vue'
  let flag = ref(true);
  let message = ref('zhangsan')


</script>

<template>
  <h1 v-if="flag">hello</h1>
  <button @click="flag = !flag">toggle</button>


  <input type="text" v-model="message" /> <hr>
  {{message}}

</template>

<style scoped>

</style>
