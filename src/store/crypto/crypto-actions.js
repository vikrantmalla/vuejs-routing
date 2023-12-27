import axios from 'axios'

export const actions = {
  async fetchCryptosData({ commit }) {
    try {
      commit('setLoading', true)
      const response = await axios.get('https://api.coincap.io/v2/assets')
      commit('setCryptosData', response.data)
      setTimeout(() => {
        commit('setLoading', false)
      }, 2000)
    } catch (error) {
      console.error('Error fetching data:', error)
      commit('setLoading', false)
    }
  },

  async getSingleCoinData({ commit }, id) {
    try {
      commit('setLoading', true)
      const response = await axios.get(`https://api.coincap.io/v2/assets/${id}`)
      commit('setSingleCoinData', response.data)
      setTimeout(() => {
        commit('setLoading', false)
      }, 2000)
    } catch (error) {
      console.error('Error fetching data:', error)
      commit('setLoading', false)
    }
  }

}
