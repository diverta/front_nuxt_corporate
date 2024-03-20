<template>
  <ClientOnly>
    <div>
      <AppHeader />
      <div class="l-container">
        <slot />
      </div>
      <AppFooter />
    </div>
  </ClientOnly>
</template>
