<template>
  <ClientOnly>
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
  </ClientOnly>
</template>

<script setup>
const config = useRuntimeConfig();

const response = await $fetch(
  `${config.public.kurocoApiDomain}/rcms-api/1/content/details/privacy`,
  {
    credentials: 'include',
    server: false
  }
);
</script>
