<template>
    <header class="p-header">
      <div class="p-header__inner l-header">
        <h1 class="p-header__logo">
          <NuxtLink to="/"
            ><img
              src="https://hasebetest-template-test-simple.g.kuroco-img.app/files/user/images/logo_wh.svg"
              alt="RCMS テンプレート"
          /></NuxtLink>
        </h1>
        <!-- <div
          @click="Drawer = !Drawer"
          class="icon-animation type-1"
          data-js="nav-menu"
        >
          <span class="top"></span>
          <span class="middle"></span>
          <span class="bottom"></span>
        </div> -->
        <!-- <div v-if="userName.member_id != null">
          ようこそ{{ userName.name1 }}
          <div>会員ステータス={{ userStatus }}</div>
          <button type="button" @click="$auth.logout()">ログアウト</button>
          <NuxtLink to="/profile">プロフィール</NuxtLink>
        </div>
        <div v-else>
          <NuxtLink to="/login">ログイン</NuxtLink>
        </div> -->
        <ul class="p-header__menu">
          <li class="p-header__menu__item active">
            <NuxtLink to="/">トップ</NuxtLink>
          </li>
          <li class="p-header__menu__item">
            <NuxtLink to="/news/">ニュース</NuxtLink>
          </li>
          <li class="p-header__menu__item">
            <NuxtLink to="/service/">事業内容</NuxtLink>
          </li>
          <li class="p-header__menu__item">
            <NuxtLink to="/company/">企業情報</NuxtLink>
          </li>
          <li class="p-header__menu__item">
            <NuxtLink to="/ltd-news/">限定記事</NuxtLink>
          </li>
          <li class="p-header__menu__item">
            <NuxtLink to="/contact/">お問い合わせ</NuxtLink>
          </li>
        </ul>
      </div>
    </header>
  </template>
  
  <!-- <script>
  export default {
    data() {
      return {
        Drawer: false,
      };
    },
    computed: {
      userName() {
        return this.$auth.user;
      },
      userStatus() {
        if ("105" in this.$auth.user.group_ids) {
          return this.$auth.user.group_ids["105"];
        } else {
          return this.$auth.user.group_ids["104"];
        }
      },
    },
  };
  </script> -->

<script setup>
const Drawer = false;
</script>
  