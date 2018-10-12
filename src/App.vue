<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
body {
  background: black;

  color: #ddd;
  font-family: Consolas, Menlo, monospace;
  font-weight: 200;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  width: 80%;
  max-width: 600px;
  margin: 0 auto;
  padding-left: 32px;

  -webkit-text-size-adjust: 100%;
}

a {
  color: inherit;
  text-decoration: inherit;
}

h1,
h2,
h3,
h4,
div,
span,
p,
time,
a,
aside {
  font-size: 14px;
}
</style>
