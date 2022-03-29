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

fetch('https://api.github.com/repos/ciderapp/cider-releases/releases')
    .then(async (res) => {
      data.value = await res.json()
      data.value.forEach((release) => {
        console.log(release)
        console.log(branch.value)
        console.log(release.name)
        console.log(release.name.includes(branch.value))
        if (!release.name.includes(branch.value)) {
          data.value.splice(data.value.indexOf(release), 1)
        }
      })
      console.log(data)
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
  </div>
  <div v-else><b-spinner label="Spinning"></b-spinner></div>
  <br>
</template>


<script>
export default {
  name: "button-row",
}
</script>