<template>
  <div>
    <UiNavLink :subject="subject" />
    <UiPagetitle :subject="subject" :subheading="subheading" />
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
          <button type="submit" class="c-button--primary u-width-100">
            ログイン
          </button>
        </div>
        <div class="u-text-align-center u-mt-25">
          <NuxtLink to="/login/register">会員登録</NuxtLink>
          <!-- または
          <NuxtLink to="/login/reminder">パスワードをお忘れの方</NuxtLink> -->
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
const { login } = useAuth(); // uses the default signIn function provided by nuxt-auth

const subject = "ログイン";
const subheading = "Login";
const formData = reactive({
  email: "",
  password: "",
});
const error = ref(null);
const errorMessage = [
  {
    message: "メールアドレスまたはパスワードが正しくありません。",
  },
];

const handleSubmit = async () => {
  try {
    await login({ ...formData });
    useRouter().push("/");
  } catch (error) {
    console.error(e);
    error.value = e.response.data.errors;
  }
};

const clearErrorMessages = () => {
  errorMessage.value = '';
};
</script>
