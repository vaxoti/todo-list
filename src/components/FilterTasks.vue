<template>
  <div class="root">
    <h1>
      Hello
    </h1>
    <input type="checkbox" v-model="config.complited">
    <input type="text" v-model="config.searchText">
  </div>
</template>

<script>
export default {
  props: {
    config: Object
  }
}
</script>

