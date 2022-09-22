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
fetch(targetURL)
    .then(async (res) => {
      let release = await res.json()
      release.sort((a, b) => { return Date.parse(b.published_at) - Date.parse(a.published_at) })
      data.value = release.filter(release => release.name.includes(branch.value))
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
  <div v-if="data"><pre>{{ data[0].tag_name }}</pre></div>
  <div v-else><b-skeleton width="100%" height="200%"></b-skeleton></div>
  <div v-if="error"> <b-button-group class="mr-1">
      <b-button :href="'https://github.com/ciderapp/cider-releases/releases/'" style="margin:5px;" variant="light">Releases</b-button>
    </b-button-group> 
  </div>
  <div v-else-if="data">
    <b-button-group class="mr-1 mac" v-for="file in data[0].assets" :key="file">
        <b-button v-b-tooltip.hover style="margin-inline:5px" title="MacOS DMG File" variant="light" v-if="file.name.toString().endsWith('.dmg')" :href="file.browser_download_url">DMG</b-button>
        <b-button v-b-tooltip.hover style="margin-inline:5px" title="MacOS PKG File" variant="light" v-if="file.name.toString().endsWith('.pkg')" :href="file.browser_download_url">PKG</b-button>
    </b-button-group>
    <b-button-group class="mr-1 linux" v-for="file in data[0].assets" :key="file">
      <b-button v-b-tooltip.hover style="margin-inline:5px" title="Linux Debian Package" variant="light" v-if="file.name.toString().endsWith('.deb')" :href="file.browser_download_url">Debian</b-button>
      <b-button v-b-tooltip.hover style="margin-inline:5px" title="Linux App Image" variant="light" v-if="file.name.toString().endsWith('.AppImage')" :href="file.browser_download_url">AppImage</b-button>
      <b-button v-b-tooltip.hover style="margin-inline:5px" title="Linux Snap Package" variant="light" v-if="file.name.toString().endsWith('.snap')"  :href="file.browser_download_url">Snap</b-button>
    </b-button-group>
    <b-button-group class="mr-1 windows" v-for="file in data[0].assets" :key="file">
      <b-button v-b-tooltip.hover style="margin-inline:5px" title="Windows Executable" variant="light" v-if="!file.name.toString().includes('winget') && file.name.toString().endsWith(`.exe`)" :href="file.browser_download_url">Exe</b-button>
    </b-button-group>
      <!-- <b-button :href="file.browser_download_url" style="margin:5px;" variant="light" v-if="!String(file.name).endsWith('.yml') && !String(file.name).endsWith('.blockmap') && !String(file.name).endsWith('.exe') && !showwin">.{{ String(file.name).split('.')[String(file.name).split('.').length - 1]}}</b-button> -->
      <!-- <b-button :href="file.browser_download_url" style="margin:5px;" variant="light" v-if="!String(file.name).endsWith('.yml') && !String(file.name).endsWith('.blockmap') && !String(file.name).includes('winget') && showwin">.{{ String(file.name).split('.')[String(file.name).split('.').length - 1]}}</b-button> -->
    <br>
    <div class="extras" v-if="branch === 'main'" style="display:flex;gap:10px;justify-content:center;margin-block:10px;">
      <a href="https://aur.archlinux.org/packages/cider-git"> <img src="https://img.shields.io/badge/AUR-100000?style=for-the-badge&logo=archlinux"></a>
      <a href="https://winstall.app/apps/CiderCollective.Cider.Nightly"> <img src="https://custom-icon-badges.herokuapp.com/badge/Winget_-100000?style=for-the-badge&logo=winstall"></a>  
    </div>
    <div class="extras linux" v-if="branch === 'stable'" style="display:flex;gap:10px;justify-content:center;margin-block:10px;">
      <a href="https://flathub.org/apps/details/sh.cider.Cider"> <img src="https://img.shields.io/badge/-Flathub-100000?style=for-the-badge&logo=flathub"></a> 
      <a href="https://aur.archlinux.org/packages/cider"> <img src="https://img.shields.io/badge/AUR-100000?style=for-the-badge&logo=archlinux"></a>
    </div>
    
    <div class="extras windows" v-if="branch === 'stable'" style="display:flex;gap:10px;justify-content:center;">
      <a href="https://community.chocolatey.org/packages/cider"> <img src="https://custom-icon-badges.herokuapp.com/badge/Chocolatey_-100000?style=for-the-badge&logo=chocolatey"></a>
      <a href="https://winstall.app/apps/CiderCollective.Cider"> <img src="https://custom-icon-badges.herokuapp.com/badge/Winget_-100000?style=for-the-badge&logo=winstall"></a>  
    </div>
  </div>
  <div v-else><b-spinner label="Spinning"></b-spinner></div>
  <br>
</template>


<script>
export default {
  name: "button-row",
}
</script>

<style scoped>
  .mr-1{
    margin-block: 5px;
  }
  </style>