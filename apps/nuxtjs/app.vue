<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
const sitetitle = 'Audiophile e-commerce website | Frontend Mentor'
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} | ${sitetitle}` : sitetitle
  },
})
</script>
