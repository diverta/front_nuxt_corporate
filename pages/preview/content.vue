<template>
  <ClientOnly>
    <div>
      <UiPageHeader :subject="response.details.subject" />

      <article class="c-article">
        <div class="l-container--large l-container--contents">
          <div v-html="response.details.contents"></div>
        </div>
      </article>
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
