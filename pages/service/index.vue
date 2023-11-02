<template>
  <div v-if="response" class="l-container--wrap">
    <UiNavLink :subject="response.details.subject" />
    <ContentPlainBody
      :subject="response.details.subject"
      :contents="response.details.contents"
      :subheading="subheading"
    />
  </div>
</template>

<script setup>
const config = useRuntimeConfig();

const subheading = 'Service';

const { data: response } = await useFetch(
  `${config.public.kurocoApiDomain}/rcms-api/1/content/details/service`,
  {
    credentials: 'include',
  }
);
</script>
