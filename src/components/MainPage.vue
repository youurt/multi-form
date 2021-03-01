<template>
  <b-container class="container-fluid px-1 py-5 mx-auto">
    <b-row class="d-flex justify-content-center">
      <b-col class="col-xl-9 col-lg-10 col-md-11">
        <b-card no-body class="card rounded-0 b-0">
          <CardHeader />
          <Progress />
          <div class="content-fix">
            <div class="card-body show pt-0">
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
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import CardHeader from './PageElements/CardHeader';
import Progress from './PageElements/Progress';
import FirstPage from './Pages/FirstPage';
import SecondPage from './Pages/SecondPage';
import ThirdPage from './Pages/ThirdPage';
import FourthPage from './Pages/FourthPage';
import FifthPage from './Pages/FifthPage';
import FinalPage from './Pages/FinalPage';
export default {
  name: 'MainPage',
  components: {
    CardHeader,
    Progress,
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
