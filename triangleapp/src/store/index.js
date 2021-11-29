import { createStore } from 'vuex'

export default createStore({
  state: {
    calcData: {
      seiteA: null,
      seiteB: null,
      seiteC: null,
      winkelA: null,
      winkelB: null,
      winkelC: null
    }
  },
  mutations: {
    updateSeiteA (state, num) {
      state.calcData.seiteA = num.toFixed(2);
    },
    updateSeiteB (state, num) {
      state.calcData.seiteB = num.toFixed(2);
    },
    updateSeiteC (state, num) {
      state.calcData.seiteC = num.toFixed(2);
    },
    updateWinkelA (state, num) {
      state.calcData.winkelA = num.toFixed(2);
    },
    updateWinkelB (state, num) {
      state.calcData.winkelB = num.toFixed(2);
    },
    updateWinkelC (state, num) {
      state.calcData.winkelC = num.toFixed(2);
    },
  },
  actions: {
  },
  modules: {
  }
})