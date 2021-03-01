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

<style scoped>
.progress {
  height: 13px;
  width: 350px;
  margin: 10px 20px;
  background-color: #fff176;
}

.progress-bar {
  background-color: #fbc02d;
}

.count {
  width: 350px;
}

.fit-image {
  width: 100%;
  object-fit: cover;
}

.card {
  padding-bottom: 20px;
}

.card-header {
  padding: 20px 60px;
}

.card-body {
  display: none;
  padding-left: 55px;
  padding-right: 55px;
}

.card-body.show {
  display: block;
}

.yellow-text {
  color: #fbc02d;
}

.card-block {
  width: 235px;
  border: 1px solid lightgrey;
  padding: 20px;
  border-radius: 5px !important;
  background-color: #fafafa;
  margin-bottom: 30px;
}

.radio {
  display: inline-block;
  border-radius: 0;
  box-sizing: border-box;
  cursor: pointer;
  color: #000;
  font-weight: 500;
  -webkit-filter: grayscale(100%);
  -moz-filter: grayscale(100%);
  -o-filter: grayscale(100%);
  -ms-filter: grayscale(100%);
  filter: grayscale(100%);
}

.radio:hover {
  box-shadow: 1px 1px 2px 2px rgba(0, 0, 0, 0.1);
}

.radio.selected {
  border: 1px solid #f9a825;
  box-shadow: 0px 8px 16px 0px #eeeeee;
  -webkit-filter: grayscale(0%);
  -moz-filter: grayscale(0%);
  -o-filter: grayscale(0%);
  -ms-filter: grayscale(0%);
  filter: grayscale(0%);
}

.fa-check {
  color: #fbc02d;
  border-radius: 50%;
  border: 2px solid #fbc02d;
  padding: 5px;
}

.fa-circle {
  color: #fafafa;
  border-radius: 50%;
  border: 2px solid #bdbdbd;
  padding: 5px 6.155px;
}

.pic,
.pic-0 {
  height: 90px;
  width: 130px;
}

.pic {
  margin-top: 30px;
  margin-bottom: 20px;
}

.btn-blue {
  margin-top: 40px;
  background-color: #1a237e;
  color: #fff;
  width: 28%;
}

.btn-blue:hover {
  background-color: #000;
}

.btn-secondary {
  margin-top: 40px;
  width: 28%;
}

.fa-long-arrow-right {
  float: right;
  margin-top: 4px;
}

.fa-long-arrow-left {
  float: left;
  margin-top: 4px;
}

select,
input,
textarea {
  padding: 8px 15px 8px 15px;
  border-radius: 0px;
  margin-bottom: 25px;
  margin-top: 2px;
  width: 100%;
  box-sizing: border-box;
  color: #2c3e50;
  background-color: #eceff1;
  border: 1px solid #ccc;
  font-size: 16px;
  letter-spacing: 1px;
}

select:focus,
input:focus,
textarea:focus {
  -moz-box-shadow: none !important;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
  border: 1px solid #fbc02d !important;
  outline-width: 0;
}

button:focus {
  -moz-box-shadow: none !important;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
  outline-width: 0;
}
</style>
