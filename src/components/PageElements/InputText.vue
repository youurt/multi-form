<template>
  <b-form-group id="input-group-1" label="First Name: *" label-for="input-1">
    <b-form-input
      id="input-1"
      name="fname"
      placeholder="Enter First Name"
      required
    ></b-form-input>
    <b-form-invalid-feedback :state="isNameStateValid">
      Your must enter a valid name.
    </b-form-invalid-feedback>
  </b-form-group>
</template>

<script>
export default {};
</script>

<style scoped>
select,
input,
textarea {
  padding: 8px 15px 8px 15px;
  border-radius: 0px;
  margin-bottom: 25px;
  margin-top: 2px;
  width: 100%;
  box-sizing: border-box;
  color: #2c3e50;
  background-color: #eceff1;
  border: 1px solid #ccc;
  font-size: 16px;
  letter-spacing: 1px;
}

select:focus,
input:focus,
textarea:focus {
  -moz-box-shadow: none !important;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
  border: 1px solid #fbc02d !important;
  outline-width: 0;
}
</style>
