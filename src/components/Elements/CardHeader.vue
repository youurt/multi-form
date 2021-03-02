<template>
  <div class="card-header">
    <b-row class="d-flex justify-content-between">
      <div class="">
        <h5 class="yellow-text">
          {{ pagesMapping.headerPage.title }}
        </h5>
        <h6>{{ pagesMapping.headerPage.subtitle }}</h6>
      </div>
      <div class="text-md-center">
        <h5 class="yellow-text">{{ pagesMapping.headerPage.callText }}</h5>
        <h5>
          <b-icon
            icon="telephone-fill"
            scale="1"
            class="pr-1"
            variant="dark"
          />{{ pagesMapping.headerPage.callNo }}
        </h5>
      </div>
    </b-row>
  </div>
</template>

<script>
import pagesMapping from '../../mappings/pagesMapping';
export default {
  data() {
    return {
      pagesMapping,
    };
  },
};
</script>

<style></style>
