<script>
export default {
  props: {
    posts1: {
      type: Object,
      required: true,
    }
  },
  methods: {
    delPost() {
      this.$emit('delete', this.posts1);
    }
  }
}
</script>

<template>
  <div class="post">
    <div><strong>Название: </strong>{{ posts1.title }}</div>
    <div><strong>Описание: </strong>{{ posts1.body }}</div>
    <div class="btn__item">
      <button @click="delPost">
        Удалить
      </button>
    </div>
  </div>

</template>

<style scoped>
.post {
  padding: 15px;
  margin-top: 15px;
  border-radius: 10px;
  background-color: gray;
  font-family: cursive;

  div {
    padding: 5px;
  }

}

.btn__item button {
  padding: 10px;
  border-radius: 5px;
  background-color: #939c9c;
  border: none;
  font-family: cursive;
}
</style>
