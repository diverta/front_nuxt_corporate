<template>
  <div>
    {{ alertIsOpen }}
    <UiNavLink v-if="details != null" :path="path" :subject="details.subject" />
    <UiPagetitle
      v-if="details != null"
      :subject="details.group_nm"
      :subheading="subheading"
    />
    <div class="l-container--large l-container--contents">
      <ContentDetailBody
        v-if="details != null"
        :details="details"
        :button="button"
      />
      <div v-else-if="profileRes.member_id != null">
        プレミアム会員会員限定コンテンツです。
      </div>
      <div v-else>ログインしてください。</div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: 'auth',
  meta: {
    auth: {
      redirect: '/ltd-news/',
      callback: () => window?.alert?.('ログインしてください。'), // TODO better snackbar
    },
  },
});

const path = [{ label: '会員限定コンテンツ', to: '/ltd-news/' }];
const button = [{ label: '会員限定コンテンツ一覧へ戻る', to: '/ltd-news/' }];
const subheading = 'For Members';

const alertIsOpen = ref(false);

const { data } = await useAsyncData(
  `/ltd-news/detail/${params.slug}/`,
  async ({ $axios, params }) => {
    const profileRes = await $axios.$get('/rcms-api/1/profile');
    try {
      const { details } = await $axios.$get(
        `/rcms-api/1/ltd-news/details/${params.slug}`
      );
      return { details, profileRes };
    } catch (error) {
      console.log(error.message);
      return { error, profileRes };
    }
  }
);
</script>
