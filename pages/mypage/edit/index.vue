<template>
  <ClientOnly>
    <div>
      <UiPageHeader
        :path="[{ label: 'マイページ', to: '/mypage/' }]"
        subject="マイページ"
        subheading="Edit Profile"
      />

      <section>
        <div class="l-container--small l-container--contents">
          <template v-if="updateProfileDone">
            <UiAlertSuccess :message="message" />
            <div class="c-form u-text-align-center">
              <NuxtLink to="/mypage">マイページへ戻る</NuxtLink>
            </div>
          </template>
          <template v-else>
            <UiAlertError v-if="error" :error="error" />
            <form @submit.prevent="handleUpdateProfile" class="c-form">
              <div class="c-form-group">
                <label for="name1" class="c-form-label">名前（姓）</label>
                <span class="c-form-label__required">*</span>
                <input
                  v-model="user.name1"
                  name="name1"
                  id="name1"
                  type="text"
                />
              </div>
              <div class="c-form-group">
                <label for="name2" class="c-form-label">名前（名）</label>
                <input
                  v-model="user.name2"
                  name="name2"
                  id="name2"
                  type="text"
                />
              </div>
              <div class="c-form-group">
                <label for="email" class="c-form-label">メールアドレス</label>
                <input
                  v-model="user.email"
                  name="email"
                  id="email"
                  type="email"
                />
              </div>
              <div class="c-form-group">
                <label class="c-form-label">会員種別</label>
                <div>{{ statusText }}</div>
              </div>
              <div class="c-form-group">
                <UiSubmitButton type="submit" :loading="loading">
                  更新する
                </UiSubmitButton>
              </div>
              <div class="c-form-group u-text-align-center">
                <NuxtLink to="/mypage/">マイページへ戻る</NuxtLink>
              </div>
            </form>
          </template>
        </div>
      </section>
    </div>
  </ClientOnly>
</template>

<script setup>
const config = useRuntimeConfig();

await useAuth().profile();
const { authUser, profile } = useAuth();

const message = '会員情報の更新が完了しました。';
const updateProfileDone = ref(false);
const error = ref(null);
const loading = ref(false);

const user = ref({
  name1: authUser.value.name1,
  name2: authUser.value.name2,
  email: authUser.value.email,
});

const statusText = computed(() => {
  if (authUser.value.isPremiumUser) {
    return 'プレミアム会員';
  }
  if (authUser.value.isRegularUser) {
    return '通常会員';
  }
  return '';
});

const handleUpdateProfile = async () => {
  loading.value = true;
  try {
    await $fetch(`${config.public.kurocoApiDomain}/rcms-api/1/member/update`, {
      credentials: 'include',
      method: 'POST',
      body: { ...user.value },
    });
    await profile();
    updateProfileDone.value = true;
  } catch (e) {
    error.value = e?.data?.errors;
  }
  loading.value = false;
};
</script>
