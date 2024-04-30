<script>
import CustomButton from "@/components/UI/CustomButton.vue";
import {favoriteModule} from "@/store/favoriteModule.js";

export default {
  components: {CustomButton},
  props: {
    posts1: {
      type: Object,
      required: true,
    }
  },
  data() {
    return {
      isLike: false
    }
  },
  methods: {
    delPost() {
      this.$emit('delete', this.posts1)
    },
    addToFavorite() {
      this.isLike = !this.isLike
      this.$store.dispatch('addToFavorite', this.posts1)
    }
  }
}
</script>

<template>
  <div class="post">
    <div><strong>Название: </strong>{{ posts1.title }}</div>
    <div><strong>Описание: </strong>{{ posts1.body }}</div>
    <custom-button @click="delPost">
      Удалить
    </custom-button>
      <div @click="addToFavorite" class="img-item">
        <img v-if="isLike" src="../../assets/img/redheart.svg" alt="like">
        <img v-else src="@/assets/img/blackHeart.svg" alt="not like">
      </div>
  </div>

</template>

<style scoped lang="scss">
.post {
  padding: 15px;
  border: 2px solid darkgreen;
  margin-top: 15px;
  border-radius: 10px;
}

.btn__item button {
  padding: 10px;
  border: 2px solid black;
  border-radius: 5px;
}

.img-item {
  display: flex;
  justify-content: flex-end;
}
</style>
