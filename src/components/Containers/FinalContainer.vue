<template>
  <div>
    <h4 class="heading mb-4 pb-1">{{ pagesMapping.finalPage.title }}</h4>
    <div class="row justify-content-start px-3">
      <div>
        Vielen Dank {{ this.state.fname }} {{ this.state.lname }}!
        <br />
        <br />
        Wir haben einen {{ this.state.selected }} für {{ this.state.cname }} mit
        der
        {{ pagesMapping.customerMainPage.fields.cuid.field }}
        {{ this.state.cuid }} erhalten und senden Ihnen eine Mail an die Adresse
        {{ this.state.email }}!
        <br />
        <br />
        Herzlichen Dank! Ihr ComputerRepair24.com Team!
      </div>
    </div>
  </div>
</template>

<script>
import pagesMapping from '../../mappings/pagesMapping';
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
