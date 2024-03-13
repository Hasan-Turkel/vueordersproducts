<script setup lang="ts">
import OrderCardVue from '@/components/OrderCard.vue'
import useOrdersCalls from '@/hooks/useOrdersCalls'
import { onMounted, } from 'vue'

const { getOrders, data: orders } = useOrdersCalls()

onMounted(() => {
  getOrders()
})


</script>

<template>
  <main
    className="row justify-content-center w-100 my-3 mx-0 gap-4"
  >
  <div className="text-center"><button className="btn btn-primary mt-2 " @click="router.push('/orders/detail/'+order.id)" style="width: 300px;">New Order</button></div>
  
    <OrderCardVue v-for="order in orders"
    :key="order.id" :order="order" />
  </main>
</template>

