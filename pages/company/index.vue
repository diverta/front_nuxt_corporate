<template>
  <div>
    <UiNavLink :subject="response.details.subject" />
    <ContentPlainBody v-bind="response.details" :subheading="subheading" />
  </div>
</template>

<script setup>
const config = useRuntimeConfig();
const subheading = 'Company';
const { data: response } = await useFetch(
  `${config.public.baseURL}/rcms-api/1/content/details/company`
);
</script>
