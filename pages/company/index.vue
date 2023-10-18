<template>
  <div>
    <UiNavLink :subject="response.details.subject" />
    <ContentPlainBody v-bind="response.details" :subheading="subheading" />
  </div>
</template>

<script setup>
const subheading = 'Company';
const { data: response } = await useFetch(
  '/rcms-api/1/content/details/company'
);
</script>
