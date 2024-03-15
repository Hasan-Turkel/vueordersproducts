<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
<template>
  <nav class="navbar navbar-expand bg-primary px-2">
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <RouterLink class="nav-link text-white fs-4" aria-current="page" to="/orders">
            Orders
          </RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link text-white fs-4" aria-current="page" to="/products">
            Products
          </RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
.router-link-active {
  text-decoration: underline;
}
</style>
