<script setup>

import axios from "axios";
import {ref} from "vue";

let message = ref("")

function getMessage() {
  // 使用axios发送请求，获取土味情话
  // 设置请求的参数，1.请求的url 2. 请求的方式，3. 请求的参数
  let promise = axios({
    method: "get",
    url: "https://api.uomg.com/api/rand.qinghua?format=json",
    data:{

    }

  })
  promise.then(
      function(response) {
        message.value = response.data.content;
      }
  ).catch(
      () => {

      }
  )



}

</script>

<template>

  <div>
    <h1 v-text="message" ></h1>
    <button @click="getMessage()">change</button>


  </div>

</template>


<style scoped>

</style>
