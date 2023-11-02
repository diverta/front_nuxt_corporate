<template>
  <ClientOnly>
    <div>
      <UiNavLink :subject="response.details.subject" />
      <ContentPlainBody
        :subject="response.details.subject"
        :contents="response.details.contents"
      />
    </div>
  </ClientOnly>
</template>

<script setup>
const config = useRuntimeConfig();

const route = useRoute();
const preview_token = route.query.preview_token;

const { data: response } = await useFetch(
  `${config.public.kurocoApiDomain}/rcms-api/1/preview`,
  {
    credentials: 'include',
    params: {
      preview_token,
    },
    server: false,
  }
);
</script>
