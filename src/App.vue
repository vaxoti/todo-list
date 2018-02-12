<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
   
    <TaskList :tasks="tasks" />
    {{tasks[0].title}}
  </div>
</template>

<script>
import TaskList from "./components/TaskList.vue";

export default {
  name: "app",
  data() {
    return {
      msg: "Welcome to Your Vue.js App1",
      tasks: [
        { done: true,
          title: 'Create ToDo',
          priority: 1,
          date: new Date() },
        { done: false,
          title: 'Create ToDo222',
          priority: 2,
          date: new Date('12.01.2015')}
        ]
    };
  },
  components: {
    TaskList
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

a {
  color: #42b983;
}
</style>
