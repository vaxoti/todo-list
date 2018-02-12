<template>
  <div>
    <h1>
    List Of All Tasks
    </h1>
    <table >
      <tr>
        <th @click="sortList">Done</th>
        <th @click="sortList">Title</th>
        <th @click="sortList">Priority</th>
        <th @click="sortList">Date</th>
        </tr>
      <tr :key="task" v-for="task in orderBy(tasks, orderText, orderValue)">
        <td><input type="checkbox" v-model="task.done"></td>
        <td><input type="text" v-model="task.title"> </td>
        <td>{{priorityView(task)}}</td>
        <td>{{shortDate(task)}}</td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      orderText: 'priority',
      orderValue: -1
    }
  },
  props: {
    tasks: Array
  },
  methods: {
    shortDate: task => {
      return `${task.date.getDate()}-${task.date.getMonth() +
        1}-${task.date.getFullYear()}`;
    },
    priorityView: task => {
      let priority = parseInt(task.priority);
      switch (priority) {
        case 1:
          return "Low";
        case 2:
          return "Mid";
        case 3:
          return "Hight";
        default:
          return "Error";
      }
    },
    sortList: function (e) {
      let target = e.target.innerHTML
      this.orderText = target.toLowerCase();
      this.orderValue = -this.orderValue;
    }
  }
};
</script>

<style>
table {
  margin: 0 auto;
  border-collapse: collapse;
  color: #000;
}
table th:hover{
  cursor: pointer;
}
table td, table th {
  padding: 4px 10px;
}
table tr:nth-child(odd) {
  color: #000;
  background: #aaa;
}
ul {
  margin: 0 auto;
  text-align: left;
}
</style>
