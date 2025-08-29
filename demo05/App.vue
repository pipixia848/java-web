<script setup>
  import {ref, reactive} from 'vue'



      // 定义一些要展示到html上的一些数据 变量/对象
      let counter = ref(1);

      // 绑定按键
      function counterIncr() {
        counter.value++;
      }

      function counterDecr() {
        counter.value--;
      }




</script>

<template>
  <div>
    <button @click="counterIncr()">+</button>
    <span v-text="counter"></span>
    <button @click="counterDecr()">-</button>

  </div>
</template>

<style scoped>

</style>
