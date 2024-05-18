import {createStore} from "vuex";
import {postModule} from "@/store/postModule.js";

const store = createStore({
  modules: {
    post: postModule
  }
})

export default store;