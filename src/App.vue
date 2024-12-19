<script setup lang="ts">
import HeaderComponent from "@components/header.vue";
import FooterComponent from "@components/footer.vue";
</script>

<template>
  <main>
    <div class="flex flex-col h-full">
      <HeaderComponent />

      <div class="flex grow">
        <RouterView />
      </div>

      <FooterComponent />
    </div>
  </main>
</template>
