import {REQ_SUCCESS, REQ_ERROR, REQUESTING} from './mutation_type'

export default {
  //1.搜索中
  [REQUESTING](state) {
    state.firstView = false
    state.isLoading = true
  },
  //2.搜索成功
  [REQ_SUCCESS](state, users) {
    state.isLoading = false
    state.users = users
  },
  //3.搜索失败
  [REQ_ERROR](state, errormessage) {
    state.isLoading = false
    state.isError = errormessage
  }
}