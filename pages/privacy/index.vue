<template>
  <div>
    <UiNavLink :subject="response.details.subject" />
    <ContentPlainBody v-bind="response.details" :subheading="subheading" />
  </div>
</template>

<script setup>
const subheading = 'Privacy Policy';

const { data: response } = await useKurocoApi(
  '/rcms-api/1/content/details/privacy'
);
</script>
