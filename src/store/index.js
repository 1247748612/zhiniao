import Vuex from 'vuex'
import counter from './counter'
import ProjectDetail from './modules/ProjectDetail'
import getters from './getters'

export default new Vuex.Store({
  modules: {
    counter,
    ProjectDetail
  },
  getters
})
