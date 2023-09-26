<template>
  <div>
    <UiNavLink :path="path" :subject="subject" />
    <section>
      <UiPagetitle :subject="subject" :subheading="subheading" />
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
              <button
                type="button"
                @click.prevent="handleDeleteProfile"
                class="c-button--primary u-width-100"
              >
                削除する
              </button>
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
const { deleteProfile } = useAuth();

const path = [{ label: "マイページ", to: "/mypage/" }];
const subject = "退会";
const subheading = "Delete";
const message = "退会が完了しました。";
const deleteDone = ref(false);
const error = ref(null);

const handleDeleteProfile = async () => {
  try {
    await deleteProfile({});
    deleteDone.value = true;
  } catch (err) {
    console.log(err);
    error.value = err.response.data.errors[0].message;
  }
};
</script>
