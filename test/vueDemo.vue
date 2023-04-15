<script>
const count = 0
function increment() {
  this.count++
}
export default {
  name: 'Counter',
  data() {
    return {
      count: 0,
      message: 'Welcome to my counter!',
    }
  },
  methods: {
    increment() {
      this.count++
    },
    test() {
      this.count++
    },
  },
}
</script>

<template>
  <div class="container">
    <h1>{{ message }}</h1>
    <button @click="increment">
      Increment
    </button>
  </div>
</template>

<style scoped>
  .container {
    text-align: center;
  }

  h1 {
    font-size: 4rem;

  }

  button {
    margin-top: 2rem;
    font-size: 2rem;
    padding: 1rem;
  }
</style>
