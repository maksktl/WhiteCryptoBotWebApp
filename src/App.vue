<template>
  <ConfigurationForm/>
</template>

<script>
import ConfigurationForm from './components/ConfigurationForm.vue'

export default {
  name: 'App',
  components: {
    ConfigurationForm
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--tg-theme-text-color);
  background: var(--tg-theme-bg-color);
  margin-top: 60px;
}
</style>
