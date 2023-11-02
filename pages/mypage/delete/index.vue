<template>
  <div>
    <UiPageHeader :path="path" :subject="subject" :subheading="subheading" />
    <section>
      <div class="l-container--small l-container--contents">
        <template v-if="deleteDone">
          <UiAlertSuccess :message="message" />
          <div class="c-form u-text-align-center">
            <NuxtLink to="/">トップへ戻る</NuxtLink>
          </div>
        </template>
        <template v-else>
          <div class="c-form">
            <div class="c-form-group">
              <p>
                メンバー情報を完全に削除します。<br />本当によろしいですか？
              </p>
            </div>
            <div class="c-form-group">
              <UiSubmitButton
                type="button"
                @click.prevent="handleDeleteProfile"
                :loading="loading"
              >
                削除する
              </UiSubmitButton>
            </div>
            <div class="c-form-group u-text-align-center">
              <NuxtLink to="/mypage/">マイページへ戻る</NuxtLink>
            </div>
          </div>
        </template>
      </div>
    </section>
  </div>
</template>

<script setup>
const config = useRuntimeConfig();

const { logout } = useAuth();

const path = [{ label: 'マイページ', to: '/mypage/' }];
const subject = '退会';
const subheading = 'Delete';
const message = '退会が完了しました。';
const deleteDone = ref(false);
const error = ref(null);

const loading = ref(false);

const handleDeleteProfile = async () => {
  loading.value = true;
  try {
    await $fetch(`${config.public.kurocoApiDomain}/rcms-api/1/member/delete`, {
      credentials: 'include',
      method: 'POST',
      body: {},
    });
    await logout();
    deleteDone.value = true;
  } catch (e) {
    error.value = e?.data?.errors?.[0]?.message;
  }
  loading.value = false;
};
</script>
