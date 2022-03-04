<template>
  <ms-store-badge  productid="9p21xj9d9g66" size="small"></ms-store-badge>
  <buttonRow branch="main" display-name="Main"></buttonRow>
  <buttonRow branch="develop" display-name="Develop"></buttonRow>
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
</style>
