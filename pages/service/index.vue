<template>
  <NuxtLayout>
    <div class="l-container--wrap">
      <UiNavLink :subject="response.details.subject" />
      <ContentPlainBody v-bind="response.details" :subheading="subheading" />
    </div>
  </NuxtLayout>
</template>

<script setup>
const config = useRuntimeConfig();
const subheading = "Service";

const { data: response } = await useFetch(
  `${config.public.baseURL}/rcms-api/1/content/details/service`
);
</script>
