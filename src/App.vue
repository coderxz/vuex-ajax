<template>
  <div class="container">
    <Search/>
    <Main/>
  </div>
</template>

<script>
import Search from "@components/Search";
import Main from "@components/Main";

export default {
  data() {
    return {
      todos: []
    }
  },
  mounted() {

  },
  components: {
    Search,
    Main
  },
  methods: {},
  watch: {}
}
</script>

<style scoped>

</style>