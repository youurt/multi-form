<template>
  <div>
    <b-row class=" d-flex justify-content-sm-end justify-content-start px-5">
      <div class="progress">
        <div
          class="progress-bar progress-bar-striped progress-bar-animated"
          role="progressbar"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </b-row>

    <b-row class="d-flex justify-content-sm-end justify-content-start px-5">
      <div class="count text-center">
        <p class="mb-sm-0 pb-sm-0">
          <strong><span id="cnt">25</span>%</strong>
          <span class="yellow-text">Completed</span>
        </p>
      </div>
    </b-row>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
