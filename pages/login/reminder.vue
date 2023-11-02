<template>
  <div>
    <UiPageHeader
      :path="[{ label: 'ログイン', to: '/login' }]"
      subject="パスワード再発行"
      subheading="Password Reset"
    />

    <div class="l-container--small l-container--contents">
      <form class="c-form">
        <UiAlertSuccess v-if="message !== null" :message="message" />
        <UiAlertError v-show="errors.length > 0" :error="errors" />

        <!-- リマインダーメールのリンクから遷移してきた場合 -->
        <template v-if="token">
          <div class="c-form-group">
            <p v-if="message === null">新しいパスワードを設定します。</p>
            <div v-else>
              <p>新しいパスワードを設定しました。</p>
              <p>
                <NuxtLink to="/login">ログインページ</NuxtLink
                >からログインしてください。
              </p>
            </div>
          </div>
          <div class="c-form-group">
            <label for="temporary-password" class="c-form-label"
              >仮パスワード</label
            >
            <input
              v-model="formData.temporaryPassword"
              name="temporary-password"
              type="text"
              id="temporary-password"
              placeholder="仮パスワード"
            />
          </div>
          <div class="c-form-group">
            <label for="password" class="c-form-label">新しいパスワード</label>
            <input
              v-model="formData.password"
              name="password"
              type="password"
              id="password"
              placeholder="新しいパスワード"
            />
          </div>
          <div class="c-form-group">
            <div class="u-display-flex">
              <label
                for="confirm-password"
                class="c-form-label u-display-flex-grow-1"
                >新しいパスワードの確認</label
              >
              <p class="u-ma-0 c-text--small">
                確認のためもう一度入力してください
              </p>
            </div>
            <input
              v-model="formData.confirmPassword"
              name="confirm-password"
              type="password"
              id="confirm-password"
              placeholder="新しいパスワード（確認）"
            />
          </div>
          <div class="c-form-group">
            <UiSubmitButton
              @click.prevent="resetPassword"
              :loading="loading"
              :disabled="sequenceDone"
            >
              送信
            </UiSubmitButton>
          </div>
        </template>

        <!-- 新規リマインダーリクエスト -->
        <template v-else>
          <div class="c-form-group">
            <p>パスワードリセットのメールを送信します。</p>
          </div>
          <div class="c-form-group">
            <label for="email" class="c-form-label">メールアドレス</label>
            <input
              v-model="formData.email"
              name="email"
              type="email"
              id="email"
            />
          </div>
          <div class="c-form-group">
            <UiSubmitButton
              @click.prevent="resetPasswordRequest"
              :loading="loading"
              :disabled="sequenceDone"
            >
              送信
            </UiSubmitButton>
          </div>
          <div class="c-form-group u-text-align-center">
            <NuxtLink to="/login">ログイン</NuxtLink>
          </div>
        </template>
      </form>
    </div>
  </div>
</template>

<script setup>
const config = useRuntimeConfig();

const route = useRoute();
const token = route.query.token;

const formData = reactive({
  email: '',
  temporaryPassword: '',
  password: '',
  confirmPassword: '',
});

const errors = ref([]);
const errorRef = ref(null);
const message = ref(null);

const loading = ref(false);
const sequenceDone = ref(false);

const resetPasswordRequest = async () => {
  loading.value = true;
  try {
    const response = await $fetch(
      `${config.public.kurocoApiDomain}/rcms-api/1/reminder`,
      {
        method: 'POST',
        credentials: 'include',
        body: {
          email: formData.email,
        },
      }
    );
    errors.value = [];
    message.value = response?.messages?.[0];
    sequenceDone.value = true;
  } catch (e) {
    errors.value = e?.data?.errors || [];
    nextTick(() => {
      errorRef.value.errorWrapperRef.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    });
  }
  loading.value = false;
};

const resetPassword = async () => {
  if (formData.password != formData.confirmPassword) {
    errors.value = [{ message: '確認用パスワードが一致していません' }];
    return;
  }

  loading.value = true;
  try {
    const response = await $fetch(
      `${config.public.kurocoApiDomain}/rcms-api/1/reminder`,
      {
        method: 'POST',
        credentials: 'include',
        body: {
          token,
          temp_pwd: formData.temporaryPassword,
          login_pwd: formData.password,
        },
      }
    );
    errors.value = [];
    message.value = response?.messages?.[0];
    sequenceDone.value = true;
  } catch (e) {
    errors.value = e?.data?.errors || [];
    nextTick(() => {
      errorRef.value.errorWrapperRef.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    });
  }
  loading.value = false;
};
</script>
