<script setup lang="ts">
import OrderCardVue from '@/components/OrderCard.vue'
import NewOrderModal from '@/components/NewOrderModal.vue'
import useOrdersCalls from '@/hooks/useOrdersCalls'
import { onMounted, ref } from 'vue'

const { getOrders, data: orders } = useOrdersCalls()

onMounted(() => {
  getOrders()
})

const open = ref<boolean>(false)

const showModal = () => {
  open.value = true
}
const hideModal = () => {
  open.value = false
}
</script>

<template>
  <main className="row justify-content-center w-100 mx-0 gap-4 p-2">
    <div className="text-center">
      <button className="btn btn-primary mt-2 " style="width: 300px" @click="showModal">
        New Order
      </button>
    </div>

    <a-spin v-if="!orders?.length" size="large"/>

    <OrderCardVue v-for="order in orders" :key="order.id" :order="order" />
    <NewOrderModal :open="open" :getOrders="getOrders" @hideModal="hideModal" />
  </main>
</template>
