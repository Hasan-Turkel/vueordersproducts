
<script setup lang="ts">

const props = defineProps(['open'])
const emits = defineEmits(['hideModal'])

const hideModal = ()=>{
  emits("hideModal")
}

</script>

<template>

<a-modal v-model:open="props.open" :closable=false :centered=true>
  <template #footer>
  </template>
<p  @click="hideModal">{{ props.open }}</p>
</a-modal> 
    
</template>