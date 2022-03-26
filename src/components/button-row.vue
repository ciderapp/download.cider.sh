<script setup>
  import { ref } from 'vue'
  import { defineProps, toRefs } from "vue";
  const props = defineProps({
    branch: String,
    displayName: String,
  });

  const { branch, displayName } = toRefs(props);
  const data = ref(null)
  const error = ref(null)

fetch('https://api.github.com/repos/ciderapp/cider-releases/releases')
    .then((res) => res.json())
    .then((json) => (data.value = json))
    .then((data) => {
      data.forEach((release) => {
        if (!String(release.name).includes(branch.value)){
          release.delete()
        }
      })
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
  <div v-if="error">Not Available </div>
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