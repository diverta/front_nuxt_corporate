<template>
  <div class="l-container--wrap">
    <UiNavLink :subject="subject" />
    <section>
      <UiPagetitle :subject="subject" :subheading="subheading" />
      <div class="l-container--large">
        <div class="l-container--contents c-article">
          <p>
            このページは以下の会員ステータスによって表示の出し分けをするように設計されています。<br />
          </p>
          <ul>
            <li>
              <span class="c-badge u-mr-10">プレミアム会員限定</span
              >プレミアム会員のみ閲覧可能
            </li>
            <li>
              <span class="c-badge u-mr-10">会員限定</span
              >会員登録をすると閲覧可能（プレミアム会員、通常会員）
            </li>
            <li>
              <span class="c-badge u-mr-10">誰でも閲覧可能</span
              >会員登録しなくても閲覧可能
            </li>
          </ul>
          <p>
            会員登録またはマイページから会員ステータスの変更、ログアウトすることで表示の確認ができます。
          </p>
          <div v-if="group == null">
            <NuxtLink to="/login/register" class="c-button u-pa-15"
              >会員登録</NuxtLink
            >
          </div>
          <div v-else>
            <NuxtLink to="/mypage" class="c-button u-pa-15">{{
              group
            }}</NuxtLink>
          </div>
        </div>
        <div class="l-container--contents">
          <UiCardList :list="newsList"></UiCardList>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const { authUser } = useAuth();
const config = useRuntimeConfig();

const subject = '会員限定コンテンツ';
const subheading = 'For Members';

const group = computed(() => {
  if (authUser.value.isPremiumUser) {
    return '通常会員へ戻す';
  }
  if (authUser.value.isRegularUser) {
    return 'プレミアム会員へアップグレードする';
  }
  return null;
});

const { data } = await useFetch(
  '/rcms-api/1/ltd-news/list',
  {
    params: { cnt: 12 },
  },
  { server: false }
);
const newsList = computed(() => data?.value?.data?.list || []);
</script>
