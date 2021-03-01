<template>
  <div>
    <h4 class="heading mb-4 pb-1">Second Page</h4>
    <ErrorMessage
      :showError="showError"
      :dismissCountDown="dismissCountDown"
      :countDownChanged="countDownChanged"
    />

    <b-form-group id="input-group-1" label="First Name: *" label-for="input-1">
      <b-form-input
        id="input-1"
        name="fname"
        v-model="form.fname"
        placeholder="Enter First Name"
        :state="isNameStateValid"
        required
      ></b-form-input>
      <b-form-invalid-feedback :state="isNameStateValid">
        Your must enter a valid name.
      </b-form-invalid-feedback>
    </b-form-group>
    <b-form-group id="input-group-2" label="Last name: *" label-for="input-2">
      <b-form-input
        id="input-2"
        name="lname"
        v-model="form.lname"
        placeholder="Enter Last Name"
        :state="isLastNameStateValid"
        required
      ></b-form-input>
      <b-form-invalid-feedback :state="isLastNameStateValid">
        Your must enter a valid last name.
      </b-form-invalid-feedback>
    </b-form-group>
    <b-form-group id="input-group-3" label="Email: *" label-for="input-3">
      <b-form-input
        id="input-3"
        name="email"
        v-model="form.email"
        placeholder="Enter Email adress"
        :state="isEmailStateValid"
        required
      ></b-form-input>
      <b-form-invalid-feedback :state="isEmailStateValid">
        Your must enter a valid email adress.
      </b-form-invalid-feedback>
    </b-form-group>
    <b-form-group id="input-group-4" label="Kunden Id: *" label-for="input-4">
      <b-form-input
        id="input-4"
        name="mob"
        v-model="form.mob"
        placeholder="Kunden Id"
        :state="isMobStateValid"
        required
      ></b-form-input>
      <b-form-invalid-feedback :state="isMobStateValid">
        Die Kunden Id ist eine Kombination aus Zahlen und Buchstaben und hat die
        Länge 7
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

export default {
  components: { ButtonLeft, ButtonRight, ErrorMessage },
  props: { state: Object },
  data: () => {
    return {
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
      this.isCompleted && this.$emit('form-service', this.form);
    },
    prevButton() {
      this.form = { ...this.form, next: 1 };
      this.$emit('form-service', this.form);
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
