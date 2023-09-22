<template>
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
</template>

<script setup>
const subject = 'ニュース';
const subheading = 'News Release';

const { data: news } = await useKurocoApi('/rcms-api/1/news/list');
const { data: master } = await useKurocoApi(
  // reverse this later gaurav
  '/rcms-api/1/master'
);
</script>
