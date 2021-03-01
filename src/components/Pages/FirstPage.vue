<template>
  <div>
    <h4 class="heading mb-4 pb-1">First Page</h4>
    <b-form-radio-group class="row justify-content-between px-3">
      <div
        :class="
          select.selected === 'create-website'
            ? 'card-block radio selected'
            : 'card-block radio '
        "
      >
        <b-row class=" justify-content-end d-flex px-3">
          <b-icon
            :icon="
              select.selected === 'create-website' ? 'check-circle' : 'circle'
            "
            scale="2"
            variant="dark"
            @click="select.selected = 'create-website'"
          />
        </b-row>
        <b-row class="justify-content-center d-flex">
          <div class="pic">
            <img src="https://i.imgur.com/4uBi6ib.png" class="pic-0" />
          </div>
          <h5 class="mb-4">Create Website</h5>
        </b-row>
      </div>
      <div
        :class="
          select.selected === 'website-relaunch'
            ? 'card-block radio selected'
            : 'card-block radio '
        "
      >
        <b-row class="justify-content-end d-flex px-3">
          <b-icon
            :icon="
              select.selected === 'website-relaunch' ? 'check-circle' : 'circle'
            "
            scale="2"
            variant="dark"
            @click="select.selected = 'website-relaunch'"
          />
        </b-row>
        <b-row class="justify-content-center d-flex">
          <div class="pic">
            <img src="https://i.imgur.com/nwy6Wkh.png" class="pic-0" />
          </div>
          <h5 class="mb-4">Website Relaunch</h5>
        </b-row>
      </div>
      <div
        :class="
          select.selected === 'dont-know'
            ? 'card-block radio selected'
            : 'card-block radio '
        "
      >
        <b-row class="justify-content-end d-flex px-3">
          <b-icon
            :icon="select.selected === 'dont-know' ? 'check-circle' : 'circle'"
            scale="2"
            variant="dark"
            @click="select.selected = 'dont-know'"
          />
        </b-row>
        <b-row class="justify-content-center d-flex">
          <div class="pic">
            <img src="https://i.imgur.com/74Ez7OS.png" class="pic-0" />
          </div>
          <h5 class="mb-4">Don't Know</h5>
        </b-row>
      </div>
    </b-form-radio-group>
    <b-row class="justify-content-center">
      <ButtonRight @click.native="nextButton" />
    </b-row>
  </div>
</template>

<script>
// import { } from 'bootstrap-vue';
import ButtonRight from '../PageElements/ButtonRight';
export default {
  components: { ButtonRight },
  props: { state: Object },
  data: () => {
    return {
      select: { selected: 'create-website', next: 2 },
    };
  },

  methods: {
    nextButton() {
      this.$emit('select-service', this.select);
    },
  },
  mounted() {
    this.select.selected = this.state.selected
      ? this.state.selected
      : 'create-website';
  },
};
</script>

<style scoped></style>
