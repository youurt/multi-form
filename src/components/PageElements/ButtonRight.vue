<template>
  <b-button variant="blue" class="btn next mx-2" id="next2">
    Next<span
      ><b-icon
        icon="arrow-right"
        scale="1"
        variant="light"
        class="fa-long-arrow-right"
    /></span>
  </b-button>
</template>

<script>
export default {};
</script>

<style scoped>
.btn-blue {
  margin-top: 40px;
  background-color: #1a237e;
  color: #fff;
  width: 28%;
}

.btn-blue:hover {
  background-color: #000;
}

.btn-secondary {
  margin-top: 40px;
  width: 28%;
}

button:focus {
  -moz-box-shadow: none !important;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
  outline-width: 0;
}

.fa-long-arrow-right {
  float: right;
  margin-top: 4px;
}

.fa-long-arrow-left {
  float: left;
  margin-top: 4px;
}
</style>
