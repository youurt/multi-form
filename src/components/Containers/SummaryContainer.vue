<template>
  <div>
    <h4 class="heading mb-4 pb-1">{{ pagesMapping.summaryPage.title }}</h4>
    <ul id="example-1">
      <li v-for="(item, key) in summary" :key="item">
        <b>{{ key }}</b> - {{ item }}
      </li>
    </ul>
    <b-row class=" justify-content-center">
      <ButtonLeft @click.native="prevButton" />
      <ButtonApply @click.native="nextButton" />
    </b-row>
  </div>
</template>

<script>
import pagesMapping from '../mappings/pagesMapping';
import ButtonLeft from '../Elements/ButtonLeft';
import ButtonApply from '../Elements/ButtonApply';

export default {
  components: { ButtonLeft, ButtonApply },

  props: { state: Object },
  data: () => {
    return {
      finalData: {},
      pagesMapping,
    };
  },
  methods: {
    nextButton() {
      this.finalData = this.state;
      delete this.finalData.next;
      this.finalData = {
        ...this.finalData,
        cuid: parseInt(this.state.cuid),
        zip: parseInt(this.state.cuid),
      };
      this.$emit('summary-page', this.finalData);
    },
    prevButton() {
      this.finalData = { ...this.finalData, next: 4 };
      this.$emit('summary-page', this.finalData);
    },
  },
  mounted() {
    this.finalData = { ...this.state };
  },
  computed: {
    summary() {
      return {
        Vorname: this.finalData.fname,
        Nachname: this.finalData.lname,
        'E-Mail': this.finalData.email,
        Service: this.finalData.selected,
        'Kunden-ID': this.finalData.cuid,
        Position: this.finalData.title,
        Unternehmen: this.finalData.cname,
        PLZ: this.finalData.zip,
        Branche: this.finalData.typeinfo,
      };
    },
  },
};
</script>

<style scoped></style>
