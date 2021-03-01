<template
  ><div class="container-fluid px-1 py-5 mx-auto">
    <div class="row d-flex justify-content-center">
      <div class="col-xl-9 col-lg-10 col-md-11">
        <div class="card rounded-0 b-0">
          <div class="card-header">
            <div class="row d-flex justify-content-between">
              <div class="">
                <h5 class="yellow-text">
                  Tell Us Little More About Your Requirement?
                </h5>
                <h6>Simply Follow Through</h6>
              </div>
              <div class="text-md-center">
                <h5 class="yellow-text">Call us</h5>
                <h5>
                  <b-icon
                    icon="telephone-fill"
                    scale="1"
                    class="pr-1"
                    variant="dark"
                  />123 456 7891
                </h5>
              </div>
            </div>
          </div>
          <div
            class="row d-flex justify-content-sm-end justify-content-start px-5"
          >
            <div class="progress">
              <div
                class="progress-bar progress-bar-striped progress-bar-animated"
                role="progressbar"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
          <div
            class="row d-flex justify-content-sm-end justify-content-start px-5"
          >
            <div class="count text-center">
              <p class="mb-sm-0 pb-sm-0">
                <strong><span id="cnt">25</span>%</strong>
                <span class="yellow-text">Completed</span>
              </p>
            </div>
          </div>
          <div class="content-fix">
            <div class="card-body show pt-0">
              <h4 class="heading mb-4 pb-1">Some Header</h4>
              <div class="content-change">
                <div v-if="state.next === 1">
                  <FirstPage
                    :state="{ ...state }"
                    @select-service="selectService"
                  />
                </div>
                <div v-else-if="state.next === 2">
                  <SecondPage
                    :state="{ ...state }"
                    @form-service="formService"
                  />
                </div>
                <div v-else-if="state.next === 3">
                  <ThirdPage
                    :state="{ ...state }"
                    @form-service2="formService2"
                  />
                </div>
                <div v-else-if="state.next === 4">
                  <FourthPage
                    :state="{ ...state }"
                    @form-service3="formService3"
                  />
                </div>
                <div v-else-if="state.next === 5">
                  <FifthPage
                    :state="{ ...state }"
                    @form-service4="formService4"
                  />
                </div>
                <div v-else><FinalPage :state="{ ...state }" /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FirstPage from './Pages/FirstPage';
import SecondPage from './Pages/SecondPage';
import ThirdPage from './Pages/ThirdPage';
import FourthPage from './Pages/FourthPage';
import FifthPage from './Pages/FifthPage';
import FinalPage from './Pages/FinalPage';
export default {
  name: 'MainPage',
  components: {
    FirstPage,
    SecondPage,
    ThirdPage,
    FourthPage,
    FifthPage,
    FinalPage,
  },
  data() {
    return {
      state: { next: 1 },
    };
  },
  methods: {
    selectService(selectData) {
      this.state = { ...this.state, ...selectData };
    },
    formService(formData) {
      this.state = { ...this.state, ...formData };
    },
    formService2(formData) {
      this.state = { ...this.state, ...formData };
    },
    formService3(formData) {
      this.state = { ...this.state, ...formData };
    },
    formService4(formData) {
      this.state = { ...formData };
    },
  },
  mounted() {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
