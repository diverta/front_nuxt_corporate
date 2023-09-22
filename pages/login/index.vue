<template>
  <div>
    <UiNavLink :subject="subject" />
    <UiPagetitle :subject="subject" :subheading="subheading" />
    <div class="l-container--small l-container--contents">
      {{ isLoggedIn }}
      {{ JSON.stringify(authUser, null, 2) }}
      <form @submit.prevent="handleSubmit" class="c-form">
        <UiAlertError v-if="errorMessage" :error="errorMessage" />
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
          <button type="submit" class="c-button--primary u-width-100">
            ログイン
          </button>
        </div>
        <!-- TODO -->
        <!-- <div class="u-text-align-center u-mt-25">
          <NuxtLink to="/login/register">会員登録</NuxtLink>
          または
          <NuxtLink to="/login/reminder">パスワードをお忘れの方</NuxtLink>
        </div> -->
      </form>
    </div>
  </div>
</template>

<script setup>
const { authUser, isLoggedIn, login, logout, register, profile } = useAuth(); // uses the default signIn function provided by nuxt-auth

const subject = 'ログイン';
const subheading = 'Login';
const formData = reactive({
  email: '',
  password: '',
});
const errorMessage = ref('');

const handleSubmit = async (e) => {
  try {
    e.preventDefault();
    await login({ ...formData });
    useRouter().push('/');
  } catch (error) {
    errorMessage.value = 'メールアドレスまたはパスワードが正しくありません。';
  }
};

const clearErrorMessages = () => {
  errorMessage.value = '';
};
</script>
