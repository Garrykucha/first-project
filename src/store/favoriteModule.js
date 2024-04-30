export const favoriteModule = {
  state: () => ({
    favorites: []
  }),
  mutations: {
    ADD_TO_FAVORITE: (state, payload) => {
      state.favorites.push(payload);
    },
  },
  actions: {
    addToFavorite({ commit }, payload) {
      commit('ADD_TO_FAVORITE', payload);
    }
  }
}
