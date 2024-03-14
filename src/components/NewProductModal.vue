
<script setup lang="ts">
import useProductsCalls from '@/hooks/useProductsCalls'

const { sendProduct } = useProductsCalls()


const props = defineProps(['getProducts', 'open'])
const emits = defineEmits(['hideModal'])

const hideModal = () => {
  emits('hideModal')
}

async function newProduct(values: any) {
sendProduct({...values, createDate: new Date().toISOString().slice(0, 10)})
  hideModal()
  setTimeout(() => {
    props.getProducts()
  }, 1000)
}

</script>

<template >
   <a-modal v-model:open="props.open" :closable=false :centered=true>
    <template #footer>
    </template>

    <h4 role="button" class="text-end" @click="hideModal">X</h4>

    <FormKit type="form" submit-label="Create New Product" @submit="newProduct"  >
            <FormKit name="name" label="Name" :validation="[['required']]"/>
            <FormKit name="price" label="Price" :validation="[['required'], ['number']]"/>
          </FormKit>


   </a-modal> 
</template>