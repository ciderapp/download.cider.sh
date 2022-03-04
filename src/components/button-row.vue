<script setup>
import { defineProps, toRefs } from "vue";
import { useFetch } from '@/useFetch'
const props = defineProps({
  branch: String,
  displayName: String,
});
const { branch, displayName } = toRefs(props);
const { data, error } = useFetch(`https://circleci.com/api/v1.1/project/gh/ciderapp/Cider/latest/artifacts?branch=${branch.value}&filter=successful`)
</script>

<template>
  <div> {{displayName}} releases</div>
  <div v-if="error">Oops! Error encountered: {{ error.message }}</div>
  <div v-if="data === null"><b-spinner label="Spinning"></b-spinner></div>
  <div v-else>
    <b-button-group class="mr-1" v-for="file in data" :key="file">
      <b-button :href="file.url" style="margin:5px;" variant="light" v-if="!String(file.path).endsWith('.yml') && !String(file.path).endsWith('.blockmap') && !String(file.path).endsWith('.exe')">.{{ String(file.path).split('/')[String(file.path).split('/').length - 1].split('.')[String(file.path).split('/')[String(file.path).split('/').length - 1].split('.').length - 1]}}</b-button>
    </b-button-group>
  </div>
</template>


<script>
export default {
  name: "button-row",
}
</script>