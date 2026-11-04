<template>
  <button
    :class="['u-width-100', `c-button--${buttonStatus}`, $attrs.class]"
    v-bind="{
      ...$attrs,
      onClick: handleClickEvent,
    }"
  >
    <div class="c-button--loading__wrapper" v-if="$attrs.loading">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 50 50"
        style="enable-background: new 0 0 50 50"
        xml:space="preserve"
      >
        <path
          d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z"
        >
          <animateTransform
            attributeType="xml"
            attributeName="transform"
            type="rotate"
            from="0 25 25"
            to="360 25 25"
            dur="0.6s"
            repeatCount="indefinite"
          />
        </path>
      </svg>
    </div>
    <slot v-else> <span>送信</span> </slot>
  </button>
</template>

<script setup>
defineOptions({
  inheritAttrs: false,
});

const attrs = useAttrs();

const buttonStatus = computed(() => {
  if (attrs?.disabled) {
    return 'disabled';
  }
  if (attrs?.loading) {
    return 'loading';
  }
  return 'primary';
});

// If it's disable, just ignore it
const handleClickEvent = (event) => {
  if (attrs.disabled || attrs.loading) {
    event.preventDefault();
    event.stopPropagation();
    return;
  }
  attrs?.onClick?.(event);
};
</script>
