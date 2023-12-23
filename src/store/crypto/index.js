import { state } from './crypto-state'
import { actions } from './crypto-actions'
import { getters } from './crypto-getters'
import { mutations } from './crypto-mutations'

const crypto = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}

export default crypto
