<template>
  <div>
    <b-progress
      class="mb-3"
      :value="value * currentPage"
      :max="max"
      show-progress
      animated
    ></b-progress>
  </div>
</template>

<script>
export default {
  props: { currentPage: Number },
  data() {
    return {
      value: 20,
      max: 100,
    };
  },

  // updated() {
  //   this.$nextTick(function() {
  //     this.value *= this.currentPage;
  //   });
  // },
};
</script>

<style></style>
