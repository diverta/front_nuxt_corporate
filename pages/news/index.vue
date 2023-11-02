<template>
  <div class="l-container">
    <UiPageHeader :subject="subject" :subheading="subheading" />
    <section>
      <div class="l-container--col-2 l-container--contents">
        <div class="l-container--col-2__main">
          <NewsList :subject="subject" :list="news?.list" />
        </div>
        <ContentSideBar :conditions="newsConditionMaster?.list" />
      </div>
    </section>
  </div>
</template>

<script setup>
const config = useRuntimeConfig();

const subject = 'ニュース';
const subheading = 'News Release';

const route = useRoute();
const filter = computed(() => route.query.filter);

const { data: news } = await useFetch(
  `${config.public.kurocoApiDomain}/rcms-api/1/news/list`,
  {
    credentials: 'include',
    query: {
      filter,
    },
    watch: [filter],
  }
);
const { data: newsConditionMaster } = await useFetch(
  `${config.public.kurocoApiDomain}/rcms-api/1/master`,
  {
    credentials: 'include',
  }
);
</script>
