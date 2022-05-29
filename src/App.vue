<template>
  <div id="app">
    <nav class="top-links">
      <router-link to="/">Home</router-link>
      <router-link to="/performance">Team performance chart page</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style>
/* @import url('./assets/styles/main.scss'); */

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

nav {
  text-align: center;
  padding: 16px 0;
}

nav a {
  text-decoration: none;
    color: #0099ff;
    margin-left: 32px;
}

nav a.router-link-exact-active {
  color: black;
  cursor: default;
}

.top-links {
  text-align: center;
  padding: 16px 0;
}
  .top-links a {
    text-decoration: none;
    color: #0099ff;
    margin-left: 32px;
  }
    .top-links a.active {
      color: black;
      cursor: default;
    }

.c-dashboard {
  margin: 8px 16px;
}
  .c-dashboard__header {
    display: flex;
    justify-content: center;
  }

  .c-dashboard__footer {
    display: flex;
    justify-content: center;
    align-items: center;
  }

.c-filters__container {
  margin: 0 0 8px;
  padding: 16px 8px;
  border: 1px solid #dcdee3;
  background-color: #e5e9f1;
}

.c-chart__container {
  height: 350px;
  width: 760px;
}

.c-button {
  height: 40px;
  background-color: #0099ff;
  color: white;
  min-width: 120px;
  padding: 0 16px;
  border-radius: 4px;
}

</style>
