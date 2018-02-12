<template>
  <div>
    <h1>
    List Of All Tasks
    </h1>
    <ul>
      <li :key="task" v-for="task in tasks"> <input type="checkbox" v-model="task.done"> | <input type="text" v-model="task.title"> | {{task.priority}} | {{task.date.getFullYear()}}-{{task.date.getMonth()+1}}-{{task.date.getDate()}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    tasks: Array
  }
};
</script>

<style>
ul {
  margin: 0 auto;
  text-align: left
}
</style>
