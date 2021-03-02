<template>
  <b-container class="container-fluid px-1 py-5 mx-auto">
    <b-row class="d-flex justify-content-center">
      <b-col class="col-xl-9 col-lg-10 col-md-11">
        <b-card no-body class="card rounded-0 b-0 ">
          <CardHeader />
          <Progress :currentPage="currentPage" />
          <div class="content-fix">
            <b-card-body class="show pt-0 mb-3">
              <div class="content-change">
                <div v-if="state.next === 1">
                  <ServiceContainer
                    :state="{ ...state }"
                    @select-service-page="selectServicePageHandler"
                  />
                </div>
                <div v-else-if="state.next === 2">
                  <CustomerContainer
                    :state="{ ...state }"
                    @customer-main-page="customerMainPageHandler"
                  />
                </div>
                <div v-else-if="state.next === 3">
                  <IssueDetalContainer
                    :state="{ ...state }"
                    @issue-detail-page="issueDetailPageHandler"
                  />
                </div>
                <div v-else-if="state.next === 4">
                  <EditContainer
                    :state="{ ...state }"
                    @edit-page="editPageHandler"
                  />
                </div>
                <div v-else-if="state.next === 5">
                  <SummaryContainer
                    :state="{ ...state }"
                    @summary-page="summaryPageHandler"
                  />
                </div>
                <div v-else><FinalContainer :state="{ ...state }" /></div>
              </div>
            </b-card-body>
          </div>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import CardHeader from './Elements/CardHeader';
import Progress from './Elements/Progress';
import ServiceContainer from './Containers/ServiceContainer';
import CustomerContainer from './Containers/CustomerContainer';
import IssueDetalContainer from './Containers/IssueDetalContainer';
import EditContainer from './Containers/EditContainer';
import SummaryContainer from './Containers/SummaryContainer';
import FinalContainer from './Containers/FinalContainer';
export default {
  name: 'MainPage',
  components: {
    CardHeader,
    Progress,
    ServiceContainer,
    CustomerContainer,
    IssueDetalContainer,
    EditContainer,
    SummaryContainer,
    FinalContainer,
  },
  data() {
    return {
      state: { next: 1 },
      currentPage: 1,
    };
  },
  methods: {
    selectServicePageHandler(pageLoad) {
      this.state = { ...this.state, ...pageLoad };
    },
    customerMainPageHandler(pageLoad) {
      this.state = { ...this.state, ...pageLoad };
    },
    issueDetailPageHandler(pageLoad) {
      this.state = { ...this.state, ...pageLoad };
    },
    editPageHandler(pageLoad) {
      this.state = { ...this.state, ...pageLoad };
    },
    summaryPageHandler(pageLoad) {
      this.state = { ...pageLoad };
    },
  },
  mounted() {},
  updated() {
    this.$nextTick(function() {
      this.currentPage = this.state.next;
    });
  },
};
</script>

<style></style>
