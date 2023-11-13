<template>
  <div v-if="response" class="l-container--wrap">
    <UiPageHeader :subject="response.details.subject" subheading="Service" />

    <article class="c-article">
      <div class="l-container--large l-container--contents">
        <div v-html="response.details.contents"></div>
      </div>
    </article>
  </div>
</template>

<script setup>
const config = useRuntimeConfig();

const { data: response } = await useFetch(
  `${config.public.kurocoApiDomain}/rcms-api/1/content/details/service`,
  {
    credentials: 'include',
  }
);
</script>
