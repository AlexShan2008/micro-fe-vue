<template>
  <div id="app">
    <h2>Vue Demo</h2>
    <p>Use qiankun and Vue.js as subApp</p>
    <img alt="Vue logo" src="./assets/logo.png">

    <div>
      <router-link to="/">Home</router-link>
      <a-divider type="vertical" />
      <router-link to="/about">About</router-link>
    </div>

    <router-view></router-view>

    <div>
      <h3>Data from Parent App: <i>{{_BASE_STORE.title}}</i></h3>
    </div>

  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
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
}
</style>
