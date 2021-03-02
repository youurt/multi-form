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
/*  color definitions */
$yellow-color: #fbc02d;
$border-color: lightgrey;
$background-color: #fafafa;
$radio-color: #000;
$box-shadow-color: rgba(0, 0, 0, 0.1);
$selected-border-color: #f9a825;
$selected-border-shadow: #eeeeee;
$btn-bg-color: #1a237e;
$btn-txt-color: #fff;
/*  color definitions */

/*  mains */
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
/*  mains */

/*  contaier-elements */
.progress-bar {
  background-color: $yellow-color;
}

.yellow-text {
  color: $yellow-color;
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
    border: 1px solid $border-color;
    padding: 20px;
    border-radius: 5px !important;
    background-color: $background-color;
    margin-bottom: 30px;
  }
}

.radio {
  display: inline-block;
  border-radius: 0;
  box-sizing: border-box;
  cursor: pointer;
  color: $radio-color;
  font-weight: 500;
  -webkit-filter: grayscale(100%);
  -moz-filter: grayscale(100%);
  -o-filter: grayscale(100%);
  -ms-filter: grayscale(100%);
  filter: grayscale(100%);

  &:hover {
    box-shadow: 1px 1px 2px 2px $box-shadow-color;
  }

  &.selected {
    border: 1px solid $selected-border-color;
    box-shadow: 0px 8px 16px 0px $selected-border-shadow;
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

.btn {
  &-blue {
    margin-top: 40px;
    background-color: $btn-bg-color;
    color: $btn-txt-color;
    width: 28%;

    &:hover {
      background-color: $yellow-color;
    }
  }
  &-secondary {
    margin-top: 40px;
    width: 28%;
  }
}

.long-arrow {
  &-right {
    float: right;
    margin-top: 4px;
  }
  &-left {
    float: left;
    margin-top: 4px;
  }
}
/*  contaier-elements */
</style>
