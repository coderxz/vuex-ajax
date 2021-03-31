<template>
  <div>
    <h2 v-if="firstView">
      请输入用户名进行搜索
    </h2>
    <h2 v-else-if="isLoading">
      loading...
    </h2>
    <h2 v-else-if="isError">
      {{ isError }}
    </h2>
    <div class="row" v-else>
      <div class="card" v-for="user in users" :key="user.username">
        <a :href="user.url" target="_blank">
          <img :src="user.imgurl" style='width: 100px'/>
        </a>
        <p class="card-text">{{ user.usersName }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  computed:{
    ...mapState(['firstView','isLoading','users','isError'])
  },
  mounted(){
    console.log(this.$store)
  }
}
</script>

<style scoped>
.card {
  float: left;
  width: 33.333%;
  padding: .75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: .75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>