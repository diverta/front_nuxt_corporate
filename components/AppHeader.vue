<template>
  <header class="l-header" :class="{ 'is-open': Drawer }">
    <div class="l-header__inner">
      <div class="l-header__logo">
        <NuxtLink to="/" @click.native="Drawer = false"
          ><img src="~/assets/image/logo.svg" alt="Company Name" />
        </NuxtLink>
      </div>
      <nav class="l-header__nav">
        <button
          @click="Drawer = !Drawer"
          type="button"
          class="l-header__nav__toggle"
        >
          <div class="l-header__nav__toggle__icon">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
        <div class="l-header__nav__inner">
          <ul class="l-header__nav__list">
            <li class="l-header__nav__list__item">
              <NuxtLink to="/company/" @click.native="Drawer = false"
                >企業情報</NuxtLink
              >
            </li>
            <li class="l-header__nav__list__item">
              <NuxtLink to="/service/" @click.native="Drawer = false"
                >事業内容</NuxtLink
              >
            </li>
            <li class="l-header__nav__list__item">
              <NuxtLink to="/news/" @click.native="Drawer = false"
                >ニュースリリース</NuxtLink
              >
            </li>
            <li class="l-header__nav__list__item">
              <NuxtLink to="/ltd-news/" @click.native="Drawer = false"
                >会員限定コンテンツ</NuxtLink
              >
            </li>
            <li class="l-header__nav__list__item">
              <NuxtLink to="/contact/" @click.native="Drawer = false"
                >お問い合わせ</NuxtLink
              >
            </li>
          </ul>
          <div class="l-header__nav__options">
            <ClientOnly>
              <template v-if="isLoggedIn">
                <p class="is-sp c-text--small u-mt-0">
                  ようこそ！{{ authUser.name1 }}さん
                </p>
                <NuxtLink
                  to="/mypage"
                  class="l-header__nav__options__button"
                  @click.native="Drawer = false"
                  >マイページ</NuxtLink
                >
                <button
                  type="button"
                  @click="
                    () => {
                      Drawer = false;
                      logout();
                      useRouter().push('/');
                    }
                  "
                  class="is-sp l-header__nav__options__button u-display-flex u-display-flex-align-items-center"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
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
                </button>
              </template>
              <template v-else>
                <NuxtLink
                  @click.native="Drawer = false"
                  to="/login/"
                  class="l-header__nav__options__button u-display-flex u-display-flex-align-items-center"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 2H12.6667C13.0203 2 13.3594 2.14048 13.6095 2.39052C13.8595 2.64057 14 2.97971 14 3.33333V12.6667C14 13.0203 13.8595 13.3594 13.6095 13.6095C13.3594 13.8595 13.0203 14 12.6667 14H10"
                      stroke="white"
                      stroke-width="1.33333"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M6.66675 11.3333L10.0001 7.99996L6.66675 4.66663"
                      stroke="white"
                      stroke-width="1.33333"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10 8H2"
                      stroke="white"
                      stroke-width="1.33333"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  ログイン</NuxtLink
                >
              </template>
            </ClientOnly>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { computed, ref } from 'vue';
const Drawer = ref(false);
const { authUser, isLoggedIn, logout } = useAuth();
</script>
