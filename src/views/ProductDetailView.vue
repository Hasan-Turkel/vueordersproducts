<script setup lang="ts">
import useProductsCalls from '@/hooks/useProductsCalls'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import DeleteModal from '@/components/DeleteModal.vue'
import UpdateProductModal from '@/components/UpdateProductModal.vue'

const route = useRoute()
const id = route.params.id
const { getProduct, detailData: product } = useProductsCalls()

onMounted(() => {
  getProduct(id)
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
  <main className="d-flex justify-content-center">
    <div className="card mt-2" style="width: 300px">
      <div className="p-2">
        <h5>Name</h5>
        <p>{{ product.name }}</p>
        <h5>Price</h5>
        <p>{{ product.price }} $</p>
        <h5>Product Date</h5>
        <p>{{ product.createDate }}</p>
        <button className="btn btn-primary mx-3 " @click="showModal">Update</button>
        <button className="btn btn-danger mx-3 " data-bs-toggle="modal" data-bs-target="#del">
          Delete
        </button>
      </div>
    </div>
    <DeleteModal :id="product.id" :source="'product'" />
    <UpdateProductModal
      :open="open"
      :product="product"
      :getProduct="getProduct"
      @hideModal="hideModal"
    />
  </main>
</template>
