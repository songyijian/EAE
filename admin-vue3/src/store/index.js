/*
 * @Description: store
 * @Author: yijian
 * @Version: 0.1.0
 * @Date: 2021-12-01 14:52:13
 */
import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      ajaxLoading: false,
      userInfo: {},
      userPermissions: [],
      userRoles: []
    }
  },
  mutations: {
    SET_AJAX_LODING(state, flag) {
      state.ajaxLoading = flag
    },
    SET_USER_INFO(state, data) {
      state.userInfo = data
    },
    SET_USER_PERMISSIONS(state, data) {
      state.userPermissions = data
    },
    SET_USER_ROLES(state, data) {
      state.userRoles = data
    }
  }
})

export default store