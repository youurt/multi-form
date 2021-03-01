<template>
  <div>
    <ErrorMessage
      :showError="showError"
      :dismissCountDown="dismissCountDown"
      :countDownChanged="countDownChanged"
    />

    <b-form-group
      id="input-group-1"
      label="Company Name: *"
      label-for="input-1"
    >
      <b-form-input
        id="input-1"
        name="cname"
        v-model="form.cname"
        placeholder="Enter Company Name"
        :state="isCompanyStateValid"
        required
      ></b-form-input>
      <b-form-invalid-feedback :state="isCompanyStateValid">
        Your must enter a valid Company name.
      </b-form-invalid-feedback>
    </b-form-group>

    <b-form-group id="input-group-2" label="Zip Code: *" label-for="input-2">
      <b-form-input
        id="input-2"
        name="zip"
        v-model="form.zip"
        placeholder="Enter Zip Code"
        :state="isZipStateValid"
        required
      ></b-form-input>
      <b-form-invalid-feedback :state="isZipStateValid">
        Your must enter a valid Zip Code.
      </b-form-invalid-feedback>
    </b-form-group>

    <b-form-group
      id="input-group-3"
      label="Website Titel: *"
      label-for="input-3"
    >
      <b-form-input
        id="input-3"
        name="title"
        v-model="form.title"
        placeholder="Enter Title"
        :state="isTitleStateValid"
        required
      ></b-form-input>
      <b-form-invalid-feedback :state="isTitleStateValid">
        Your must enter a valid Title.
      </b-form-invalid-feedback>
    </b-form-group>

    <b-form-group
      id="input-group-4"
      label="Website Type: *"
      label-for="input-4"
    >
      <b-form-select
        id="input-4"
        v-model="form.typeinfo"
        :options="typeinfo"
        required
        :state="isTypeStateValid"
      ></b-form-select>
      <b-form-invalid-feedback :state="isTypeStateValid">
        Select one option.
      </b-form-invalid-feedback>
    </b-form-group>

    <b-form-invalid-feedback :state="isTypeStateValid">
      Your must enter a valid name.
    </b-form-invalid-feedback>
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
        cname: '',
        zip: '',
        title: '',
        typeinfo: '',
        next: 4,
      },
      typeinfo: [
        { text: 'Select One', value: null },
        'E-commerce',
        'Personal',
        'Business',
        'Education',
      ],
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
      this.isCompleted && this.$emit('form-service2', this.form);
    },
    prevButton() {
      this.form = { ...this.form, next: 2 };
      this.$emit('form-service2', this.form);
    },
    isValidCompany() {
      return this.form.cname ? this.form.cname.length >= 3 : null;
    },
    isValidType() {
      return this.form.typeinfo ? this.form.typeinfo.length > 0 : null;
    },
    isValidZip() {
      return this.form.zip ? this.form.zip.length >= 5 : null;
    },
    isValidTitle() {
      return this.form.title ? this.form.title.length > 5 : null;
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
      !this.isCompanyStateValid && errs.push('Firma');
      !this.isZipStateValid && errs.push('PLZ');
      !this.isTitleStateValid && errs.push('Titel');
      !this.isTypeStateValid && errs.push('Typ');

      return errorService(errs);
    },
  },
  mounted() {
    this.form = { ...this.state, next: 4 };
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
</style>
