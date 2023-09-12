<template>
  <NuxtLayout>
    <div>
      <UiNavLink :subject="response.details.subject" />
      <ContentPlainBody v-bind="response.details" :subheading="subheading" />
    </div>
  </NuxtLayout>
</template>

<!-- <script>
export default {
  data() {
    return {
      subheading: "Company",
    };
  },
  async asyncData({ $axios }) {
    const response = await $axios.$get(`/rcms-api/1/content/details/company`);
    return {
      details: response.details,
    };
  },
};
</script> -->

<script setup>
const subheading = "Company";
const { data: response } = await useFetch(
  "https://dev-nuxt-corporate.g.kuroco.app/rcms-api/1/content/details/company"
);
// const details = response.details;
</script>
