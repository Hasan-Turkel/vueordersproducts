
<script setup lang="ts">
import useProductsCalls from '@/hooks/useProductsCalls'
import { onMounted, } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const id = route.params.id
const { getProduct, detailData: product } = useProductsCalls()

onMounted(() => {
  getProduct(id)
})
</script>

<template>
 <main className="d-flex justify-content-center">
  <div className="card mt-2" style="width: 300px;">
    <div className="p-2">
      <h5 >Name</h5> 
      <p > {{ product.name }}</p> 
      <h5 >Price</h5>
    <p >{{ product.price}}</p>
    <h5 >Product Date</h5> 
      <p >{{ product.createDate }}</p>
        <button className="btn btn-primary mx-3 " @click="router.push('/orders/detail/'+order.id)">Update</button>
        <button className="btn btn-danger mx-3 " @click="router.push('/orders/detail/'+order.id)">Delete</button>
      </div>
    </div>
 </main>
</template>