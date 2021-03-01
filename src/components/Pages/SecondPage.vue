<template>
  <div>
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
