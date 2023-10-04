<template>
  <div class="l-container">
    <UiNavLink :subject="subject" />
    <section>
      <UiPagetitle :subject="subject" :subheading="subheading" />
      <div class="l-container--col-2 l-container--contents">
        <div class="l-container--col-2__main">
          <NewsList :subject="subject" v-bind="news" />
        </div>
        <ContentSideBar :itemList="reverseItems" />
      </div>
    </section>
  </div>
</template>

<script setup>
const subject = "ニュース";
const subheading = "News Release";

const route = useRoute();
console.log(route.query.filter); // to complete for same page reroute

const { data: news } = await useKurocoApi("/rcms-api/1/news/list", {
        params: { filter: route.query.filter },
      });
const { data: master } = await useKurocoApi("/rcms-api/1/master");
const reverseItems = computed(() => {
  return master.value?.list?.slice().reverse();
});


</script>
