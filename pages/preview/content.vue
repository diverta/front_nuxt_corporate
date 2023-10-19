<template>
  <div>
    <UiNavLink :subject="response.details.subject" />
    <ContentPlainBody v-bind="response.details" />
  </div>
</template>

<script setup>
const route = useRoute();
const preview_token = route.query.preview_token;

const response = await $fetch('/rcms-api/1/preview', {
  params: {
    preview_token,
  },
});
</script>
