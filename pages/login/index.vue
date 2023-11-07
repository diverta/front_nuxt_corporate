<template>
  <div>
    <UiPageHeader subject="ログイン" subheading="Login" />

    <div class="l-container--small l-container--contents">
      <form @submit.prevent="handleSubmit" class="c-form">
        <UiAlertError v-if="error" :error="errorMessage" />
        <div class="c-form-group">
          <label for="email" class="c-form-label">メールアドレス</label>
          <input
            v-model="formData.email"
            name="email"
            type="email"
            id="email"
            @input="clearErrorMessages"
          />
        </div>
        <div class="c-form-group">
          <label for="password" class="c-form-label">パスワード</label>
          <input
            v-model="formData.password"
            name="password"
            type="password"
            id="password"
            @input="clearErrorMessages"
          />
        </div>
        <div class="c-form-group">
          <UiSubmitButton type="submit" :loading="loading">
            ログイン
          </UiSubmitButton>
        </div>
        <div class="u-text-align-center u-mt-25">
          <NuxtLink to="/login/register">会員登録</NuxtLink>
          または
          <NuxtLink to="/login/reminder">パスワードをお忘れの方</NuxtLink>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
const { login } = useAuth(); // uses the default signIn function provided by nuxt-auth

const formData = reactive({
  email: '',
  password: '',
});
const error = ref(null);
const errorMessage = [
  {
    message: 'メールアドレスまたはパスワードが正しくありません。',
  },
];

const loading = ref(false);

const handleSubmit = async () => {
  try {
    loading.value = true;
    await login({ ...formData });

    useRouter().push('/');
  } catch (e) {
    error.value = e?.data?.errors || [];
  }
  loading.value = false;
};

const clearErrorMessages = () => {
  errorMessage.value = '';
};
</script>
