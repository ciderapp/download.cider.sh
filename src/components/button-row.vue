<script setup>
  import { ref } from 'vue'
  import { defineProps, toRefs } from "vue";
  const props = defineProps({
    branch: String,
    displayName: String,
  });

  const { branch, displayName } = toRefs(props);
  let data = ref(null)
  let error = ref(null)
  let targetURL = "https://api.github.com/repos/ciderapp/cider-releases/releases?per_page=100"
  if(branch.value === "stable") {
    targetURL = "https://api.github.com/repos/ciderapp/cider-releases/releases/tags/v1.5.0"
  }
fetch(targetURL)
    .then(async (res) => {
      let release = await res.json()
      
      if (branch.value === "stable") {
        
        data.value = [release];
      }
      else {
        data.value = release.filter(release => release.name.includes(branch.value))
      }
      console.log(branch.value, data.value)
    })
    .catch((err) => (error.value = err))
  let showwin = false
  const QueryString = window.location.search;
  const urlParams = new URLSearchParams(QueryString);
  if (urlParams.has('exe')){
    showwin = true
  }
</script>

<template>
  <div> {{ displayName }} releases</div>
  <div v-if="error"> <b-button-group class="mr-1">
      <b-button :href="'https://github.com/ciderapp/cider-releases/releases/'" style="margin:5px;" variant="light">Releases</b-button>
    </b-button-group> </div>
  <div v-else-if="data">
    <b-button-group class="mr-1" v-for="file in data[0].assets" :key="file">
      <b-button :href="file.browser_download_url" style="margin:5px;" variant="light" v-if="!String(file.name).endsWith('.yml') && !String(file.name).endsWith('.blockmap') && !String(file.name).endsWith('.exe') && !showwin">.{{ String(file.name).split('.')[String(file.name).split('.').length - 1]}}</b-button>
      <b-button :href="file.browser_download_url" style="margin:5px;" variant="light" v-if="!String(file.name).endsWith('.yml') && !String(file.name).endsWith('.blockmap') && !String(file.name).includes('winget') && showwin">.{{ String(file.name).split('.')[String(file.name).split('.').length - 1]}}</b-button>
    </b-button-group>
    <br>
    <b-button-group class="mr-1" v-if="branch === 'main'">
      <b-button href="https://github.com/ciderapp/Cider/releases/download/macos-beta/Cider.dmg" style="margin:5px;" variant="light">.dmg</b-button>
      <b-button href="https://github.com/ciderapp/Cider/releases/download/macos-beta/Cider.pkg" style="margin:5px;" variant="light">.pkg</b-button>
    </b-button-group>
  </div>
  <div v-else><b-spinner label="Spinning"></b-spinner></div>
  <br>
</template>


<script>
export default {
  name: "button-row",
}
</script>