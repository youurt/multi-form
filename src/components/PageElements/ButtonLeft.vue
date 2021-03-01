<template>
  <b-button variant="secondary" class="btn prev mx-2">
    <span
      ><b-icon
        icon="arrow-left"
        scale="1"
        variant="light"
        class="fa-long-arrow-left"/></span
    >Back
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
