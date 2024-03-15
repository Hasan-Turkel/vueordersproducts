<script setup lang="ts">
import useOrdersCalls from '@/hooks/useOrdersCalls'
import { reactive } from 'vue'
import { toast } from 'vue3-toastify'

const { updateOrder } = useOrdersCalls()
const props = defineProps(['open', 'getOrder', 'order'])
const emits = defineEmits(['hideModal'])

const initialValues = reactive(props.order)

const hideModal = () => {
  emits('hideModal')
}

const  handleclick =  () => {

  if(initialValues.description &&
  initialValues.paymentType &&
  initialValues.customerName &&
  initialValues.orderDetails.length){
    updateOrder(initialValues, props.order.id)
      setTimeout(() => {
        props.getOrder(props.order.id)
      }, 1000)
      hideModal()
  } else toast.warn('Please fill all areas')
  
   
}
</script>

<template>
  <a-modal :open="props.open" :closable="false" :centered="true">
    <template #footer> </template>
    <h4 role="button" class="text-end" @click="hideModal">X</h4>

    <FormKit
      type="text"
      v-model="initialValues.description"
      name="description"
      label="Description"
      :validation="[['required']]"
    />
    <FormKit
      type="text"
      v-model="initialValues.customerName"
      name="customerName"
      label="Customer Name"
      :validation="[['required']]"
    />
    <FormKit
      type="text"
      v-model="initialValues.paymentType"
      name="paymentType"
      label="Payment Type"
      :validation="[['required']]"
    />

    <h6>Order Details</h6>
    <FormKit
      type="list"
      name="orderDetails"
      v-model="initialValues.orderDetails"
      :value="['']"
      dynamic
      #default="{ items, node, value }"
      :validation="[['required']]"
    >
      <FormKit
        v-for="(item, index) in items"
        :key="item"
        :index="index"
        placeholder="Add Order Detail"
        suffix-icon="trash"
        @suffix-icon-click="() => node.input(value?.filter((_, i) => i !== index))"
        :sections-schema="{
          suffixIcon: {
            // change wrapper to a button for accessibility
            $el: 'button'
          }
        }"
      />
      <FormKit type="button" @click="() => node.input(value?.concat(''))">
        Add Order Detail
      </FormKit>
      <p>{{ value }}</p>
    </FormKit>

    <button class="btn btn-primary" @click="handleclick">Update Order</button>
  </a-modal>
</template>

<style>
.formkit-suffix-icon {
  appearance: none;
  background: none;
  border: none;
  font-size: 1em;
}
</style>
