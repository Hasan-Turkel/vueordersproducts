<script setup lang="ts">
import ProductCardVue from '@/components/ProductCard.vue'
import NewProductModal from '@/components/NewProductModal.vue'
import useProductsCalls from '@/hooks/useProductsCalls'
import { onMounted, ref } from 'vue'

const { getProducts, data: products } = useProductsCalls()

onMounted(() => {
    getProducts()
})

const open = ref<boolean>(false);

const showModal = () => {
  open.value = true;
};
const hideModal = () => {
  open.value = false;
};


</script>

<template>
  <main
    className="row justify-content-center w-100 my-3 mx-0 gap-4"
  >
  <div className="text-center"><button className="btn btn-primary mt-2 " @click="showModal" style="width: 300px;">New Product</button></div>
  
    <ProductCardVue v-for="product in products"
    :key="product.id" :product="product" />
    <NewProductModal :open="open" :getProducts="getProducts" @hideModal="hideModal"/>
  </main>
</template>

