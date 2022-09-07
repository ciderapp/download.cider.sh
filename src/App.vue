<template>
  <div class="ui-layout-container" bis_skin_checked="1">
    <div class="ui-section-feature__layout ui-layout-grid ui-layout-grid-3" bis_skin_checked="1">
      <div class="ui-component-card ui-layout-column-4" bis_skin_checked="1" style="height: 530px;">
        <img src="./assets/beta.png" loading="lazy" alt="Beta Icon" class="ui-component-card--image">
        <h4 class="ui-component-card--title">Nightly Releases</h4>
        <p>Feeling experimental? Try the Nightly builds.</p>
        <buttonRow branch="main"></buttonRow>  
      </div>
      <div class="ui-component-card ui-layout-column-4" bis_skin_checked="1" style="height: 530px;">
        <img src="./assets/windows.png" loading="lazy" alt="Windows Icon" class="ui-component-card--image">
        <h4 class="ui-component-card--title">Windows</h4>
        <p>Our recommended version for Windows with the best stability.</p>
        <ms-store-badge id="ms-badge1" productid="9p21xj9d9g66" animation="on"></ms-store-badge>
      </div>
      <div class="ui-component-card ui-layout-column-4" bis_skin_checked="1" style="height: 530px;">
      <img src="./assets/stable.png" loading="lazy" alt="Linux Icon" class="ui-component-card--image">
      <h4 class="ui-component-card--title">Stable Releases</h4>
        <p>Get the more stable, less buggy flavor of Cider.</p>
        <buttonRow branch="stable"></buttonRow>
      </div>
    </div>
  </div>
  <br>




</template>

<script>
import buttonRow from './components/button-row.vue'
export default {
  name: 'App',
  components: {
    buttonRow
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 50px;
}
img.winget{
  margin-top:-20px;
}
</style>
