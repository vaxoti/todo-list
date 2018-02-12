<template>
  <div>
    <h1>
    List Of All Tasks
    </h1>
    <ul>
      <li :key="task" v-for="task in tasks"> <input type="checkbox" v-model="task.done"> | <input type="text" v-model="task.title"> | {{priorityView(task)}} | {{shortDate(task)}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    tasks: Array
  },
  methods: {
    shortDate: task => {
      return `${task.date.getFullYear()}-${task.date.getMonth() +
        1}-${task.date.getDate()}`;
    },
    priorityView: task => {
      let priority = parseInt(task.priority);
      switch (priority) {
        case 1 : return 'Hight';
        case 2 : return 'Mid';
        case 3 : return 'Low';
        default: return 'Error';
      }
    }
  }
};
</script>

<style>
ul {
  margin: 0 auto;
  text-align: left;
}
</style>
