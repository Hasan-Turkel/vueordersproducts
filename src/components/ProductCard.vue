<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const props = defineProps(['product'])
</script>

<template>
  <div className="card " style="width: 300px">
    <div className="p-2">
      <h5>Name</h5>
      <p>{{ product.name }}</p>
      <h5>Price</h5>
      <p>{{ product.price }} $</p>
      <button
        className="btn btn-primary mt-2 "
        @click="router.push('/products/detail/' + product.id)"
      >
        Go Detail
      </button>
    </div>
  </div>
</template>
