const state = {
  'replacePopup': false,
  'confirmPopup': false
}

const mutations = {
  'CHANGE_REPLACE_POPUP' (state) {
    state.replacePopup = !state.replacePopup
  },
  'CHANGE_CONFIRM_POPUP' (state) {
    state.confirmPopup = !state.confirmPopup
  }
}

const actions = {
  'changeReplacePopup' ({ commit }) {
    commit('CHANGE_REPLACE_POPUP')
  },
  'changeConfirmPopup' ({ commit }) {
    commit('CHANGE_CONFIRM_POPUP')
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
