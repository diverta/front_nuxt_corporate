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

const response = await $fetch(
  `${config.public.kurocoApiDomain}/rcms-api/1/content/details/service`,
  {
    credentials: "include",
    server: false,
  }
).catch((error) => console.info(error));
</script>
