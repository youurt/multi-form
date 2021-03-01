<template>
  <div>
    <h4 class="heading mb-4 pb-1">Final Page</h4>
    <div class="row justify-content-start px-3">
      <p>
        Form has been submitted Successfully ! <br />You will recieve estimation
        on your email id and contact no.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: { state: Object },
  mounted() {
    alert(JSON.stringify(this.state, null, 4));
  },
};
</script>

<style scoped></style>
