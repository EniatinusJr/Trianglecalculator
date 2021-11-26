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
      state.calcData.seiteA = num;
    },
    updateSeiteB (state, num) {
      state.calcData.seiteA = num;
    },
    updateSeiteC (state, num) {
      state.calcData.seiteC = num;
    },
    updateWinkelA (state, num) {
      state.calcData.winkelA = num;
    },
    updateWinkelB (state, num) {
      state.calcData.winkelB = num;
    },
    updateWinkelC (state, num) {
      state.calcData.winkelC = num;
    },
  },
  actions: {
  },
  modules: {
  }
})