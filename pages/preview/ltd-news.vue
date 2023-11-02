<template>
  <ClientOnly>
    <div>
      <UiPageHeader
        :path="[{ label: '会員限定コンテンツ', to: '/ltd-news/' }]"
        :subject="response.details.group_nm"
        subheading="For Members"
      />

      <div class="l-container--large l-container--contents">
        <ContentDetailBody v-if="response.details" :details="response.details">
          <hr />
          <div class="l-container--contents u-pt-30 u-text-align-center">
            <NuxtLink :to="'/ltd-news/'" class="c-button">
              会員限定コンテンツ一覧へ戻る
            </NuxtLink>
          </div>
        </ContentDetailBody>
      </div>
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
