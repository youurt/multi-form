<template>
  <b-container class="container-fluid px-1 py-5 mx-auto">
    <b-row class="d-flex justify-content-center">
      <b-col class="col-xl-9 col-lg-10 col-md-11">
        <b-card no-body class="card rounded-0 b-0 ">
          <CardHeader />
          <Progress :currentPage="currentPage" />
          <div class="content-fix">
            <div class="card-body show pt-0 mb-3">
              <div class="content-change ">
                <div v-if="state.next === 1">
                  <SelectServicePage
                    :state="{ ...state }"
                    @select-service-page="selectServicePageHandler"
                  />
                </div>
                <div v-else-if="state.next === 2">
                  <CustomerMainPage
                    :state="{ ...state }"
                    @customer-main-page="customerMainPageHandler"
                  />
                </div>
                <div v-else-if="state.next === 3">
                  <IssueDetailPage
                    :state="{ ...state }"
                    @issue-detail-page="issueDetailPageHandler"
                  />
                </div>
                <div v-else-if="state.next === 4">
                  <EditPage
                    :state="{ ...state }"
                    @edit-page="editPageHandler"
                  />
                </div>
                <div v-else-if="state.next === 5">
                  <SummaryPage
                    :state="{ ...state }"
                    @summary-page="summaryPageHandler"
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
import SelectServicePage from './Pages/SelectServicePage';
import CustomerMainPage from './Pages/CustomerMainPage';
import IssueDetailPage from './Pages/IssueDetailPage';
import EditPage from './Pages/EditPage';
import SummaryPage from './Pages/SummaryPage';
import FinalPage from './Pages/FinalPage';
export default {
  name: 'MainPage',
  components: {
    CardHeader,
    Progress,
    SelectServicePage,
    CustomerMainPage,
    IssueDetailPage,
    EditPage,
    SummaryPage,
    FinalPage,
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
      console.log(this.currentPage);
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>
