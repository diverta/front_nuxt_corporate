<template>
  <div>
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

const subheading = 'Privacy Policy';

const { data: response } = await useFetch(
  `${config.public.kurocoApiDomain}/rcms-api/1/content/details/privacy`,
  {
    credentials: 'include',
  }
);
</script>
