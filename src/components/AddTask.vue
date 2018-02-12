<template>
  <div class="addTask root">
    <h1>
      Add New Task
    </h1>
    <label for="prior">Priority: </label>
      <select id="prior" v-model="task.priority">
      <option value=1>High</option>
      <option value=2>Mid</option>
      <option value=3>Low</option>
    </select><br>
    <label for="title">Title: </label>
    <input id="title" type="text" v-model="task.title"><br>
    <label for="date">Date: </label>
    <input id="date" type="date" v-model="task.date"><br>
    <button class="addButton" @click="addTask">ADD TASK</button>
    
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
      task.date = new Date(task.date);
      this.tasks.push(task);
      this.task.title = '';
      this.task.priority = 3;
      this.task.date = new Date()
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
.addTask input {
  width: 50%;
  margin: 10px 0;
}
.addTask .addButton {
  font-size: 21px;
  margin: 10px 0;
  color: #fff;
  padding: 7px 40px;
  background: #777;
  border: none;
}
.addTask .addButton:hover {
  cursor: pointer;
  background: #666;
}
</style>

