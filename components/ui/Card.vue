<template>
  <li class="c-topics__card__item">
    <NuxtLink class="c-topics__card__link" :to="href">
      <div class="c-topics__card__picture">
        <img alt="dummy picture" :src="imageUrl" />
      </div>
      <div class="c-topics__card__contents">
        <div class="c-topics__title c-topics__space">
          {{ text }}
        </div>
      </div>
    </NuxtLink>
  </li>
</template>

<script setup>
const props = defineProps({
  href: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: false,
  },
  text: {
    type: String,
    required: true,
  },
});
</script>
