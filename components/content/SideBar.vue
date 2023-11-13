<template>
  <div class="l-container--col-2__side">
    <nav>
      <h2 class="c-heading--lv3">アーカイブ</h2>
      <ul>
        <li v-for="(n, i) in reversed" :key="i">
          <NuxtLink
            :to="`/news/${getFilterParam(n.Filter)}`"
            class="u-display-block u-pa-5"
          >
            <i class="c-link__icon c-list__icon -front fas fa-caret-right"></i
            >{{ n.Year }}年{{ n.Month }}月 ({{ n.Count }})</NuxtLink
          >
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
const props = defineProps({
  conditions: {
    type: Array,
    default: () => [],
  },
});

const reversed = computed(() => props.conditions?.slice().reverse());

const getFilterParam = (filter = '') => {
  if (filter === '') {
    return '';
  }
  const searchParam = new URLSearchParams({ filter });
  return `?${searchParam.toString()}`;
};
</script>
