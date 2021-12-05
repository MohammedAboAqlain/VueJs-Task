<template>
  <div id="app">
    <component :is="selectedComponent" @languageChanged="selectedComponent = $event"></component>
  </div>
</template>

<script>
import Home from './components/Home.vue'
import HomeEn from './components/Home-En.vue'

export default {
  data(){
    return {
      selectedComponent: 'app-home'
    }
  },
  name: 'App',
  components: {
    appHome : Home,
    appHomeEn : HomeEn
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
