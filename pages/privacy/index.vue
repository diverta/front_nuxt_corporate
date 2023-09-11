<template>
  <NuxtLayout>
    <div>
      <UiNavLink :subject="response.details.subject" />
      <ContentPlainBody v-bind="response.details" :subheading="subheading" />
    </div>
  </NuxtLayout>
</template>

<script setup>
const subheading = "Privacy Policy";
const { data: response } = await useFetch(
  "https://dev-nuxt-corporate.g.kuroco.app/rcms-api/1/content/details/privacy"
);
</script>
