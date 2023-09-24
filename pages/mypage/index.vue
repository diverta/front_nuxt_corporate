<template>
  <div>
    <UiNavLink :subject="subject" />
    <section>
      <UiPagetitle :subject="subject" :subheading="subheading" />
      <div class="l-container--col-2 l-container--contents">
        <div class="l-container--col-2__main">
          <div class="c-article">
            <div v-if="Popup" class="l-container--small"></div>
            <div v-else>
              <UiAlertSuccess v-if="groupUpdate" :message="message" />
              <p class="u-ma-0">
                ようこそ！{{ response.details.name1 }}
                {{ response.details.name2 }}さん
              </p>
              <h2>会員情報</h2>
              <div class="c-form-group">
                <dl>
                  <dt>お名前</dt>
                  <dd>
                    {{ response.details.name1 }} {{ response.details.name2 }}
                  </dd>
                </dl>
                <dl>
                  <dt>メールアドレス</dt>
                  <dd>{{ response.details.email }}</dd>
                </dl>
                <dl>
                  <dt>会員ステータス</dt>
                  <dd>{{ userStatusText }}</dd>
                </dl>
              </div>
              <div class="u-text-align-center" v-if="userStatusText">
                <button
                  type="button"
                  class="c-button--primary"
                  @click="Popup = true"
                >
                  {{ userButtonText }}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="l-container--col-2__side">
          <h2 class="is-sp c-heading--lv4">会員メニュー</h2>
          <nav>
            <ul>
              <li>
                <NuxtLink
                  to="/mypage/edit"
                  class="c-button u-display-flex u-display-flex-justify-content-between u-width-100"
                  >会員情報の更新</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  to="/mypage/delete"
                  class="c-button u-display-flex u-display-flex-justify-content-between u-width-100"
                  >退会</NuxtLink
                >
              </li>
              <li>
                <button
                  type="button"
                  @click="
                    () => {
                      logout();
                      useRouter().push('/');
                    }
                  "
                  class="c-button u-display-flex u-display-flex-justify-content-between u-width-100"
                >
                  <span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="u-mr-5"
                    >
                      <path
                        d="M6 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V3.33333C2 2.97971 2.14048 2.64057 2.39052 2.39052C2.64057 2.14048 2.97971 2 3.33333 2H6"
                        stroke="white"
                        stroke-width="1.33333"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10.6667 11.3333L14.0001 7.99996L10.6667 4.66663"
                        stroke="white"
                        stroke-width="1.33333"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M14 8H6"
                        stroke="white"
                        stroke-width="1.33333"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    ログアウト
                  </span>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const { authUser, isLoggedIn, logout, inquiry } = useAuth();

const subject = "マイページ";
const subheading = "Mypage";
const error = ref(null);
const Popup = ref(false);
const groupUpdate = ref(false);
const message = "会員種別の変更申請を受け付けました。メールをご確認ください。";

const { data: response } = await useKurocoApi("/rcms-api/1/member/me");

const userStatusText = computed(() => {
  const groupId = response.value?.details?.group_ids?.[0];
  switch (groupId) {
    case "104":
      return "通常会員";
    case "105":
      return "プレミアム会員";
    default:
      return "";
  }
});

const userButtonText = computed(() => {
  const groupId = response.value?.details?.group_ids?.[0];
  switch (groupId) {
    case "104":
      return "プレミアム会員にアップデートする";
    case "105":
      return "通常会員にもどる";
    default:
      return "";
  }
});

</script>
