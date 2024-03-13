<script setup lang="ts">
import useOrdersCalls from '@/hooks/useOrdersCalls'
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import DeleteModal from '@/components/DeleteModal.vue'

const route = useRoute()
const id = route.params.id
const { getOrder, detailData: order } = useOrdersCalls()

const source = 'order'

onMounted(() => {
  getOrder(id)
})
</script>

<template>
  <main className="d-flex justify-content-center">
    <div className="card mt-2" style="width: 300px">
      <div className="p-2">
        <h5>Description</h5>
        <p>{{ order.description }}</p>
        <h5>Customer Name</h5>
        <p>{{ order.customerName }}</p>
        <h5>Order Details</h5>
        <p v-for="orderDetail in order.orderDetails" :key="orderDetail" :order="order">
          {{ orderDetail }}
        </p>
        <h5>Payment Type</h5>
        <p>{{ order.paymentType }}</p>
        <h5>Order Date</h5>
        <p>{{ order.orderDate }}</p>
        <button
          className="btn btn-primary mx-3 "
          @click="router.push('/orders/detail/' + order.id)"
        >
          Update
        </button>
        <button className="btn btn-danger mx-3 " data-bs-toggle="modal" data-bs-target="#del">
          Delete
        </button>
      </div>
    </div>
    <DeleteModal :id="order.id" :source="'order'" />
  </main>
</template>
