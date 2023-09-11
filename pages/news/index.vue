<template>
  <NuxtLayout>
    <div class="l-container">
      <UiNavLink :subject="subject" />
      <section>
        <UiPagetitle :subject="subject" :subheading="subheading" />
        <div class="l-container--col-2 l-container--contents">
          <div class="l-container--col-2__main">
            <NewsList :subject="subject" v-bind="news" />
          </div>
          <ContentSideBar :itemList="master.list" />
        </div>
      </section>
    </div>
  </NuxtLayout>
</template>

<!-- <script>
  export default {
    data() {
      return {
        subject: "ニュース",
      };
    },
    watchQuery: ["filter"],
    async asyncData({ $axios, query }) {
      return {
        news: await $axios.$get("/rcms-api/1/news/list", {
          params: { filter: query.filter },
        }),
        master: await $axios.$get("/rcms-api/1/master"),
      };
    },
    computed: {
      reverseItems() {
        return this.master.list.slice().reverse();
      },
    },
  };
  </script> -->

<script setup>
// const runtime = useRuntimeConfig();
const subject = "ニュース";
const subheading = "News Release";
const { data: news } = await useFetch(
  "https://dev-nuxt-corporate.g.kuroco.app/rcms-api/1/news/list"
);
const { data: master } = await useFetch(
  // reverse this later gaurav
  "https://dev-nuxt-corporate.g.kuroco.app/rcms-api/1/master"
);
</script>
