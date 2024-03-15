<script setup lang="ts">
import useOrdersCalls from '@/hooks/useOrdersCalls'
import { reactive } from 'vue'

import { toast } from 'vue3-toastify'

const { sendOrder } = useOrdersCalls()
const props = defineProps(['open', 'getOrders'])
const emits = defineEmits(['hideModal'])

const formValues = reactive({
  orderDate: new Date().toISOString().slice(0, 10),
  description: '',
  paymentType: '',
  orderDetails: [],
  customerName: ''
})

const hideModal = () => {
  emits('hideModal')
  Object.assign(formValues, {
    orderDate: new Date().toISOString().slice(0, 10),
    description: '',
    paymentType: '',
    orderDetails: [],
    customerName: ''
  })
}

const handleclick = () => {
  formValues.description &&
  formValues.paymentType &&
  formValues.customerName &&
  formValues.orderDetails.length
    ? sendOrder(formValues) &&
      setTimeout(() => {
        props.getOrders()
      }, 1000) &&
      Object.assign(formValues, {
        orderDate: new Date().toISOString().slice(0, 10),
        description: '',
        paymentType: '',
        orderDetails: [],
        customerName: ''
      }) &&
      hideModal()
    : toast.warn('Please fill all areas')
}
</script>

<template>
  <a-modal :open="props.open" :closable="false" :centered="true">
    <template #footer> </template>
    <h4 role="button" class="text-end" @click="hideModal">X</h4>

    <FormKit
      type="text"
      v-model="formValues.description"
      name="description"
      label="Description"
      :validation="[['required']]"
    />
    <FormKit
      type="text"
      v-model="formValues.customerName"
      name="customerName"
      label="Customer Name"
      :validation="[['required']]"
    />
    <FormKit
      type="text"
      v-model="formValues.paymentType"
      name="paymentType"
      label="Payment Type"
      :validation="[['required']]"
    />

    <h6>Order Details</h6>
    <FormKit
      type="list"
      name="orderDetails"
      v-model="formValues.orderDetails"
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
        @suffix-icon-click="() => node.input(value.filter((_, i) => i !== index))"
        :sections-schema="{
          suffixIcon: {
            // change wrapper to a button for accessibility
            $el: 'button'
          }
        }"
      />
      <FormKit type="button" @click="() => node.input(value.concat(''))">
        Add Order Detail
      </FormKit>
      <p>{{ value }}</p>
    </FormKit>

    <button class="btn btn-primary" @click="handleclick">Create New Order</button>
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
