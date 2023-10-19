<template>
  <ClientOnly>
    <div>
      <UiNavLink :subject="response.details.subject" />
      <ContentPlainBody v-bind="response.details" />
    </div>
  </ClientOnly>
</template>

<script setup>
const route = useRoute();
const preview_token = route.query.preview_token;

const { data: response } = await useFetch('/rcms-api/1/preview', {
  params: {
    preview_token,
  },
  server: false,
});
</script>
