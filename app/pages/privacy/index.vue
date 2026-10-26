<template>
  <div v-if="response?.details">
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
useSeoMeta({
  title: "プライバシーポリシー | front_nuxt_corporate",
  description: "個人情報の取り扱いと保護に関する方針をご案内します。",
});

const config = useRuntimeConfig();

const { data: response } = await useFetch(
  `${config.public.kurocoApiDomain}/rcms-api/1/content/details/privacy`,
  {
    credentials: "include",
    server: false,
  }
);
</script>
