<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input type="text" placeholder="enter the name you search" v-model="searchName"/>
      <button @click="search">Search</button>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      searchName: '',
    }
  },
  mounted() {
  },
  methods: {
    search() {
      const {searchName} =this
      if (searchName.trim()){
        this.$store.dispatch('search',searchName)
      }else{
        alert('请正确输入!')
      }
      this.searchName = ''
    }
  }
}
</script>

<style scoped>

</style>