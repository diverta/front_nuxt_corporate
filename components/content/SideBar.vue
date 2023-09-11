<template>
  <div class="l-container--col-2__side">
    <nav>
      <h2 class="c-heading--lv3">アーカイブ</h2>
      <ul>
        <li v-for="(n, i) in itemList" :key="i">
          <template v-if="preview">
            <NuxtLink
              :to="`/news/?filter=ymd%20%3E%3D%3Arelatively%20%22${n.Year}-${
                n.Month
              }-1%22%20AND%20ymd%20%3C%3Arelatively%20%22${n.Year}-${
                Number(n.Month) + 1
              }-1%22`"
              class="u-display-block u-pa-5"
            >
              <i class="c-link__icon c-list__icon -front fas fa-caret-right"></i
              >{{ n.Year }}年{{ n.Month }}月 ({{ n.Count }})</NuxtLink
            >
          </template>
          <template v-else>
            <NuxtLink
              :to="`/news/?filter=${n.Filter}`"
              class="u-display-block u-pa-5"
            >
              <i class="c-link__icon c-list__icon -front fas fa-caret-right"></i
              >{{ n.Year }}年{{ n.Month }}月 ({{ n.Count }})</NuxtLink
            >
          </template>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
const props = defineProps({
  itemList: {
    type: Array,
    required: true,
  },
  preview: {
    type: Boolean,
    required: false,
  },
});
</script>
