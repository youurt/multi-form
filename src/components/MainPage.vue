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
<style></style>
