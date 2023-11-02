<template>
  <ClientOnly>
    <div>
      <UiNavLink :path="path" :subject="response.details.subject" />
      <UiPagetitle
        :subject="response.details.group_nm"
        :subheading="subheading"
      />
      <div class="l-container--large l-container--contents">
        <ContentDetailBody
          v-if="response.details"
          :details="response.details"
          :button="button"
        />
      </div>
    </div>
  </ClientOnly>
</template>

<script setup>
const config = useRuntimeConfig();

const path = [{ label: '会員限定コンテンツ', to: '/ltd-news/' }];
const button = [{ label: '会員限定コンテンツ一覧へ戻る', to: '/ltd-news/' }];
const subheading = 'For Members';
const subject = '会員限定コンテンツ';

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
