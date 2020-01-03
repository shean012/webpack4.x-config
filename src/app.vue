<template>
  <div class="title">
    {{name}}
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'hey vue 根组件!'
    }
  }
}
</script>

<style scoped>
.title {
  color: orange;
  padding: 10px;
  width: 100%;
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
}
</style>