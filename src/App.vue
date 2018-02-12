<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <AddTask :tasks="tasks" />
    <FilterTasks :config="filterConfig" />
    <TaskList :tasks="tasks" :config="filterConfig" />
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
      ],
      filterConfig: {
        complited: false,
        dateFrom: new Date(0),
        dateTo: new Date(3000,0),
        searchText: ''
      }
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
.root {
  padding: 20px 10px;
  margin: 10px auto;
  max-width: 500px;
  border: 1px solid #666;
  border-radius: 5px;

}
#app {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
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
select {
  width: 200px;
  padding: 5px 10px;
}
input {
  padding: 5px 10px;
}
a {
  color: #42b983;
}
</style>
