<template>
  <div class="addTask">
    <h1>
      Add New Task
    </h1>
    <label for="title">Title: </label>
    <input id="title" type="text" v-model="task.title"><br>
    <label for="prior">Priority: </label>
    <select id="prior" v-model="task.priority">
      <option value=1>High</option>
      <option value=2>Mid</option>
      <option value=3>Low</option>
    </select><br>
    <label for="date">Date: </label>
    <input id="date" type="date" v-model="task.date">
    <button @click="addTask">Add</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      task: {
        done: false,
        title: "",
        priority: 3,
        date: new Date()
      }
    };
  },
  props: {
    tasks: Array
  },
  methods: {
    addTask: function() {
      let task = Object.assign({}, this.task);
      this.tasks.push(task);
    }
  }
};
</script>

<style>
.addTask {
  margin: 0 auto;
  max-width: 500px;
  border: 1px solid #666;
}
</style>
