<template>
  <div class="root">
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
      <tr :key="task" 
          v-if="(!task.done || config.complited) && (task.date >= config.dateFrom && task.date <= config.dateTo)"
          v-for="task in orderBy(filterBy(tasks, config.searchText), orderText, 'date', orderValue) "
          :class="{'doned': task.done} ">
        <td><input type="checkbox" v-model="task.done"></td>
        <td>{{task.title}} </td>
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
      orderValue: 1
    }
  },
  props: {
    tasks: Array,
    config: Object
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
          return "Hight";
        case 2:
          return "Mid";
        case 3:
          return "Low";
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
  border: 1px solid #aaa;
  border-radius: 20px;
  margin: 0 auto;
  border-collapse: collapse;
  color: #000;
}
table th:hover{
  cursor: pointer;
}
table td, table th {
  padding: 5px 10px;
}
table tr:nth-child(odd) {
  color: #000;
  background: #aaa;
}
table tr:first-of-type {
  background: #666;
  color: #fff;
}
ul {
  margin: 0 auto;
  text-align: left;
}
table tr.doned {
color: #666;
  text-decoration: line-through;
}
</style>
