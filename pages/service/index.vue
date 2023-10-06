<template>
  <div v-if="response" class="l-container--wrap">
    <UiNavLink :subject="response.details.subject" />
    <ContentPlainBody v-bind="response.details" :subheading="subheading" />
  </div>
</template>

<script setup>
const subheading = 'Service';

const { data: response } = await useKurocoApi(
  '/rcms-api/1/content/details/service'
);
</script>
