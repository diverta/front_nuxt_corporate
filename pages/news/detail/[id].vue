<template>
  <div>
    <UiNavLink :path="path" :subject="response.details.subject" />
    <UiPagetitle
      :subject="response.details.group_nm"
      :subheading="subheading"
    />
    <div class="l-container--col-2 l-container--contents">
      <div class="l-container--col-2__main">
        <ContentDetailBody :details="response.details" :button="button" />
      </div>
      <ContentSideBar :itemList="master.list" />
    </div>
  </div>
</template>

<script setup>
const config = useRuntimeConfig();
const path = [{ label: 'ニュース', to: '/news' }];
const button = [{ label: 'ニュースリリース一覧へ戻る', to: '/news/' }];
const subheading = 'News Release';

const route = useRoute();

const { data: response } = await useFetch(
  `${config.public.baseURL}/rcms-api/1/news/details/${route.params.id}`
);
const { data: master } = await useFetch(
  // reverse this later gaurav
  `${config.public.baseURL}/rcms-api/1/master`
);
</script>
