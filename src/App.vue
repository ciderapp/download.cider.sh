<template>
  <ms-store-badge  productid="9p21xj9d9g66" size="small"></ms-store-badge>
  <buttonRow branch="main" display-name="Nightly"></buttonRow>
  <a href="https://winstall.app/apps/CiderCollective.Cider"><img class="winget" src="https://custom-icon-badges.herokuapp.com/badge/Get_It_via_Winget_(Nightly)_-100000?style=for-the-badge&logo=winstall"></a>
  <buttonRow branch="stable" display-name="Stable"></buttonRow>
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
