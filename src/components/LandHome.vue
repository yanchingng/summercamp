<template>
  <div class="wrapper">
    <video autoplay muted loop class="background-video" v-if="!$q.platform.is.mobile">
      <source src="~assets/video.mp4" type="video/mp4" >
    </video>
    <img src="~assets/video.png" class="background-video" v-else>

    <div class="absolute-center full-width">
      <div class="row justify-center text-center full-width">
        <h1 class="col-xs-12 feeling-passionate">Hello Summer</h1>
        <h1 class="col-xs-12 feeling-passionate">@</h1>
        <h1 class="col-xs-12 feeling-passionate">Arthur Ng</h1>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.wrapper {
  height: 100vh; /* Set the wrapper height to 100vh */
  width: 100vw; /* Set the wrapper width to 100vw */
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
