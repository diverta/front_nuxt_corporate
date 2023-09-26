<template>
  <ClientOnly>
    <div>
      <UiNavLink :path="path" :subject="subject" />
      <UiPagetitle
        :subject="subject"
        :subheading="subheading"
      />
      <div class="l-container--large l-container--contents">
        <ContentDetailBody v-if="details" :details="details" :button="button" />
        <div v-else-if="isLoggedIn">プレミアム会員会員限定コンテンツです。</div>
        <div v-else>ログインしてください。</div>
      </div>
    </div>
  </ClientOnly>
</template>

<script setup>
const path = [{ label: '会員限定コンテンツ', to: '/ltd-news/' }];
const button = [{ label: '会員限定コンテンツ一覧へ戻る', to: '/ltd-news/' }];
const subheading = 'For Members';
const subject = "会員限定コンテンツ";

const { isLoggedIn } = useAuth();

const route = useRoute();
const { data } = await useKurocoApi(
  `/rcms-api/1/ltd-news/details/${route.params.slug}`
);
const details = data?.value?.details;
console.log('DETAILS', details);
</script>
