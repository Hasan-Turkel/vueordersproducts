<script setup lang="ts">
import useProductsCalls from '@/hooks/useProductsCalls'
import { reactive } from 'vue'

const { updateProduct } = useProductsCalls()

const props = defineProps(['getProduct', 'open', 'product'])
const emits = defineEmits(['hideModal'])
const initialValues = reactive(props?.product)

const hideModal = () => {
  emits('hideModal')
}

async function newProduct(values: any) {
  updateProduct(values, props.product.id)
  hideModal()
  setTimeout(() => {
    props.getProduct(props.product.id)
  }, 1000)
}
</script>

<template>
  <a-modal :open="props.open" :closable="false" :centered="true">
    <template #footer> </template>

    <h4 role="button" class="text-end" @click="hideModal">X</h4>

    <FormKit type="form" submit-label="Update Product" @submit="newProduct">
      <FormKit v-model="initialValues.name" name="name" label="Name" :validation="[['required']]" />
      <FormKit
        v-model="initialValues.price"
        name="price"
        label="Price"
        :validation="[['required'], ['number']]"
      />
    </FormKit>
  </a-modal>
</template>
