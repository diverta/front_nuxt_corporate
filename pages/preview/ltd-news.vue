<template>
  <ClientOnly>
    <div>
      <UiNavLink :path="path" :subject="details.subject" />
      <UiPagetitle :subject="details.group_nm" :subheading="subheading" />
      <div class="l-container--large l-container--contents">
        <ContentDetailBody v-if="details" :details="details" :button="button" />
      </div>
    </div>
  </ClientOnly>
</template>

<script setup>
const path = [{ label: '会員限定コンテンツ', to: '/ltd-news/' }];
const button = [{ label: '会員限定コンテンツ一覧へ戻る', to: '/ltd-news/' }];
const subheading = 'For Members';
const subject = '会員限定コンテンツ';

const route = useRoute();
const preview_token = route.query.preview_token;

const response = await useFetch(`/rcms-api/1/preview`, {
  params: {
    preview_token,
  },
  server: false,
});
const details = response?.details;
</script>
