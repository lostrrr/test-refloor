import { createStore } from "vuex";
import { getCatalog, getAllGoods } from "@/api/api";

export default createStore({
  state: { categories: [], allGoods: [] },
  getters: {},
  mutations: {
    setCategories(state, categories) {
      state.categories = categories;
    },
    setGoods(state, goods) {
      state.allGoods = goods;
    },
  },
  actions: {
    fetchCategories({ commit }) {
      getCatalog().then((categories) => {
        commit("setCategories", categories);
      });
    },
    fetchAllGoods({ commit }) {
      getAllGoods().then((goods) => {
        commit("setGoods", goods);
      });
    },
  },
  modules: {},
});
