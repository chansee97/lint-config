<script>
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

<style scoped lang="scss">
  .container {
    text-align: center;
  }

  h1 {
    font-size: 4rem;

  }

  button {
    padding: 1rem;
    margin-top: 2rem;
    font-size: 2rem;
  }
</style>
