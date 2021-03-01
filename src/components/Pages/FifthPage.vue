<template>
  <div>
    <h4 class="heading mb-4 pb-1">Fifth Page</h4>
    <div>
      <p>{{ state.fname }}</p>
    </div>
    <div class="row justify-content-center">
      <button class="btn btn-secondary prev mx-2" @click="prevButton">
        <span
          ><b-icon
            icon="arrow-left"
            scale="1"
            variant="light"
            class="fa-long-arrow-left"/></span
        >Back
      </button>
      <button class="btn btn-blue next mx-2" id="next3" @click="nextButton">
        Apply<span
          ><b-icon
            icon="check2-all"
            scale="1"
            variant="light"
            class="fa-long-arrow-right"
        /></span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  finalData: {},
  props: { state: Object },
  data: () => {
    return {};
  },
  methods: {
    nextButton() {
      this.finalData = this.state;
      delete this.finalData.next;
      this.$emit('form-service4', this.finalData);
    },
    prevButton() {
      this.$emit('form-service4', { next: 4 });
      this.finalData = { ...this.finalData, next: 4 };
      this.$emit('form-service4', this.finalData);
    },
  },
  mounted() {
    console.log(this.state, 'p5');
    this.finalData = { ...this.state };

    // console.log({ ...this.state });
    // this.form = { ...this.state, next: 5 };
  },
};
</script>

<style scoped></style>
