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

<script setup>
const config = useRuntimeConfig();
const subject = "ニュース";
const subheading = "News Release";

const { data: news } = await useFetch(
  `${config.public.baseURL}/rcms-api/1/news/list`
);
const { data: master } = await useFetch(
  // reverse this later gaurav
  `${config.public.baseURL}/rcms-api/1/master`
);
</script>
