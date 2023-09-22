<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
if (process.client) {
  await useAuth().profile();
}
</script>
