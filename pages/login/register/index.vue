<template>
    <section>
      <UiNavLink :subject="subject" />
      <UiPagetitle :subject="subject" :subheading="subheading" />
      <div class="l-container--small l-container--contents">
        {{ isLoggedIn }}
      {{ JSON.stringify(authUser, null, 2) }}
        <template v-if="signupDone">
          <UiAlertSuccess :message="message" />
        </template>
        <template v-else>
          <div class="c-form-group u-text-align-center">
            <p class="c-text--small">
              <span class="c-form-label__required">*</span>は必須項目です。
            </p>
          </div>
          <UiAlertError v-if="errorMessage" :error="errorMessage" />
          <form @submit.prevent="handleSignup" class="c-form">
            <div class="c-form-group">
              <label for="name1" class="c-form-label">名前（姓）</label>
              <span class="c-form-label__required">*</span>
              <input v-model="user.name1" name="name1" type="text" id="name1" />
            </div>
            <div class="c-form-group">
              <label for="name2" class="c-form-label">名前（名）</label>
              <input v-model="user.name2" name="name2" type="text" id="name2" />
            </div>
            <div class="c-form-group">
              <label for="email" class="c-form-label">メールアドレス</label>
              <input v-model="user.email" name="email" type="email" />
            </div>
            <div class="c-form-group">
              <div class="u-display-flex">
                <div class="u-display-flex-grow-1">
                  <label for="login_pwd" class="c-form-label">パスワード</label>
                  <span class="c-form-label__required">*</span>
                </div>
                <p class="u-ma-0 c-text--small">半角英数8文字以上</p>
              </div>
              <input
                v-model="user.login_pwd"
                name="login_pwd"
                type="password"
                id="login_pwd"
                @input="clearErrorMessages"
              />
            </div>
            <div class="c-form-group">
              <button type="submit" class="c-button--primary u-width-100">登録</button>
            </div>
            <div class="c-form-group u-text-align-center">
              すでに会員の方は<NuxtLink to="/login">ログイン</NuxtLink>
            </div>
            <p class="c-text--small u-mt-25">
              続行することで<NuxtLink to="#">利用規約</NuxtLink>及び<NuxtLink
                to="/privacy/"
                >プライバシーポリシー</NuxtLink
              >に同意したこととなります。
            </p>
          </form>
        </template>
      </div>
    </section>
  </template>

<script setup>
const { authUser, isLoggedIn, login, logout, register, profile } = useAuth(); // uses the default signIn function provided by nuxt-auth

const subject = '会員登録';
const subheading = 'Sign Up';

const signupDone = ref(false);
const user = ref({
  name1: '',
  name2: '',
  email: '',
  login_pwd: ''
});
const errorMessage = ref('');
const message = '登録が完了しました';

const handleSignup = async (e) => {
  try {
    e.preventDefault();
    await register({ ...user.value });
    signupDone.value = true;
  } catch (error) {
    console.log(error);
    errorMessage.value = error.response.data.errors;
  }
};

const clearErrorMessages = () => {
  errorMessage.value = '';
};
</script>
  