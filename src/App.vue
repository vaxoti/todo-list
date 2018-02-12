<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <AddTask :tasks="tasks" />
    <TaskList :tasks="tasks" />
    {{tasks[0].done}}  {{tasks[0].title}} <input type="number" v-model='tasks[0].priority'>
  </div>
</template>

<script>
import TaskList from "./components/TaskList.vue";
import AddTask from "./components/AddTask.vue"
export default {
  name: "app",
  data() {
    return {
      msg: "Welcome to Your Vue.js App1",
      tasks: [
        {
          done: true,
          title: "Create ToDo",
          priority: 1,
          date: new Date()
        },
        {
          done: false,
          title: "Git commit that",
          priority: 2,
          date: new Date("8.11.2019")
        },
        {
          done: false,
          title: "Got to shop",
          priority: 3,
          date: new Date("3.4.2017")
        },
        {
          done: false,
          title: "lalalalalalala",
          priority: 2,
          date: new Date("10.23.2018")
        },
      ]
    };
  },
  components: {
    AddTask,
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
