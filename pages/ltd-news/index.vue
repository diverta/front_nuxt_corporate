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
            <div v-else-if="group == 104">
              <NuxtLink to="/mypage" class="c-button u-pa-15"
                >プレミアム会員へアップグレードする</NuxtLink
              >
            </div>
            <div v-else>
              <NuxtLink to="/mypage" class="c-button u-pa-15"
                >通常会員へ戻す</NuxtLink
              >
            </div>
        </div>
        <div class="l-container--contents">
          <UiCardList v-if="newsList?.length" :list="newsList"></UiCardList>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const config = useRuntimeConfig();

const subject = '会員限定コンテンツ';
const subheading = 'For Members';

// TODO switch display by member status
const group = ref(null);
// if (this.$auth.user.member_id != null) {
//   if ("105" in this.$auth.user.group_ids) {
//     group.value = 105;
//   } else if ("104" in $auth.user.group_ids) {
//     group.value = 104;
//   }
// }

const { data: newsList } = await useAsyncData('ltd-news', async () => {
  const ltdList = await $fetch(
    `${config.public.baseURL}/rcms-api/1/ltd-news/list`,
    {
      params: { cnt: 12 },
    }
  );
  return ltdList.data.list;
});
</script>
