<template>
  <div>
    <UiPageHeader
      :subject="response.details.subject"
      subheading="Privacy Policy"
    />

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
  `${config.public.kurocoApiDomain}/rcms-api/1/content/details/privacy`,
  {
    credentials: 'include',
  }
);
</script>
