<template>
  <div>
    <h4 class="heading mb-4 pb-1">{{ pagesMapping.finalPage.title }}</h4>
    <div class="row justify-content-start px-3">
      <p>
        Form has been submitted Successfully ! <br />You will recieve estimation
        on your email id and contact no.
      </p>
    </div>
  </div>
</template>

<script>
import pagesMapping from '../Mappings/pagesMapping';
export default {
  data() {
    return { pagesMapping };
  },
  props: { state: Object },
  mounted() {
    alert(JSON.stringify(this.state, null, 4));
  },
};
</script>

<style scoped></style>
