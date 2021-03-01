<template>
  <main>
    <b-container class="bv-example-row mt-5 mb-5">
      <b-row align-v="center">
        <b-col
          ><div>
            <b-form @submit="onSubmit" @reset="onReset" v-if="show">
              <b-form-group
                id="input-group-1"
                label="Email address:"
                label-for="input-1"
              >
                <b-form-input
                  id="input-1"
                  v-model="form.email"
                  type="email"
                  placeholder="Enter email"
                  :state="isEmailStateValid"
                  required
                ></b-form-input>
                <b-form-invalid-feedback :state="isEmailStateValid">
                  Your must enter a valid mail adress.
                </b-form-invalid-feedback>
              </b-form-group>

              <b-form-group
                id="input-group-2"
                label="Your Name:"
                label-for="input-2"
              >
                <b-form-input
                  id="input-2"
                  v-model="form.name"
                  placeholder="Enter name"
                  required
                  :state="isNameStateValid"
                >
                </b-form-input>
                <b-form-invalid-feedback :state="isNameStateValid">
                  Your name must be 5-12 characters long.
                </b-form-invalid-feedback>
              </b-form-group>

              <b-form-group
                id="input-group-3"
                label="Food:"
                label-for="input-3"
              >
                <b-form-select
                  id="input-3"
                  v-model="form.food"
                  :options="foods"
                  required
                  :state="true"
                ></b-form-select>
                <b-form-invalid-feedback :state="dropDownHandler">
                  Select one option.
                </b-form-invalid-feedback>
              </b-form-group>

              <b-form-group id="input-group-4" v-slot="{ ariaDescribedby }">
                <b-form-checkbox-group
                  v-model="form.checked"
                  id="checkboxes-4"
                  :aria-describedby="ariaDescribedby"
                  :state="isCheckboxStateValid"
                  :required="form.checked.length < 2"
                >
                  <b-form-checkbox value="me">Check me out</b-form-checkbox>
                  <b-form-checkbox value="that">Check that out</b-form-checkbox>
                  <b-form-checkbox value="that3"
                    >Check that2 out</b-form-checkbox
                  >
                </b-form-checkbox-group>
                <b-form-invalid-feedback :state="isCheckboxStateValid"
                  >Please select at least two</b-form-invalid-feedback
                >
              </b-form-group>

              <b-button
                type="submit"
                :disabled="!isComplete"
                :variant="this.success ? 'success' : 'warning'"
                >Submit</b-button
              >
              <b-button type="reset" variant="danger">Reset</b-button>
            </b-form>
            <b-card class="mt-3" header="Form Data Result">
              <pre class="m-0">{{ form }}</pre>
            </b-card>
          </div></b-col
        >
      </b-row>
    </b-container>
  </main>
</template>

<script>
export default {
  name: 'MainPage',
  data() {
    return {
      form: {
        email: '',
        name: '',
        food: null,
        checked: [],
      },
      foods: [
        { text: 'Select One', value: null },
        'Carrots',
        'Beans',
        'Tomatoes',
        'Corn',
      ],
      show: true,
      success: false,
      dropdownError: false,
      errorSwitch: false,
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.email = '';
      this.form.name = '';
      this.form.food = null;
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.$nextTick(() => {
        this.show = true;
      });
    },
    makeSuccess() {
      this.success = true;
    },

    isValidName() {
      return this.form.name.length >= 5;
    },
    isValidEmail() {
      return /\S+@\S+\.\S+/.test(this.form.email);
    },
    isValidCheckBox() {
      return this.form.checked.length >= 2;
    },
    changeError() {
      this.errorSwitch = false;
    },
  },
  computed: {
    isEmailStateValid() {
      console.log(this.form.food);
      return this.form.email ? this.isValidEmail() : null;
    },
    isNameStateValid() {
      return this.form.name ? this.isValidName() : null;
    },
    isCheckboxStateValid() {
      return this.form.checked.length > 0 ? this.isValidCheckBox() : null;
    },
    dropDownHandler() {
      if (this.form.food === null && this.success === true) {
        this.changeError();
        return false;
      } else {
        return true;
      }
    },
    // this.form.food === null && this.success === true
    //                   ? false
    //                   : true
    isComplete() {
      if (
        this.form.email &&
        this.form.name &&
        // this.form.food != null &&
        this.form.checked.length >= 2
      ) {
        // this.isDropdownStateValid();
        this.makeSuccess();
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
