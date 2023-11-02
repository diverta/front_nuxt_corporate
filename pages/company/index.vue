<template>
  <div>
    <UiNavLink :subject="response.details.subject" />
    <article class="c-article">
      <UiPagetitle
        :subject="response.details.subject"
        :subheading="subheading"
      />
      <div class="l-container--large l-container--contents">
        <div v-html="response.details.contents"></div>
      </div>
    </article>
  </div>
</template>

<script setup>
const config = useRuntimeConfig();

const subheading = 'Company';

const { data: response } = await useFetch(
  `${config.public.kurocoApiDomain}/rcms-api/1/content/details/company`
);
</script>
