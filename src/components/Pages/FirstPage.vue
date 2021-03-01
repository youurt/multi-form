<template>
  <div>
    <div class="radio-group row justify-content-between px-3">
      <div
        :class="
          select.selected === 'create-website'
            ? 'card-block radio selected'
            : 'card-block radio '
        "
      >
        <div class="row justify-content-end d-flex px-3">
          <b-icon
            :icon="
              select.selected === 'create-website' ? 'check-circle' : 'circle'
            "
            scale="2"
            variant="dark"
            @click="select.selected = 'create-website'"
          />
        </div>
        <div class="row justify-content-center d-flex">
          <div class="pic">
            <img src="https://i.imgur.com/4uBi6ib.png" class="pic-0" />
          </div>
          <h5 class="mb-4">Create Website</h5>
        </div>
      </div>
      <div
        :class="
          select.selected === 'website-relaunch'
            ? 'card-block radio selected'
            : 'card-block radio '
        "
      >
        <div class="row justify-content-end d-flex px-3">
          <b-icon
            :icon="
              select.selected === 'website-relaunch' ? 'check-circle' : 'circle'
            "
            scale="2"
            variant="dark"
            @click="select.selected = 'website-relaunch'"
          />
        </div>
        <div class="row justify-content-center d-flex">
          <div class="pic">
            <img src="https://i.imgur.com/nwy6Wkh.png" class="pic-0" />
          </div>
          <h5 class="mb-4">Website Relaunch</h5>
        </div>
      </div>
      <div
        :class="
          select.selected === 'dont-know'
            ? 'card-block radio selected'
            : 'card-block radio '
        "
      >
        <div class="row justify-content-end d-flex px-3">
          <b-icon
            :icon="select.selected === 'dont-know' ? 'check-circle' : 'circle'"
            scale="2"
            variant="dark"
            @click="select.selected = 'dont-know'"
          />
        </div>
        <div class="row justify-content-center d-flex">
          <div class="pic">
            <img src="https://i.imgur.com/74Ez7OS.png" class="pic-0" />
          </div>
          <h5 class="mb-4">Don't Know</h5>
        </div>
      </div>
    </div>
    <div class="row justify-content-center">
      <button class="btn btn-blue next mx-2" id="next1" @click="nextButton">
        Next
        <span
          ><b-icon
            icon="arrow-right"
            scale="1"
            variant="light"
            class="fa-long-arrow-right"
        /></span>
      </button>
    </div>
  </div>
</template>

<script>
// import { } from 'bootstrap-vue';
export default {
  components: {},
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
