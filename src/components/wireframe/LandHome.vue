<template>
  <div class="wrapper bg-grey-5 full-width">
    <div class="column justify-center text-center full-width">
      <h1 class="text-weight-bolder">Section</h1>
      <h5 class="text-weight-bolder">Local Video Background</h5>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.wrapper {
  height: 100vh; /* Set the wrapper height to 100vh */
  display: flex;
  flex-direction: column;
  justify-content: center; /* Center the content vertically */
  align-items: center; /* Center the content horizontally */
  position: absolute; /* Position the wrapper absolutely */
}

.background-video {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensure video covers the entire viewport */
  z-index: -1; /* Place video behind other content */
  opacity: 0.5; /* Adjust the value from 0 to 1 for desired transparency */
}
</style>
