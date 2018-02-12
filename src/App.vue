<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <AddTask :tasks="tasks" />
    <FilterTasks />
    <TaskList :tasks="tasks" />
  </div>
</template>

<script>
import TaskList from "./components/TaskList.vue";
import AddTask from "./components/AddTask.vue";
import FilterTasks from "./components/FilterTasks.vue"
export default {
  name: "app",
  data() {
    return {
      msg: "ToDo list on Vue",
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
    TaskList,
    FilterTasks
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
