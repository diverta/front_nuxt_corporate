<template>
    <div class="l-container--wrap">
      <UiNavLink :subject="subject" />
      <div class="l-container--middle l-container--contents">
        <NewsList :subject="subject" v-bind="news" />
        <ContentSideBar :itemList="master.list" /> 
      </div>
    </div>
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
const { data: news } = await useFetch(
  "https://dev-nuxt-corporate.g.kuroco.app/rcms-api/1/news/list"
);
const { data: master } = await useFetch( // reverse this later gaurav
  "https://dev-nuxt-corporate.g.kuroco.app/rcms-api/1/master"
); 
</script>
  