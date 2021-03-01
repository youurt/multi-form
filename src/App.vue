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
.progress-bar {
  background-color: #fbc02d;
}

.count {
  width: 350px;
}

.fit-image {
  width: 100%;
  object-fit: cover;
}

.card {
  padding-bottom: 20px;
}

.card-header {
  padding: 20px 60px;
}

.card-body {
  display: none;
  padding-left: 55px;
  padding-right: 55px;
}

.card-body.show {
  display: block;
}

.yellow-text {
  color: #fbc02d;
}

.card-block {
  width: 235px;
  border: 1px solid lightgrey;
  padding: 20px;
  border-radius: 5px !important;
  background-color: #fafafa;
  margin-bottom: 30px;
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
}

.radio:hover {
  box-shadow: 1px 1px 2px 2px rgba(0, 0, 0, 0.1);
}

.radio.selected {
  border: 1px solid #f9a825;
  box-shadow: 0px 8px 16px 0px #eeeeee;
  -webkit-filter: grayscale(0%);
  -moz-filter: grayscale(0%);
  -o-filter: grayscale(0%);
  -ms-filter: grayscale(0%);
  filter: grayscale(0%);
}

.fa-check {
  color: #fbc02d;
  border-radius: 50%;
  border: 2px solid #fbc02d;
  padding: 5px;
}

.fa-circle {
  color: #fafafa;
  border-radius: 50%;
  border: 2px solid #bdbdbd;
  padding: 5px 6.155px;
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
}

.btn-blue:hover {
  background-color: #fbc02d;
}

.btn-secondary {
  margin-top: 40px;
  width: 28%;
}

.fa-long-arrow-right {
  float: right;
  margin-top: 4px;
}

.fa-long-arrow-left {
  float: left;
  margin-top: 4px;
}

button:focus {
  -moz-box-shadow: none !important;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
  outline-width: 0;
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
