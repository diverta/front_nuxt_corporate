<template>
  <ClientOnly>
    <div v-if="response">
      <UiNavLink :path="path" :subject="response.details.subject" />
      <UiPagetitle
        :subject="response.details.group_nm"
        :subheading="subheading"
      />
      <div class="l-container--col-2 l-container--contents">
        <div class="l-container--col-2__main">
          <ContentDetailBody :details="response.details" :button="button" />
        </div>
        <ContentSideBar :itemList="reverseItems" />
      </div>
    </div>
  </ClientOnly>
</template>

<script setup>
const path = [{ label: 'ニュース', to: '/news' }];
const button = [{ label: 'ニュースリリース一覧へ戻る', to: '/news/' }];
const subheading = 'News Release';

const route = useRoute();
const preview_token = route.query.preview_token;

const response = await useFetch('/rcms-api/1/preview', {
  params: {
    preview_token,
    server: false,
  },
});
const { data: master } = await useFetch('/rcms-api/1/master');
const reverseItems = computed(() => master.value?.list?.slice().reverse());
</script>
