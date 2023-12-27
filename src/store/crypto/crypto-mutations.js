export const mutations = {
  setCryptosData(state, data) {
    state.cryptosData = data
  },
  setLoading(state, value) {
    state.loading = value
  },
  setSingleCoinData(state, data) {
    state.singleCoinData = data;
  }
}
