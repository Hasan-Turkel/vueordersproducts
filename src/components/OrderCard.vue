<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const props = defineProps(['order'])
</script>

<template>
  <div className="card " style="width: 300px">
    <div className="p-2">
      <h5>Description</h5>
      <p>{{ order.description }}</p>
      <h5>Customer Name</h5>
      <p>{{ order.customerName }}</p>
      <h5>Order Date</h5>
      <p>{{ order.orderDate }}</p>
      <button
        v-if="order.id !== 1"
        className="btn btn-primary mt-2 "
        @click="router.push('/orders/detail/' + order.id)"
      >
        Go Detail
      </button>
    </div>
  </div>
</template>
