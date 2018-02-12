<template>
  <div class="root">
    <h1>
      Filter by
    </h1>
    <label for="coplited">Complited</label>
    <input id="coplited" type="checkbox" v-model="config.complited"><br>
    <input type="text" v-model="config.searchText" placeholder="Serach...">
    <br>
  </div>
</template>

<script>
export default {
  props: {
    config: Object
  }
}
</script>

