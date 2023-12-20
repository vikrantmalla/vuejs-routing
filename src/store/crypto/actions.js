import axios from 'axios';


export const actions = {
  async fetchCryptosData({ commit }) {
    try {
      const response = await axios.get('https://api.coincap.io/v2/assets')
      commit('setCryptosData', response.data)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }
}
