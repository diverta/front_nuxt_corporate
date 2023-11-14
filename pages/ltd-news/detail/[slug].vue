<template>
  <ClientOnly>
    <div>
      <UiPageHeader
        :path="[{ label: '会員限定コンテンツ', to: '/ltd-news/' }]"
        subject="会員限定コンテンツ"
        subheading="For Members"
      />

      <div class="l-container--large l-container--contents">
        <article v-if="response?.details" class="c-article">
          <header>
            <h1 class="c-heading--lv1">
              {{ response.details.subject }}
            </h1>
            <time class="c-topics__date" :datetime="response.details.ymd">{{
              response.details.ymd
            }}</time>
            <span class="c-badge">
              {{ response.details.contents_type_nm }}
            </span>
          </header>
          <div class="l-container--contents">
            <div v-html="response.details.contents"></div>
          </div>

          <hr />
          <div class="l-container--contents u-pt-30 u-text-align-center">
            <NuxtLink :to="'/ltd-news/'" class="c-button">
              会員限定コンテンツ一覧へ戻る
            </NuxtLink>
          </div>
        </article>

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
// use $fetch() instead of useFetch() to avoid using cache.
// for the specific case that user can not see this page after changing Regular -> Premium,
// must fetch data in client side all the time.
const response = await $fetch(
  `${config.public.kurocoApiDomain}/rcms-api/1/ltd-news/details/${route.params.slug}`,
  {
    credentials: 'include',
    server: false,
  }
).catch((error) => console.info(error));
</script>
