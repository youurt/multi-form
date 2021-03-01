<template>
  <div>
    <h4 class="heading mb-4 pb-1">{{ pagesMapping.summaryPage.title }}</h4>
    <div>
      <p>{{ state.fname }}</p>
    </div>
    <div class="row justify-content-center">
      <ButtonLeft @click.native="prevButton" />
      <ButtonApply @click.native="nextButton" />
    </div>
  </div>
</template>

<script>
import pagesMapping from '../Mappings/pagesMapping';
import ButtonLeft from '../PageElements/ButtonLeft';
import ButtonApply from '../PageElements/ButtonApply';
export default {
  components: { ButtonLeft, ButtonApply },
  finalData: {},
  props: { state: Object },
  data: () => {
    return {
      pagesMapping,
    };
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
