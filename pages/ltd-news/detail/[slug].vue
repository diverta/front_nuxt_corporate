<template>
  <ClientOnly>
    <div>
      <UiPageHeader
        :path="[{ label: '会員限定コンテンツ', to: '/ltd-news/' }]"
        subject="会員限定コンテンツ"
        subheading="For Members"
      />

      <div class="l-container--large l-container--contents">
        <ContentDetailBody v-if="details" :details="details">
          <hr />
          <div class="l-container--contents u-pt-30 u-text-align-center">
            <NuxtLink :to="'/ltd-news/'" class="c-button">
              会員限定コンテンツ一覧へ戻る
            </NuxtLink>
          </div>
        </ContentDetailBody>

        <!-- when exclusive details content can't be fetched -->
        <template v-else>
          <div v-if="isLoggedIn">
            <p class="c-alert__heading">
              プレミアム会員会員限定コンテンツです。
            </p>
            <p class="c-alert__message">
              マイページよりプレミアム会員にアップデートしてご覧ください。
            </p>
            <NuxtLink to="/mypage" class="c-button u-pa-15"
              >マイページ</NuxtLink
            >
          </div>
          <div v-else>
            <p class="c-alert__heading">会員会員限定コンテンツです。</p>
            <p class="c-alert__message">
              会員登録またはログインしてご覧ください。
            </p>
            <NuxtLink to="/login/register" class="c-button u-pa-15"
              >会員登録</NuxtLink
            >
            <NuxtLink to="/login" class="c-button u-pa-15 u-ml-10"
              >ログイン</NuxtLink
            >
          </div>
        </template>
      </div>
    </div>
  </ClientOnly>
</template>

<script setup>
const config = useRuntimeConfig();

const { isLoggedIn } = useAuth();

const route = useRoute();
const { data } = await useFetch(
  `${config.public.kurocoApiDomain}/rcms-api/1/ltd-news/details/${route.params.slug}`,
  {
    credentials: 'include',
  }
);
const details = data?.value?.details;
</script>
