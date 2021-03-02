<template>
  <div v-if="showError !== null">
    <b-alert
      :show="dismissCountDown"
      dismissible
      variant="warning"
      @dismissed="dismissCountDown = 0"
      @dismiss-count-down="countDownChanged"
    >
      Bitte gebe {{ showError }} korrekt ein...
    </b-alert>
  </div>
</template>

<script>
export default {
  props: {
    showError: String,
    dismissCountDown: Number,
    countDownChanged: Function,
  },
};
</script>

<style></style>
