import { createStore } from 'vuex'
import {favoriteModule} from "@/store/favoriteModule.js";

export default createStore({
  modules: {
    favoriteModule
  }
})
