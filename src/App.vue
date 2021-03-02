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

<style lang="scss">
.progress-bar {
  background-color: #fbc02d;
}

.card {
  padding-bottom: 20px;

  &-header {
    padding: 20px 60px;
  }
  &-body {
    padding-left: 55px;
    padding-right: 55px;
  }

  &-block {
    width: 235px;
    border: 1px solid lightgrey;
    padding: 20px;
    border-radius: 5px !important;
    background-color: #fafafa;
    margin-bottom: 30px;
  }
}

.yellow-text {
  color: #fbc02d;
}

.radio {
  display: inline-block;
  border-radius: 0;
  box-sizing: border-box;
  cursor: pointer;
  color: #000;
  font-weight: 500;
  -webkit-filter: grayscale(100%);
  -moz-filter: grayscale(100%);
  -o-filter: grayscale(100%);
  -ms-filter: grayscale(100%);
  filter: grayscale(100%);

  &:hover {
    box-shadow: 1px 1px 2px 2px rgba(0, 0, 0, 0.1);
  }

  &.selected {
    border: 1px solid #f9a825;
    box-shadow: 0px 8px 16px 0px #eeeeee;
    -webkit-filter: grayscale(0%);
    -moz-filter: grayscale(0%);
    -o-filter: grayscale(0%);
    -ms-filter: grayscale(0%);
    filter: grayscale(0%);
  }
}

.pic,
.pic-0 {
  height: 90px;
  width: 130px;
}

.pic {
  margin-top: 30px;
  margin-bottom: 20px;
}

.btn-blue {
  margin-top: 40px;
  background-color: #1a237e;
  color: #fff;
  width: 28%;

  &:hover {
    background-color: #fbc02d;
  }
}

.btn-secondary {
  margin-top: 40px;
  width: 28%;
}

.long-arrow-right {
  float: right;
  margin-top: 4px;
}

.long-arrow-left {
  float: left;
  margin-top: 4px;
}

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
