<template>
  <div>
    <h4 class="heading mb-4 pb-1">{{ pagesMapping.customerMainPage.title }}</h4>
    <ErrorMessage
      :showError="showError"
      :dismissCountDown="dismissCountDown"
      :countDownChanged="countDownChanged"
    />

    <div v-for="(item, key, index) in form.data" :key="index">
      <b-form-group
        id="input-group-1"
        :label="item.label"
        :label-for="item.label"
      >
        <b-form-input
          :id="item.label"
          :name="item.label"
          v-model="item.name"
          :placeholder="item.placeholder"
          :state="changeState(key)"
          required
        ></b-form-input>
        <b-form-invalid-feedback :state="changeState(key)">
          {{ item.errMsg }}
        </b-form-invalid-feedback>
      </b-form-group>
    </div>

    <div class="row justify-content-center">
      <ButtonLeft @click.native="prevButton" />
      <ButtonRight @click.native="nextButton" />
    </div>
  </div>
</template>

<script>
import errorService from '../../services/errorService';
import validationService from '../../services/validationService';
import ButtonLeft from '../Elements/ButtonLeft';
import ButtonRight from '../Elements/ButtonRight';
import ErrorMessage from '../Elements/ErrorMessage';
import pagesMapping from '../../mappings/pagesMapping';
export default {
  components: { ButtonLeft, ButtonRight, ErrorMessage },
  props: { state: Object },
  data: () => {
    return {
      pagesMapping: pagesMapping,
      dismissSecs: 5,
      dismissCountDown: 0,
      form: {
        data: {
          fname: {
            name: '',
            label: pagesMapping.customerMainPage.fields.fname.field,
            placeholder: pagesMapping.customerMainPage.fields.fname.placeholder,
            errMsg: pagesMapping.customerMainPage.fields.fname.field,
          },
          lname: {
            name: '',
            label: pagesMapping.customerMainPage.fields.lname.field,
            placeholder: pagesMapping.customerMainPage.fields.lname.placeholder,
            errMsg: pagesMapping.customerMainPage.fields.lname.field,
          },
          email: {
            name: '',
            label: pagesMapping.customerMainPage.fields.email.field,
            placeholder: pagesMapping.customerMainPage.fields.email.placeholder,
            errMsg: pagesMapping.customerMainPage.fields.email.field,
          },
          cuid: {
            name: '',
            label: pagesMapping.customerMainPage.fields.cuid.field,
            placeholder: pagesMapping.customerMainPage.fields.cuid.placeholder,
            errMsg: pagesMapping.customerMainPage.fields.cuid.field,
          },
        },
      },
    };
  },
  methods: {
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
    changeState(key) {
      if (key === 'fname') {
        return this.isNameStateValid;
      } else if (key === 'lname') {
        return this.isLastNameStateValid;
      } else if (key === 'email') {
        return this.isEmailStateValid;
      } else if (key === 'cuid') {
        return this.isCuidStateValid;
      }
    },
    nextButton() {
      if (this.showError !== null) {
        this.dismissCountDown = this.dismissSecs;
      }

      this.isCompleted &&
        this.$emit('customer-main-page', {
          fname: this.form.data.fname.name,
          lname: this.form.data.lname.name,
          email: this.form.data.email.name,
          cuid: this.form.data.cuid.name,
          next: 3,
        });
      console.log(this.state);
    },
    prevButton() {
      this.$emit('customer-main-page', {
        fname: this.form.data.fname.name,
        lname: this.form.data.lname.name,
        email: this.form.data.email.name,
        cuid: this.form.data.cuid.name,
        next: 1,
      });
    },
    isValidName() {
      return this.form.data.fname.name
        ? validationService('name', this.form.data.fname.name)
        : null;
    },
    isValidLastName() {
      return this.form.data.lname.name
        ? validationService('name', this.form.data.lname.name)
        : null;
    },
    isValidEmail() {
      return this.form.data.email.name
        ? validationService('email', this.form.data.email.name)
        : null;
    },
    isValidCuid() {
      return this.form.data.cuid.name
        ? validationService('id', this.form.data.cuid.name) &&
            this.form.data.cuid.name.length === 7
        : null;
    },
  },
  computed: {
    isNameStateValid() {
      return this.form.data.fname.name ? this.isValidName() : null;
    },
    isLastNameStateValid() {
      return this.form.data.lname.name ? this.isValidLastName() : null;
    },
    isEmailStateValid() {
      return this.form.data.email.name ? this.isValidEmail() : null;
    },
    isCuidStateValid() {
      return this.form.data.cuid.name ? this.isValidCuid() : null;
    },
    isCompleted() {
      return this.isValidName() &&
        this.isValidLastName() &&
        this.isValidEmail() &&
        this.isValidCuid()
        ? true
        : false;
    },
    showError() {
      const errs = [];
      !this.isNameStateValid &&
        errs.push(pagesMapping.customerMainPage.fields.fname.field);
      !this.isLastNameStateValid &&
        errs.push(pagesMapping.customerMainPage.fields.lname.field);
      !this.isEmailStateValid &&
        errs.push(pagesMapping.customerMainPage.fields.email.field);
      !this.isCuidStateValid &&
        errs.push(pagesMapping.customerMainPage.fields.cuid.field);
      return errorService(errs);
    },
  },
  mounted() {
    this.form = { ...this.state, next: 3 };
  },
};
</script>

<style scoped></style>
