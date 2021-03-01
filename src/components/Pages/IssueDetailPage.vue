<template>
  <div>
    <h4 class="heading mb-4 pb-1">{{ pagesMapping.issueDetailPage.title }}</h4>
    <ErrorMessage
      :showError="showError"
      :dismissCountDown="dismissCountDown"
      :countDownChanged="countDownChanged"
    />

    <b-form-group
      id="input-group-1"
      :label="pagesMapping.issueDetailPage.fields.cname.field"
      label-for="input-1"
    >
      <b-form-input
        id="input-1"
        name="cname"
        v-model="form.cname"
        :placeholder="pagesMapping.issueDetailPage.fields.cname.placeholder"
        :state="isCompanyStateValid"
        required
      ></b-form-input>
      <b-form-invalid-feedback :state="isCompanyStateValid">
        {{ pagesMapping.issueDetailPage.fields.cname.errorMsg }}
      </b-form-invalid-feedback>
    </b-form-group>

    <b-form-group
      id="input-group-2"
      :label="pagesMapping.issueDetailPage.fields.zip.field"
      label-for="input-2"
    >
      <b-form-input
        id="input-2"
        name="zip"
        v-model="form.zip"
        :placeholder="pagesMapping.issueDetailPage.fields.zip.placeholder"
        :state="isZipStateValid"
        required
      ></b-form-input>
      <b-form-invalid-feedback :state="isZipStateValid">
        {{ pagesMapping.issueDetailPage.fields.zip.errorMsg }}
      </b-form-invalid-feedback>
    </b-form-group>

    <b-form-group
      id="input-group-3"
      :label="pagesMapping.issueDetailPage.fields.title.field"
      label-for="input-3"
    >
      <b-form-input
        id="input-3"
        name="title"
        v-model="form.title"
        :placeholder="pagesMapping.issueDetailPage.fields.title.placeholder"
        :state="isTitleStateValid"
        required
      ></b-form-input>
      <b-form-invalid-feedback :state="isTitleStateValid">
        {{ pagesMapping.issueDetailPage.fields.title.errorMsg }}
      </b-form-invalid-feedback>
    </b-form-group>

    <b-form-group
      id="input-group-4"
      :label="pagesMapping.issueDetailPage.fields.typeinfo.field"
      label-for="input-4"
    >
      <b-form-select
        id="input-4"
        v-model="form.typeinfo"
        :options="pagesMapping.issueDetailPage.fields.typeinfo.options"
        required
        :state="isTypeStateValid"
      ></b-form-select>
      <b-form-invalid-feedback :state="isTypeStateValid">
        {{ pagesMapping.issueDetailPage.fields.typeinfo.errorMsg }}
      </b-form-invalid-feedback>
    </b-form-group>

    <div class="row justify-content-center">
      <ButtonLeft @click.native="prevButton" />
      <ButtonRight @click.native="nextButton" />
    </div>
  </div>
</template>

<script>
import errorService from '../../services/ErrorService';
import ButtonLeft from '../PageElements/ButtonLeft';
import ButtonRight from '../PageElements/ButtonRight';
import ErrorMessage from '../PageElements/ErrorMessage';
import pagesMapping from '../Mappings/pagesMapping';
export default {
  components: { ButtonLeft, ButtonRight, ErrorMessage },
  props: { state: Object },
  data: () => {
    return {
      pagesMapping: pagesMapping,
      dismissSecs: 5,
      dismissCountDown: 0,
      form: {
        cname: '',
        zip: '',
        title: '',
        typeinfo: '',
        next: 4,
      },
    };
  },
  methods: {
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
    nextButton() {
      if (this.showError !== null) {
        this.dismissCountDown = this.dismissSecs;
      }
      this.isCompleted && this.$emit('issue-detail-page', this.form);
    },
    prevButton() {
      this.form = { ...this.form, next: 2 };
      this.$emit('issue-detail-page', this.form);
    },
    isValidCompany() {
      const reComp = /^[.@&]?[a-zA-Z0-9 ]+[ !.@&()]?[ a-zA-Z0-9!()]+/;
      return this.form.cname ? reComp.test(this.form.cname) : null;
    },
    isValidType() {
      return this.form.typeinfo ? this.form.typeinfo.length > 0 : null;
    },
    isValidZip() {
      const reZip = /^(?!01000|99999)(0[1-9]\d{3}|[1-9]\d{4})$/;
      return this.form.zip ? reZip.test(this.form.zip) : null;
    },
    isValidTitle() {
      const reTitle = /^[A-Za-z \s]+$/;
      return this.form.title ? reTitle.test(this.form.title) : null;
    },
  },
  computed: {
    isCompanyStateValid() {
      return this.form.cname ? this.isValidCompany() : null;
    },
    isZipStateValid() {
      return this.form.zip ? this.isValidZip() : null;
    },
    isTitleStateValid() {
      return this.form.title ? this.isValidTitle() : null;
    },
    isTypeStateValid() {
      return this.form.typeinfo ? this.isValidType() : null;
    },
    isCompleted() {
      return this.isValidCompany() &&
        this.isValidType() &&
        this.isValidZip() &&
        this.isValidTitle()
        ? true
        : false;
    },
    showError() {
      const errs = [];
      !this.isCompanyStateValid &&
        errs.push(pagesMapping.issueDetailPage.fields.cname.field);
      !this.isZipStateValid &&
        errs.push(pagesMapping.issueDetailPage.fields.zip.field);
      !this.isTitleStateValid &&
        errs.push(pagesMapping.issueDetailPage.fields.title.field);
      !this.isTypeStateValid &&
        errs.push(pagesMapping.issueDetailPage.fields.typeinfo.field);

      return errorService(errs);
    },
  },
  mounted() {
    this.form = { ...this.state, next: 4 };
  },
};
</script>

<style scoped></style>
