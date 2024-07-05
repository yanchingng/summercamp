<template>
  <q-header reveal elevated  style=" width: 100vw">
    <q-toolbar class="flex justify-between bg-primary text-white">
      <router-link to="/">
        <q-toolbar-title class="row" >
          <div class="row items-baseline justify-start">
            <div class="font-h65 text-white" style="flex: 1">Arthur Summer Camp</div>
          </div>
        </q-toolbar-title>
      </router-link>
      <div>
      </div>
      <div class="flex items-end gt-sm q-mr-lg">
        <q-btn flat to="/wireframe" label="Wireframe"/>
      </div>

      <div class="lt-md">
        <q-btn-dropdown dropdown-icon="change_history">
          <q-list class="bg-primary text-white">

            <q-item clickable v-close-popup to="/wireframe">
              <q-item-section>
                <q-item-label>Wireframe</q-item-label>
              </q-item-section>
            </q-item>

          </q-list>
        </q-btn-dropdown>
      </div>

    </q-toolbar>
  </q-header>
</template>

<script>
export default {
  name: "LandHeader",
}
</script>

<style scoped>

a {
  text-decoration: none;
}

.q-item.q-router-link--active, .q-item--active {
  color: white;
}

</style>
