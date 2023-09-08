<template>
  <NuxtLayout>
    <div class="l-container--wrap">
      <UiNavLink v-bind="response.details" />
      <ContentPlainBody v-bind="response.details" />
    </div>
  </NuxtLayout>
</template>

<script setup>
const { data: response } = await useFetch(
  "https://dev-nuxt-corporate.g.kuroco.app/rcms-api/1/content/details/privacy"
);
</script>
