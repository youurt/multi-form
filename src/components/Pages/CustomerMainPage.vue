<template>
  <div>
    <h4 class="heading mb-4 pb-1">{{ pagesMapping.customerMainPage.title }}</h4>
    <ErrorMessage
      :showError="showError"
      :dismissCountDown="dismissCountDown"
      :countDownChanged="countDownChanged"
    />

    <b-form-group
      id="input-group-1"
      :label="pagesMapping.customerMainPage.fields.fname.field"
      label-for="input-1"
    >
      <b-form-input
        id="input-1"
        name="fname"
        v-model="form.fname"
        :placeholder="pagesMapping.customerMainPage.fields.fname.placeholder"
        :state="isNameStateValid"
        required
      ></b-form-input>
      <b-form-invalid-feedback :state="isNameStateValid">
        {{ pagesMapping.customerMainPage.fields.fname.errorMsg }}
      </b-form-invalid-feedback>
    </b-form-group>
    <b-form-group
      id="input-group-2"
      :label="pagesMapping.customerMainPage.fields.lname.field"
      label-for="input-2"
    >
      <b-form-input
        id="input-2"
        name="lname"
        v-model="form.lname"
        :placeholder="pagesMapping.customerMainPage.fields.lname.placeholder"
        :state="isLastNameStateValid"
        required
      ></b-form-input>
      <b-form-invalid-feedback :state="isLastNameStateValid">
        {{ pagesMapping.customerMainPage.fields.lname.errorMsg }}
      </b-form-invalid-feedback>
    </b-form-group>
    <b-form-group
      id="input-group-3"
      :label="pagesMapping.customerMainPage.fields.email.field"
      label-for="input-3"
    >
      <b-form-input
        id="input-3"
        name="email"
        v-model="form.email"
        :placeholder="pagesMapping.customerMainPage.fields.email.placeholder"
        :state="isEmailStateValid"
        required
      ></b-form-input>
      <b-form-invalid-feedback :state="isEmailStateValid">
        {{ pagesMapping.customerMainPage.fields.email.errorMsg }}
      </b-form-invalid-feedback>
    </b-form-group>
    <b-form-group
      id="input-group-4"
      :label="pagesMapping.customerMainPage.fields.mob.field"
      label-for="input-4"
    >
      <b-form-input
        id="input-4"
        name="mob"
        v-model="form.mob"
        :placeholder="pagesMapping.customerMainPage.fields.mob.placeholder"
        :state="isMobStateValid"
        required
      ></b-form-input>
      <b-form-invalid-feedback :state="isMobStateValid">
        {{ pagesMapping.customerMainPage.fields.mob.errorMsg }}
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
        fname: '',
        lname: '',
        email: '',
        mob: '',
        next: 3,
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
      this.isCompleted && this.$emit('customer-main-page', this.form);
    },
    prevButton() {
      this.form = { ...this.form, next: 1 };
      this.$emit('customer-main-page', this.form);
    },
    isValidName() {
      return this.form.fname ? this.form.fname.length >= 3 : null;
    },
    isValidLastName() {
      return this.form.lname ? this.form.lname.length >= 3 : null;
    },
    isValidEmail() {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return this.form.email ? re.test(this.form.email) : null;
    },
    isValidMob() {
      const re = /^[a-z0-9]+$/i;
      return this.form.mob
        ? re.test(this.form.mob) && this.form.mob.length === 7
        : null;
    },
  },
  computed: {
    isNameStateValid() {
      return this.form.fname ? this.isValidName() : null;
    },
    isLastNameStateValid() {
      return this.form.lname ? this.isValidLastName() : null;
    },
    isEmailStateValid() {
      return this.form.email ? this.isValidEmail() : null;
    },
    isMobStateValid() {
      return this.form.mob ? this.isValidMob() : null;
    },
    isCompleted() {
      return this.isValidName() &&
        this.isValidLastName() &&
        this.isValidEmail() &&
        this.isValidMob()
        ? true
        : false;
    },
    showError() {
      const errs = [];
      !this.isNameStateValid && errs.push('Namen');
      !this.isLastNameStateValid && errs.push('Nachnamen');
      !this.isEmailStateValid && errs.push('Email Adresse');
      !this.isMobStateValid && errs.push('Kundennummer');

      return errorService(errs);
    },
  },
  mounted() {
    this.form = { ...this.state, next: 3 };
  },
};
</script>

<style scoped></style>
