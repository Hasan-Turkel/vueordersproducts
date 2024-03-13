<script setup lang="ts">
import ProductCardVue from '@/components/ProductCard.vue'
import useProductsCalls from '@/hooks/useProductsCalls'
import { onMounted, } from 'vue'

const { getProducts, data: products } = useProductsCalls()

onMounted(() => {
    getProducts()
})


</script>

<template>
  <main
    className="row justify-content-center w-100 my-3 mx-0 gap-4"
  >
  <div className="text-center"><button className="btn btn-primary mt-2 " @click="router.push('/products/detail/'+product.id)" style="width: 300px;">New Product</button></div>
  
    <ProductCardVue v-for="product in products"
    :key="product.id" :product="product" />
  </main>
</template>

