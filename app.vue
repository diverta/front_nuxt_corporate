<template>
  <NuxtLayout>
    <div>
      <NuxtLoadingIndicator />
      <NuxtPage />
    </div>
  </NuxtLayout>
</template>

<script setup>
await useAuth().profile();
</script>
