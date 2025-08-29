<script setup>

import { ref, computed } from 'vue'
  /*
      v-text 不识别html的文本
      v-html
      命令 必须依赖标签，要在开始标签中使用
      支持字符串模板
      支持常见运算符  age>18 ? yes:no
      支持常见对象的api调用
      支持函数的调用

      {{}} 插值表达式 不依赖标签

   */
  /*
    属性渲染命令
    v-bind 将数据绑定到元素的属性上
   */

  let count = ref(0);

  let imgUrl = "https://www.bilibili.com";

  let msg = "hello world";

  // 绑定事件
  function fun1() {
    alert("Hello World!");
  }

</script>

<template>
  <div>
<!--    <h1 v-text="msg"></h1>-->
<!--    {{msg}}-->
<!--    <img v-bind:src="imgUrl">-->

<!--  事件的绑定函数  -->
    <button @click="fun1()">Hello World!</button> <hr>
<!--  内联事件处理器  -->
    <button @click="count++">+</button>
    {{count}}
  </div>

</template>

<style scoped>

</style>
