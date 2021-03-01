<template>
  <div id="app">
    <body class="d-flex flex-column min-vh-100">
      <header><NavBar /></header>
      <content><MainPage /></content>
      <footer class="mt-auto"><Footer /></footer>
    </body>
  </div>
</template>

<script>
import MainPage from './components/MainPage.vue';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

export default {
  name: 'App',
  components: {
    NavBar,
    MainPage,
    Footer,
  },
};
</script>

<style>
#app {
  justify-content: center;
  align-items: center;
  text-align: center;
}
header {
  position: sticky;
  top: 0;
  z-index: 10000;
}
</style>
