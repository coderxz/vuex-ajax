import axios from "axios";
import {REQUESTING,REQ_ERROR,REQ_SUCCESS} from './mutation_type'
export default {
 async search({commit},searchName){
    //请求中
    commit(REQUESTING)
    try{
      const response = await axios.get('https://api.github.com/search/users', {params: {q: searchName}})
      const {data} = response
      const users = data.items.map(item => ({
        usersName: item.login,
        imgurl: item.avatar_url,
        url: item.html_url,
      }))
      commit(REQ_SUCCESS,users)
    }catch(error){
     commit(REQ_ERROR,error.message)
    }
  }
}