import { state } from './state'
import { actions } from '../crypto/actions'
import { getters } from '../crypto/getters'
import { mutations } from '../crypto/mutations'

const crypto = {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}

export default crypto
